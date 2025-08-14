import { useQuery } from "@tanstack/react-query";

import { apiClient } from "./apiClient";

interface ReportData {
    unitId: string;
    startDate?: string;
    endDate?: string;
}

// Base API functions
export const getAreasResumeByUnitId = async (data: ReportData) => {
    const response = await apiClient.post(
        "reports/reportAreasResumeByUnitId/",
        data
    );
    return response.data;
};

export const getAccountsResumeByUnitId = async (data: ReportData) => {
    const response = await apiClient.post(
        "reports/reportAccountsResumeByUnitId/",
        data
    );
    return response.data;
};

export const getAreasMonthToMonthByUnitId = async (data: ReportData) => {
    const response = await apiClient.post(
        "reports/reportAreasMonthToMonthByUnitId/",
        data
    );
    return response.data;
};

// React Query Hooks
export function useAreasResumeQuery(data: ReportData) {
    return useQuery({
        queryKey: ["areasResume", data],
        queryFn: () => getAreasResumeByUnitId(data),
    });
}

export function useAccountsResumeQuery(data: ReportData) {
    return useQuery({
        queryKey: ["accountsResume", data],
        queryFn: () => getAccountsResumeByUnitId(data),
    });
}

export function useAreasMonthToMonthQuery(data: ReportData) {
    return useQuery({
        queryKey: ["areasMonthToMonth", data],
        queryFn: () => getAreasMonthToMonthByUnitId(data),
    });
}
