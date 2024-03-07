import { useEffect } from 'react';
import { useStripe } from '@stripe/react-stripe-js';
import { StripeExpressCheckoutElementOptions } from '@stripe/stripe-js';

import { getClientSecret } from '@/widgets/PaymentSteps/lib/api';
import { paymentStore, setClientSecretAction } from '@/widgets/PaymentSteps/lib/store';

import { config } from '@/shared/lib/config';
import { errorMessage } from '@/shared/lib/helpers';
import { useTypedParams } from '@/shared/lib/hooks';
import { localBasketStore } from '@/shared/lib/store';
import { Links } from '@/shared/types';

export const StripeExpress = ({ amount }: { amount: string; }) => {
  const products = localBasketStore((state) => state.products);

  const carrier = paymentStore((state) => state.carrier);
  const clientSecret = paymentStore((state) => state.clientSecret);

  const stripe = useStripe();
  const { lng } = useTypedParams();

  useEffect(() => {
    if (products?.length) {
      (async () => {
        const secret = await getClientSecret(amount);

        setClientSecretAction(secret);
      })();
    }
  }, [products]);

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
      applePay: 'always',
      googlePay: 'always',
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
      // need cents
      amount: Number((quantity * price) * 100),
    }));

    if (carrier) {
      lineItems?.push({
        name: carrier.name,
        // need cents
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
      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret,
        confirmParams: {
          // return_url: 'https://3a99-91-242-149-25.ngrok-free.app/en/checkout?redirect_step=3',
          return_url: `${config?.urls.site}/${lng}/${Links.CHECKOUT}`,
        },
      });

      if (error?.message) {
        errorMessage(error.message, { style: { top: '100px', maxWidth: '450px' } });
      }
    } catch (error) {
      errorMessage(JSON.stringify(error), { style: { top: '100px', maxWidth: '450px' } });
    }
  });

  return null;
};
