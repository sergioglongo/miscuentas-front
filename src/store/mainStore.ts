import { create } from "zustand";
import { createJSONStorage, devtools, persist } from "zustand/middleware";

import { createListsSlice } from "./slices/listsSlice";
import { createUISlice } from "./slices/uiSlice";
import { createUnitsSlice } from "./slices/unitsSlice";
import { createUserSlice } from "./slices/userSlice";
import { MainStore } from "./types";

export const useStore = create<MainStore>()(
    devtools(
        persist(
            (set, get, store) => ({
                user: createUserSlice(set, get, store),
                ui: createUISlice(set, get, store),
                units: createUnitsSlice(set, get, store),
                lists: createListsSlice(set, get, store),
            }),
            {
                name: "main-storage",
                storage: createJSONStorage(() => localStorage),
                partialize: (state) => ({
                    user: {
                        ...state.user,
                        setIsAuthenticated: undefined, // Excluimos las funciones de la persistencia
                    },
                    units: state.units,
                }),
                merge: (persistedState, currentState) => ({
                    ...currentState,
                    user: {
                        ...currentState.user,
                        ...persistedState.user,
                    },
                    units: {
                        ...currentState.units,
                        ...persistedState.units,
                    },
                }),
            }
        ),
        {
            name: "Store",
            enabled: true,
        }
    )
);
