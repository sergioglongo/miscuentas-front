import React from "react";

import {
  AccountBalance,
  AttachMoney,
  CreditCard,
  CreditCardOff,
  CurrencyExchange,
  Euro,
  MoneyOff,
  Payments,
} from "@mui/icons-material";

interface AccountIconProps {
  iconName:
    | "Pesos"
    | "Dolar"
    | "Euro"
    | "bank"
    | "cash"
    | "electronic"
    | "debt"
    | "other";
  styles?: React.CSSProperties;
}

const AccountIcon = ({ iconName, styles }: AccountIconProps) => {
  let IconComponent = null;

  switch (iconName) {
    case "Pesos":
      IconComponent = AttachMoney;
      break;
    case "Dolar":
      IconComponent = CurrencyExchange;
      break;
    case "Euro":
      IconComponent = Euro;
      break;
    case "bank":
      IconComponent = AccountBalance;
      break;
    case "cash":
      IconComponent = Payments;
      break;
    case "electronic":
      IconComponent = CreditCard;
      break;
    case "debt":
      IconComponent = MoneyOff;
      break;
    case "other":
      IconComponent = CreditCardOff;
      break;
    default:
      return null;
  }

  return <IconComponent style={styles} />;
};

export default AccountIcon;
