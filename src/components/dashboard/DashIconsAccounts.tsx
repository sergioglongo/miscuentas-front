import React from "react";

import { AccountBalance, AttachMoney, Savings } from "@mui/icons-material";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";

import IconCard from "./components/IconCard";

export const DashIconsAccounts = () => {
    const cardData = [
        {
            icon: <AccountBalance style={{ fontSize: 60 }} />,
            value: 0,
            label: "Cuenta Banco",
        },
        {
            icon: <AttachMoney style={{ fontSize: 60 }} />,
            value: 58000,
            label: "Efectivo",
        },
        {
            icon: <Savings style={{ fontSize: 60 }} />,
            value: 25000,
            label: "Ahorros",
        },
    ];

    return (
        <Card sx={{ bgcolor: "background.paper", borderRadius: 2 }}>
            <CardHeader
                title="Estado de cuentas"
                sx={{
                    textAlign: "center",
                    borderBottom: 1,
                    borderColor: "divider",
                }}
            />
            <CardContent>
                <Grid container spacing={3} justifyContent="center">
                    {cardData.map((card, index) => (
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <IconCard
                                icon={card.icon}
                                value={card.value}
                                label={card.label}
                            />
                        </Grid>
                    ))}
                </Grid>
            </CardContent>
        </Card>
    );
};

export default DashIconsAccounts;
