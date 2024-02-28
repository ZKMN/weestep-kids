'use client';

import React, { useRef } from 'react';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { Unstable_Popup as Popup } from '@mui/base/Unstable_Popup';
import { Box, Button, IconButton } from '@mui/material';
import { useBoolean } from 'ahooks';

export const BasePopup = ({ icon, children }: React.PropsWithChildren<{ icon?: React.ReactNode; }>) => {
  const ref = useRef(null);
  const [open, { toggle, setFalse }] = useBoolean();

  return (
    <div ref={ref}>
      {icon
        ? <IconButton onClick={toggle}>{icon}</IconButton>
        : <Button onClick={toggle}>Click</Button>}

      <Popup
        disablePortal
        open={open}
        anchor={ref.current}
        placement="bottom-end"
      >
        <ClickAwayListener onClickAway={setFalse}>
          <Box
            padding="10px 15px"
            bgcolor="background.default"
            border="1px solid"
            borderColor="border.main"
            borderRadius={1}
          >
            {children}
          </Box>
        </ClickAwayListener>
      </Popup>
    </div>
  );
};
