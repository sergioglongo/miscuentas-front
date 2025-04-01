import { forwardRef } from "react";

import { Alert, AlertProps } from "@mui/material";

const AlertSnack = forwardRef<HTMLDivElement, AlertProps>(
  function AlertSnack(props, ref) {
    return <Alert elevation={6} ref={ref} variant="filled" {...props} />;
  }
);

export default AlertSnack;
