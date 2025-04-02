import React from "react";

import { Card, CardContent, Stack, Typography } from "@mui/material";

interface IconCardProps {
    icon: React.ReactNode;
    value: number;
    label: string;
}

const IconCard = ({ icon, value, label }: IconCardProps) => {
    return (
        <Card
            sx={{ minWidth: 180, bgcolor: "background.paper", borderRadius: 2 }}
        >
            <CardContent>
                <Stack spacing={2} alignItems="center">
                    <div style={{ color: "#22c55e", fontSize: "2rem" }}>
                        {icon}
                    </div>
                    <Typography
                        variant="h5"
                        component="div"
                        sx={{ fontWeight: "bold" }}
                    >
                        ${value.toLocaleString()}
                    </Typography>
                    <Typography color="text.secondary" fontSize={20}>
                        {label}
                    </Typography>
                </Stack>
            </CardContent>
        </Card>
    );
};

export default IconCard;
