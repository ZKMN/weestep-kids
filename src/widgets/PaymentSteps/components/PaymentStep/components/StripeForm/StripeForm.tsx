import React from 'react';
import { Warning } from '@mui/icons-material';
import { Divider, Grid, TextField } from '@mui/material';
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useStripe,
} from '@stripe/react-stripe-js';

import { DELIVERY_INITIAL_VALUES } from '@/widgets/PaymentSteps/consts';
import { useSubmitStripePayment, useValidateCreditCardInputs } from '@/widgets/PaymentSteps/lib/hooks';
import { TActiveStep } from '@/widgets/PaymentSteps/types';

import { IntlButton, LoadingIntlButton } from '@/shared/components';
import { useClientTranslation } from '@/shared/lib/hooks';

import { StripeInput } from '..';

export const StripeForm = ({
  amount,
  deliveryDetails,
  setActiveStep,
}: TActiveStep & { amount: number; deliveryDetails?: typeof DELIVERY_INITIAL_VALUES; }) => {
  const stripe = useStripe();
  const {
    completed,
    cardCvcError,
    cardNumberError,
    cardExpiryError,
  } = useValidateCreditCardInputs();

  const [translate] = useClientTranslation('form');
  const [handleSubmit, { loading }] = useSubmitStripePayment({ amount, deliveryDetails, setActiveStep });

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="cardNumber"
            label={translate('labels.creditCardNumber')}
            variant="outlined"
            error={!!cardNumberError}
            helperText={cardNumberError && translate(cardNumberError)}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: cardNumberError && <Warning color="error" />,
              inputComponent: StripeInput,
              inputProps: {
                component: CardNumberElement,
              },
            }}
          />
        </Grid>

        <Grid item flex={1}>
          <TextField
            required
            fullWidth
            name="cardExpiry"
            label={translate('labels.expiredDate')}
            variant="outlined"
            error={!!cardExpiryError}
            helperText={cardExpiryError && translate(cardExpiryError)}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: cardExpiryError && <Warning color="error" />,
              inputComponent: StripeInput,
              inputProps: {
                component: CardExpiryElement,
              },
            }}
          />
        </Grid>

        <Grid item flex={1}>
          <TextField
            required
            fullWidth
            name="cvc"
            label={translate('labels.cvc')}
            variant="outlined"
            error={!!cardCvcError}
            helperText={cardCvcError && translate(cardCvcError)}
            InputLabelProps={{ shrink: true }}
            InputProps={{
              endAdornment: cardCvcError && <Warning color="error" />,
              inputComponent: StripeInput,
              inputProps: {
                component: CardCvcElement,
              },
            }}
          />
        </Grid>
      </Grid>

      <Divider sx={{ margin: '24px 0' }} />

      <Grid container spacing={2}>
        <Grid item flex={1}>
          <IntlButton
            intl={{ label: 'back' }}
            size="small"
            color="secondary"
            variant="outlined"
            onClick={() => setActiveStep((step) => step - 1)}
          />
        </Grid>

        <Grid item flex={1}>
          <LoadingIntlButton
            intl={{ label: 'confirmOrder' }}
            size="small"
            onClick={handleSubmit}
            loading={loading}
            disabled={!stripe || !completed}
          />
        </Grid>
      </Grid>
    </>
  );
};
