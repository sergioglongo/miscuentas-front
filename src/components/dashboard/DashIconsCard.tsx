import React from "react";

import { DirectionsCar, Home, Restaurant, Theaters } from "@mui/icons-material";
import { Card, CardContent, CardHeader, Grid } from "@mui/material";

import IconCard from "./components/IconCard";

const DashIconsCard = () => {
    const cardData = [
        {
            icon: <Home style={{ fontSize: 60 }} />,
            value: 70000,
            label: "Ingresos",
        },
        {
            icon: <Restaurant style={{ fontSize: 60 }} />,
            value: 55500,
            label: "Alimentación",
        },
        {
            icon: <DirectionsCar style={{ fontSize: 60 }} />,
            value: 13300,
            label: "Transporte",
        },
        {
            icon: <Theaters style={{ fontSize: 60 }} />,
            value: 43000,
            label: "Entretenimiento",
        },
    ];

    return (
        <Card sx={{ bgcolor: "background.paper", borderRadius: 2 }}>
            <CardHeader
                title="Ingresos por área"
                sx={{
                    textAlign: "center",
                    borderBottom: 1,
                    borderColor: "divider",
                }}
            />
            <CardContent>
                <Grid container spacing={3} justifyContent="center">
                    {cardData.map((card, index) => (
                        <Grid
                            // eslint-disable-next-line
                            item
                            component="div"
                            key={index}
                            xs={12}
                            sm={6}
                            md={3}
                        >
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

export default DashIconsCard;
