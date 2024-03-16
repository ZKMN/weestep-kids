import React from 'react';
import { useBoolean } from 'ahooks';

import { paymentStore } from '@/widgets/PaymentSteps/lib/store';

import { AddressModal } from '@/entities/Modals';

import { IntlButton } from '@/shared/components';

export const AddressButton = () => {
  const carrier = paymentStore((state) => state.carrier);

  const [isOpen, { setTrue, setFalse }] = useBoolean();

  if (carrier) {
    return null;
  }

  return (
    <>
      <AddressModal
        isOpen={isOpen}
        onClose={setFalse}
      />

      <IntlButton
        sx={{ fontSize: '0.8rem', padding: 0, ml: 1 }}
        intl={{ label: 'address' }}
        onClick={setTrue}
      />
    </>
  );
};
