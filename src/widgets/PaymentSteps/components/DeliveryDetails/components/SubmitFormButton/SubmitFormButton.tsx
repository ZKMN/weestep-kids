import React from 'react';
import { useFormContext } from 'react-hook-form';

import { IntlButton } from '@/shared/components';

import { CUSTOMER_INITIAL_VALUES } from '../../consts';
import { IDeliveryDetails } from '../../types';

export const SubmitFormButton = ({
  setActiveStep,
  setDeliveryDetails,
}: IDeliveryDetails) => {
  const { formState, getValues } = useFormContext<typeof CUSTOMER_INITIAL_VALUES>();

  return (
    <IntlButton
      intl={{ label: 'next' }}
      size="small"
      color="primary"
      onClick={() => {
        setActiveStep(2);
        setDeliveryDetails(getValues());
      }}
      disabled={!formState.isDirty || !formState.isValid}
    />
  );
};
