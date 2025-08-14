import React from "react";

import { Card, CardContent, Stack, Typography } from "@mui/material";

interface IconCardProps {
    icon: React.ReactNode;
    value: string | number;
    label: string;
    iconColor?: string;
}

const IconCard = ({
    icon,
    value,
    label,
    iconColor = "#666666",
}: IconCardProps) => {
    const formattedValue =
        typeof value === "number" ? `$${value.toLocaleString()}` : value;

    return (
        <Card
            sx={{
                minWidth: 180,
                maxWidth: 200,
                bgcolor: "background.paper",
                borderRadius: 2,
            }}
        >
            <CardContent>
                <Stack spacing={2} alignItems="center">
                    <div style={{ color: iconColor, fontSize: "2rem" }}>
                        {icon}
                    </div>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{
                            fontWeight: "bold",
                            textAlign: "center",
                            wordWrap: "break-word",
                            overflowWrap: "break-word",
                        }}
                    >
                        {formattedValue}
                    </Typography>
                    <Typography
                        color="text.secondary"
                        fontSize={20}
                        sx={{
                            textAlign: "center",
                            wordWrap: "break-word",
                            overflowWrap: "break-word",
                        }}
                    >
                        {label}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default IconCard;
