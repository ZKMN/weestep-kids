import React from 'react';
import { useFormContext } from 'react-hook-form';

import { DELIVERY_INITIAL_VALUES } from '@/widgets/PaymentSteps/consts';
import { incrStepAction, setDeliveryDetailsAction } from '@/widgets/PaymentSteps/lib/store';

import { IntlButton } from '@/shared/components';

export const SubmitFormButton = () => {
  const { formState, getValues } = useFormContext<typeof DELIVERY_INITIAL_VALUES>();

  return (
    <IntlButton
      intl={{ label: 'next' }}
      size="small"
      color="primary"
      disabled={!formState.isValid}
      onClick={() => {
        incrStepAction();
        setDeliveryDetailsAction(getValues());
      }}
    />
  );
};
