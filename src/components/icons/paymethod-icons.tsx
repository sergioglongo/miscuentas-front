import React from "react";

import {
  AccountBalance,
  CreditCard,
  CreditCardOff,
  Payment,
  Payments,
} from "@mui/icons-material";

interface PayMethodIconProps {
  iconName: "credit" | "debit" | "cash" | "transfer" | "other";
  styles?: React.CSSProperties;
}

const PayMethodIcon = ({ iconName, styles }: PayMethodIconProps) => {
  let IconComponent = null;

  switch (iconName) {
    case "credit":
      IconComponent = CreditCard;
      break;
    case "debit":
      IconComponent = Payment;
      break;
    case "cash":
      IconComponent = Payments;
      break;
    case "transfer":
      IconComponent = AccountBalance;
      break;
    case "other":
      IconComponent = CreditCardOff;
      break;
    default:
      return null;
  }

  return <IconComponent style={styles} />;
};

export default PayMethodIcon;
