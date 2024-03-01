'use client';

import React from 'react';
import {
  Grid,
  Step,
  StepConnector,
  stepConnectorClasses,
  StepLabel,
  Stepper,
  styled,
} from '@mui/material';

import { useClientTranslation } from '@/shared/lib/hooks';
import { IIntlProps } from '@/shared/types';

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor:
      theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
    borderRadius: 1,
  },
}));

const ColorlibStepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean; };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? theme.palette.grey[700] : '#ccc',
  zIndex: 1,
  color: theme.palette.text.white,
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  ...(ownerState.active && {
    // backgroundImage:
    //   'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    // boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    background: theme.palette.background.secondary,
  }),
  ...(ownerState.completed && {
    background: theme.palette.background.primary,
    // backgroundImage:
    //   'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
  }),
}));

export const BaseStepper = ({
  steps,
  stepNodes,
  activeStep,
}: {
  steps: { intl: IIntlProps['intl']; icon: React.ReactElement; }[];
  stepNodes: { [index: string]: React.ReactElement; };
  activeStep: number;
}) => {
  const { translate } = useClientTranslation('typography');

  return (
    <Grid container>
      <Grid item xs={12}>
        <Stepper
          alternativeLabel
          sx={{ mb: 5 }}
          connector={<ColorlibConnector />}
          activeStep={activeStep}
        >
          {steps.map(({ intl, icon }) => (
            <Step key={intl.label}>
              <StepLabel
                sx={{ fontSize: 20 }}
                // eslint-disable-next-line react/no-unstable-nested-components
                StepIconComponent={({ completed, active, className }) => (
                  <ColorlibStepIconRoot ownerState={{ completed, active }} className={className}>
                    {icon}
                  </ColorlibStepIconRoot>
                )}
              >
                {translate(intl.label, intl.values)}
              </StepLabel>
            </Step>
          ))}
        </Stepper>

        {stepNodes[activeStep]}
      </Grid>
    </Grid>
  );
};
