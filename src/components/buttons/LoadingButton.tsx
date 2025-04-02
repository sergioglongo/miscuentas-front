import { Box, Button, CircularProgress } from "@mui/material";
import { ButtonProps } from "@mui/material/Button";

interface LoadingButtonProps extends ButtonProps {
    loading?: boolean;
}

export function LoadingButton({
    loading,
    children,
    ...props
}: LoadingButtonProps) {
    return (
        <Button
            {...props}
            disabled={loading || props.disabled}
            endIcon={loading ? <CircularProgress size={20} /> : props.endIcon}
        >
            <Box component="span" sx={{ flexGrow: 1 }}>
                {children}
            </Box>
        </Button>
    );
}
