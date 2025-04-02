import { StoreSlice, UnitsSlice } from "../types";

export const createUnitsSlice: StoreSlice<UnitsSlice> = (set) => ({
    unitsList: [],
    unitActive: null,
    unitMain: null,
    setUnitsList: (unitsList) =>
        set(
            (state) => ({
                units: {
                    ...state.units,
                    unitsList,
                },
            }),
            false,
            "units/setUnitsList"
        ),
    setUnitActive: (unitActive) =>
        set(
            (state) => ({
                units: {
                    ...state.units,
                    unitActive,
                },
            }),
            false,
            "units/setUnitActive"
        ),
    setUnitMain: (unitMain) =>
        set(
            (state) => ({
                units: {
                    ...state.units,
                    unitMain,
                },
            }),
            false,
            "units/setUnitMain"
        ),
});
