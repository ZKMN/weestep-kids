import React from 'react';
import { useFormContext } from 'react-hook-form';

import { DELIVERY_INITIAL_VALUES } from '@/widgets/PaymentSteps/consts';
import { IDeliveryDetailsStepProps } from '@/widgets/PaymentSteps/types';

import { IntlButton } from '@/shared/components';

export const SubmitFormButton = ({
  setActiveStep,
  setDeliveryDetails,
}: Pick<IDeliveryDetailsStepProps, 'setActiveStep' | 'setDeliveryDetails'>) => {
  const { formState, getValues } = useFormContext<typeof DELIVERY_INITIAL_VALUES>();

  return (
    <IntlButton
      intl={{ label: 'next' }}
      size="small"
      color="primary"
      disabled={!formState.isValid}
      onClick={() => {
        setActiveStep((step) => step + 1);
        setDeliveryDetails(getValues());
      }}
    />
  );
};
