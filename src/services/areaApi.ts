import { useQuery } from "@tanstack/react-query";

import { apiClient } from "./apiClient";

interface GetAreasParams {
    unitId?: string;
    type?: string;
}

export const getAreasByUnitIdAndType = async ({
    unitId,
    type,
}: GetAreasParams) => {
    const url = `area/getAllByUnitId${unitId ? `/${unitId}` : ""}${type ? `/${type}` : ""}`;
    const response = await apiClient.get(url);
    return response.data;
};

export function useAreasQuery(params: GetAreasParams) {
    return useQuery({
        queryKey: ["areas", params],
        queryFn: () => getAreasByUnitIdAndType(params),
        // staleTime: 1000 * 60 * 5, // 5 minutes
    });
}
