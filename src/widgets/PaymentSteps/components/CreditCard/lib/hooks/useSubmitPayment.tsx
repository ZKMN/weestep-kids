import { FormEvent } from 'react';
import { useElements, useStripe } from '@stripe/react-stripe-js';
import { useBoolean } from 'ahooks';
import axios from 'axios';

import { errorMessage } from '@/shared/lib/helpers';

export const useSubmitStripePayment = (): [(event: FormEvent<HTMLFormElement>) => void, { loading: boolean; }] => {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, { setTrue, setFalse }] = useBoolean(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const cardElement = elements?.getElement('cardNumber');

    if (!stripe || !cardElement) {
      return;
    }

    setTrue();

    const { data: clientSecret } = await axios.post('/api/create-payment-intent', {
      data: { amount: 89 },
    });

    try {
      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: cardElement,
          // billing_details: {
          //   address: {
          //     city: '',
          //     country: '',
          //     line1: '',
          //     line2: '',
          //     postal_code: '',
          //     state: '',
          //   },
          //   email: '',
          //   name: '',
          //   phone: '',
          // },
        },
      });

      if (result.error?.message) {
        errorMessage(result.error.message);
        return;
      }

      console.log('Payment succeeded:', result.paymentIntent);
    } catch (error) {
      errorMessage(JSON.stringify(error));
    } finally {
      setFalse();
    }
  };

  return [handleSubmit, { loading }];
};
