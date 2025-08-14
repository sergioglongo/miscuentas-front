import type { ApexOptions } from "apexcharts";

import React from "react";

import { Stack } from "@mui/material";
import ReactApexChart from "react-apexcharts";

const DashCircleCard = () => {
    const chartData: { series: number[]; options: ApexOptions } = {
        series: [44000, 55500, 13300, 43000],
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
                    colors: "#333",
                },
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: "40%",
                        labels: {
                            show: true,
                            name: {
                                show: true,
                                fontSize: "22px",
                                color: "#000000",
                                offsetY: -10,
                            },
                            value: {
                                show: true,
                                fontSize: "24px",
                                color: "#000000",
                                offsetY: 10,
                                // formatter: function(val: number) {
                                //     return "$" + val.toLocaleString();
                                // },
                            },
                            total: {
                                show: true,
                                label: "Total",
                                color: "#333",
                                fontSize: "24px",
                                fontWeight: 600,
                                formatter: function (w) {
                                    return (
                                        "$" +
                                        w.globals.seriesTotals
                                            .reduce(
                                                (a: number, b: number) => a + b,
                                                0
                                            )
                                            .toLocaleString()
                                    );
                                },
                            },
                        },
                    },
                },
            },
            stroke: {
                width: 1,
                colors: ["#666"],
            },
            dataLabels: {
                enabled: true,
                formatter: function (val: number, { seriesIndex, w }) {
                    // const value = w.globals.seriesTotals[seriesIndex];
                    return [
                        w.config.labels[seriesIndex],
                        val.toFixed(1) + "%",
                        // "$" + value.toLocaleString(),
                    ];
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
                mode: "light",
            },
        },
    };

    return (
        <Stack spacing={2}>
            <ReactApexChart
                options={chartData.options}
                series={chartData.series}
                type="donut"
                height={350}
            />
            ,
        </Stack>
    );
};

export default DashCircleCard;
