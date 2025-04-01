import type { SizeProp } from "@fortawesome/fontawesome-svg-core";

import {
  faBuildingColumns,
  faCloudArrowUp,
  faCommentDollar,
  faCreditCard,
  faDollarSign,
  faEuroSign,
  faMoneyBillWave,
  faS,
  faU,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Box } from "@mui/material";

import { AccountIconName } from "./account-icons.constants";

interface AccountIconProps {
  iconName: AccountIconName;
  styles?: React.CSSProperties & {
    dolarSize?: SizeProp;
    dolarColor?: string;
  };
}

const AccountIcon = ({ iconName, styles }: AccountIconProps) => {
  let iconLabel = null;

  switch (iconName) {
    case "Pesos":
      iconLabel = faDollarSign;
      break;
    case "Dolar":
      return (
        <Box
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="center"
        >
          <FontAwesomeIcon
            icon={faU}
            size={styles?.dolarSize || "1x"}
            color={styles?.dolarColor || ""}
          />
          <FontAwesomeIcon
            icon={faDollarSign}
            size={styles?.dolarSize || "lg"}
            color={styles?.dolarColor || ""}
          />
          <FontAwesomeIcon
            icon={faS}
            size={styles?.dolarSize || "1x"}
            color={styles?.dolarColor || ""}
          />
        </Box>
      );
    case "Euro":
      iconLabel = faEuroSign;
      break;
    case "bank":
      iconLabel = faBuildingColumns;
      break;
    case "cash":
      iconLabel = faMoneyBillWave;
      break;
    case "electronic":
      iconLabel = faCloudArrowUp;
      break;
    case "debt":
      iconLabel = faCreditCard;
      break;
    case "other":
      iconLabel = faCommentDollar;
      break;
    default:
      return null;
  }

  return <FontAwesomeIcon icon={iconLabel} style={styles} />;
};

export default AccountIcon;
