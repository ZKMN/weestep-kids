import { useElements, useStripe } from '@stripe/react-stripe-js';
import { useBoolean } from 'ahooks';
import axios from 'axios';
import { useQueryState } from 'nuqs';

import { errorMessage } from '@/shared/lib/helpers';
import { localBasketStore } from '@/shared/lib/store';

import { CUSTOMER_INITIAL_VALUES } from '../../consts';
import { TActiveStep } from '../../types';

export const useSubmitStripePayment = ({
  amount,
  deliveryDetails,
  setActiveStep,
}: {
  amount: number;
  deliveryDetails?: typeof CUSTOMER_INITIAL_VALUES;
} & TActiveStep): [() => void, { loading: boolean; }] => {
  const products = localBasketStore((state) => state.products);

  const stripe = useStripe();
  const elements = useElements();

  const [, setSuccessId] = useQueryState('successId');
  const [loading, { setTrue, setFalse }] = useBoolean(false);

  const handleSubmit = async () => {
    const cardElement = elements?.getElement('cardNumber');

    if (!stripe || !cardElement) {
      return;
    }

    setTrue();

    try {
      const { data: clientSecret } = await axios.post('/api/create-payment-intent', {
        data: { amount: amount.toFixed(2) },
      });

      const metadata = products?.reduce((acc, item) => {
        acc[item.productId] = JSON.stringify(item);

        return acc;
      }, {} as { [key: string]: string; });

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          metadata,
          billing_details: {
            email: deliveryDetails?.email,
            name: `${deliveryDetails?.firstName} ${deliveryDetails?.lastName}`,
            phone: deliveryDetails?.phoneNumber,
          },
        },
      });

      if (result.error?.message) {
        errorMessage(result.error.message);

        return;
      }

      setSuccessId(String(result.paymentIntent?.id));
      setActiveStep((step) => step + 1);
    } catch (error) {
      errorMessage(JSON.stringify(error));
    } finally {
      setFalse();
    }
  };

  return [handleSubmit, { loading }];
};
