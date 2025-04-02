import type { ApexOptions } from "apexcharts";

import React from "react";

import { Card, CardContent, CardHeader, Stack } from "@mui/material";
import ReactApexChart from "react-apexcharts";

const DashCircleCard = () => {
    const chartData: { series: number[]; options: ApexOptions } = {
        series: [44, 55, 13, 43],
        options: {
            chart: {
                type: "donut" as const,
            },
            labels: [
                "Gastos Hogar",
                "Alimentación",
                "Transporte",
                "Entretenimiento",
            ],
            colors: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
            legend: {
                position: "bottom",
                horizontalAlign: "center",
                labels: {
                    colors: "#fff",
                },
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: "40%", // Ajusta este valor entre '0%' y '100%'
                        labels: {
                            show: true,
                            total: {
                                show: true,
                                label: "Total",
                                color: "#fff",
                                fontSize: "24px",
                                fontWeight: 600,
                            },
                            value: {
                                fontSize: "22px",
                                color: "#fff",
                            },
                        },
                    },
                },
            },
            dataLabels: {
                enabled: true,
                formatter: function (val: number, { seriesIndex, w }) {
                    return [w.config.labels[seriesIndex], val.toFixed(1) + "%"];
                },
                style: {
                    fontSize: "14px",
                    fontFamily: "Helvetica, Arial, sans-serif",
                    fontWeight: "bold",
                },
                dropShadow: {
                    enabled: true,
                },
                textAnchor: "middle",
            },
            theme: {
                mode: "dark",
            },
        },
    };

    return (
        <Card
            sx={{ minWidth: 345, bgcolor: "background.paper", borderRadius: 2 }}
        >
            <CardHeader
                title="Gráfico Torta"
                sx={{
                    textAlign: "center",
                    borderBottom: 1,
                    borderColor: "divider",
                }}
            />
            <CardContent>
                <Stack spacing={2}>
                    <ReactApexChart
                        options={chartData.options}
                        series={chartData.series}
                        type="donut"
                        height={350}
                    />
                </Stack>
            </CardContent>
        </Card>
    );
};

export default DashCircleCard;
