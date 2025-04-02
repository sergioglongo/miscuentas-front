import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { createListsSlice } from "./slices/listsSlice";
import { createUISlice } from "./slices/uiSlice";
import { createUnitsSlice } from "./slices/unitsSlice";
import { createUserSlice } from "./slices/userSlice";
import { MainStore } from "./types";

export const useStore = create<MainStore>()(
    devtools(
        (set, get, store) => ({
            user: createUserSlice(set, get, store),
            ui: createUISlice(set, get, store),
            units: createUnitsSlice(set, get, store),
            lists: createListsSlice(set, get, store),
        }),
        {
            name: "Store",
            enabled: true,
        }
    )
);
