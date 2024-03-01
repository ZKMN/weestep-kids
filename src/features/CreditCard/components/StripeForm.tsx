import React from 'react';
import { Warning } from '@mui/icons-material';
import { Grid, TextField } from '@mui/material';
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useStripe,
} from '@stripe/react-stripe-js';

import { LoadingIntlButton } from '@/shared/components';
import { useClientTranslation } from '@/shared/lib/hooks';

import { StripeInput } from '.';

import { useSubmitStripePayment, useValidateCreditCardInputs } from '../lib/hooks';

export const StripeForm = () => {
  const stripe = useStripe();

  const {
    completed,
    cardCvcError,
    cardNumberError,
    cardExpiryError,
  } = useValidateCreditCardInputs();

  const [handleSubmit, { loading }] = useSubmitStripePayment();

  const { translate } = useClientTranslation('form');

  return (
    <form onSubmit={handleSubmit}>
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

        <Grid item xs={12}>
          <LoadingIntlButton
            intl={{ label: 'confirmOrder' }}
            type="submit"
            loading={loading}
            disabled={!stripe || !completed}
          />
        </Grid>
      </Grid>
    </form>
  );
};
