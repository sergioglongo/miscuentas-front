import React from "react";

import { Box, Card, CardContent, CardHeader } from "@mui/material";

import DashCircleCard from "./DashCircleCard";
import DashIconsCard from "./DashIconsCard";

const DashAreaTransactions = () => {
    return (
        <Card
            sx={{
                bgcolor: "background.paper",
                borderRadius: 2,
            }}
        >
            <CardHeader
                title="Egresos por Area"
                sx={{
                    textAlign: "center",
                    borderBottom: 1,
                    borderColor: "divider",
                    "& .MuiCardHeader-title": {
                        fontWeight: "bold",
                    },
                }}
            />
            <CardContent>
                <Box
                    display="flex"
                    flexDirection={{ xs: "column", md: "row" }}
                    gap={4}
                >
                    <DashCircleCard />
                    <DashIconsCard />
                </Box>
            </CardContent>
        </Card>
    );
};

export default DashAreaTransactions;
