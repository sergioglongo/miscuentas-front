import type { ApexOptions } from "apexcharts";

import React from "react";

import { Card, CardContent, Stack } from "@mui/material";
import ReactApexChart from "react-apexcharts";

interface ChartData {
    series: {
        name: string;
        data: number[];
    }[];
    options: ApexOptions;
}

const DashLinesMonths = () => {
    const chartData: ChartData = {
        series: [
            {
                name: "Ingresos",
                data: [0, 0, 70000, 0, 35000, 0],
            },
            {
                name: "Egresos",
                data: [12000, 90000, 150000, 50000, 0, 0],
            },
        ],
        options: {
            chart: {
                type: "line",
                zoom: {
                    enabled: false,
                },
            },
            colors: ["#36A2EB", "#FF6384"],
            dataLabels: {
                enabled: true,
                formatter: function (val: number) {
                    return val.toString();
                },
            },
            stroke: {
                curve: "smooth",
                width: 3,
            },
            title: {
                text: "Transacciones mensuales",
                align: "left",
                style: {
                    color: "#333",
                },
            },
            subtitle: {
                text: "Últimos 6 meses",
                align: "left",
                style: {
                    color: "#666",
                },
            },
            grid: {
                borderColor: "#e0e0e0",
                row: {
                    colors: ["#f3f3f3", "transparent"],
                    opacity: 0.5,
                },
            },
            xaxis: {
                categories: [
                    "Abril",
                    "Marzo",
                    "Febrero",
                    "Enero",
                    "Diciembre",
                    "Noviembre",
                ],
                labels: {
                    style: {
                        colors: "#333",
                    },
                },
            },
            yaxis: {
                labels: {
                    style: {
                        colors: "#333",
                    },
                    formatter: function (val: number) {
                        return val.toString();
                    },
                },
            },
            legend: {
                position: "top",
                horizontalAlign: "right",
                labels: {
                    colors: "#333",
                },
            },
            theme: {
                mode: "light",
            },
        },
    };

    return (
        <Card
            sx={{ minWidth: 250, bgcolor: "background.paper", borderRadius: 2 }}
        >
            <CardContent>
                <Stack spacing={2}>
                    <ReactApexChart
                        options={chartData.options}
                        series={chartData.series}
                        type="line"
                        height={350}
                    />
                </Stack>
            </CardContent>
        </Card>
    );
};

export default DashLinesMonths;
