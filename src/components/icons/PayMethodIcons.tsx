import type { PayMethodIconName } from "./pay-method-icons.constants";

import { faCreditCard as faCreditcardRegular } from "@fortawesome/free-regular-svg-icons";
import {
    faCommentDollar,
    faCreditCard,
    faMoneyBill,
    faMoneyBillTransfer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface PayMethodIconProps {
    iconName: PayMethodIconName;
    styles?: React.CSSProperties;
}

const PayMethodIcon = ({ iconName, styles }: PayMethodIconProps) => {
    let iconLabel = null;

    switch (iconName) {
        case "credit":
            iconLabel = faCreditCard;
            break;
        case "debit":
            iconLabel = faCreditcardRegular;
            break;
        case "cash":
            iconLabel = faMoneyBill;
            break;
        case "transfer":
            iconLabel = faMoneyBillTransfer;
            break;
        case "other":
            iconLabel = faCommentDollar;
            break;
        default:
            return null;
    }

    return <FontAwesomeIcon icon={iconLabel} style={styles} />;
};

export type { PayMethodIconName } from "./pay-method-icons.constants";
export { PayMethodIconsList } from "./pay-method-icons.constants";

export default PayMethodIcon;
