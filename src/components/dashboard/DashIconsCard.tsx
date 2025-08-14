import { useEffect, useState } from "react";

import { Box, Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";

import { getAreasResumeByUnitId } from "@/services/reports.api";
import { useStore } from "@/store/mainStore";

import IconCard from "../cards/IconCard";
import AreaIcon from "../icons/AreaIcons";

const DashIconsCard = () => {
    const [areasResumeData, setAreasResumeData] = useState<any[]>([]);
    const {
        units: { unitActive },
    } = useStore();

    // Calculate dates
    const today = new Date().toISOString().split("T")[0];
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
    const periodo = thirtyDaysAgo.toISOString().split("T")[0];

    const { data, isLoading, isError, error } = useQuery({
        queryKey: ["areasResume", unitActive?.id, periodo, today],
        queryFn: () => {
            if (!unitActive?.id) throw new Error("No unit selected");
            return getAreasResumeByUnitId({
                unitId: unitActive.id.toString(),
                startDate: periodo,
                endDate: today,
            });
        },
        enabled: !!unitActive?.id,
    });

    useEffect(() => {
        if (data?.success) {
            const processAreasData = (areasData: any[]) => {
                return areasData?.reduce(
                    (acc: any[], current: any, index: number) => {
                        if (index < 3) {
                            acc.push({
                                label: current.category.area.name,
                                value: current.total_amount,
                                type: current.type,
                                icon: (
                                    <AreaIcon
                                        iconName={current.category.area.icon}
                                        styles={{
                                            fontSize: "36",
                                            display: "flex",
                                            color: "black",
                                        }}
                                    />
                                ),
                            });
                        } else {
                            const otrosIndex = acc.findIndex(
                                (item: any) => item.label === "Otros"
                            );
                            if (otrosIndex === -1) {
                                acc.push({
                                    label: "Otros",
                                    value: current.total_amount,
                                    type: current.type,
                                    icon: (
                                        <AreaIcon
                                            iconName="Home"
                                            styles={{
                                                fontSize: "36",
                                                display: "flex",
                                                color: "black",
                                            }}
                                        />
                                    ),
                                });
                            } else {
                                acc[otrosIndex].value += current.total_amount;
                            }
                        }
                        return acc;
                    },
                    []
                );
            };

            if (data.result?.out?.reportOut) {
                const processedData = processAreasData(
                    data.result.out.reportOut
                );
                setAreasResumeData(processedData);
                console.log("Datos procesados guardados:", processedData);
            }
        }
    }, [data]);

    if (isLoading) return <div>Cargando...</div>;
    if (isError) return <div>Error: {error.message}</div>;

    return (
        <Box minWidth={{ xs: "100%", sm: 300 }}>
            <Grid container spacing={3} justifyContent="center">
                {areasResumeData.map((card, index) => (
                    <Grid
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
                            iconColor={"green"}
                        />
                    </Grid>
                ))}
            </Grid>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                marginTop="20px"
            >
                <IconCard icon={""} value={"Total: $155.800"} label={""} />
            </Box>
        </Box>
    );
};

export default DashIconsCard;
