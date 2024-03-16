import { useStripe } from '@stripe/react-stripe-js';
import { StripeExpressCheckoutElementOptions } from '@stripe/stripe-js';

import { getClientSecret } from '@/widgets/PaymentSteps/lib/api';
import { paymentStore } from '@/widgets/PaymentSteps/lib/store';

import { config } from '@/shared/lib/config';
import { errorMessage } from '@/shared/lib/helpers';
import { useTypedParams } from '@/shared/lib/hooks';
import { localBasketStore } from '@/shared/lib/store';
import { Links } from '@/shared/types';

export const StripeExpress = ({ amount }: { amount: string; }) => {
  const products = localBasketStore((state) => state.products);
  const shippingDetails = paymentStore((state) => state.shippingDetails);

  const carrier = paymentStore((state) => state.carrier);

  const stripe = useStripe();
  const { lng } = useTypedParams();

  if (!stripe) {
    return null;
  }

  const elements = stripe.elements({
    mode: 'payment',
    locale: lng,
    amount: Number(amount) * 100,
    currency: 'eur',
    loader: 'always',
  });

  const expressCheckoutOptions: StripeExpressCheckoutElementOptions = {
    buttonType: {
      applePay: 'buy',
      googlePay: 'buy',
    },
    wallets: {
      applePay: 'auto',
      googlePay: 'auto',
    },
    layout: {
      maxRows: 3,
      maxColumns: 1,
    },
    paymentMethodOrder: ['google_pay', 'apple_pay'],
  };

  const expressCheckoutElement = elements.create('expressCheckout', expressCheckoutOptions);

  expressCheckoutElement.mount('#express-checkout-element');

  expressCheckoutElement.on('click', async ({ resolve }) => {
    const lineItems = products?.map(({ name, quantity, price }) => ({
      name: `${name} (${quantity})`,
      // stripe working with cents
      amount: Number((quantity * price) * 100),
    }));

    if (carrier) {
      lineItems?.push({
        name: carrier.name,
        // stripe working with cents
        amount: carrier.price * 100,
      });
    }

    resolve({
      business: { name: 'Weestep Kids' },
      lineItems,
    });
  });

  expressCheckoutElement.on('confirm', async () => {
    try {
      const clientSecret = await getClientSecret(amount);

      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          // return_url: 'https://3da0-91-242-149-25.ngrok-free.app/en/checkout',
          return_url: `${config?.urls.site}/${lng}/${Links.CHECKOUT}`,
          payment_method_data: {
            billing_details: {
              name: `${shippingDetails?.firstName} ${shippingDetails?.lastName}`,
              email: shippingDetails?.email,
              phone: shippingDetails?.phoneNumber,
            },
          },
        },
      });

      if (error?.message) {
        errorMessage(error.message, { style: { top: '100px', maxWidth: '450px' } });
      }
    } catch (error) {
      errorMessage('Express payment confirm error.');
    }
  });

  return null;
};
