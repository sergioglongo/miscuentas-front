import { StoreSlice, UISlice } from "../types";

export const createUISlice: StoreSlice<UISlice> = (set) => ({
    sidebar: { isOpen: false },
    toggleSidebar: () =>
        set(
            (state) => ({
                ui: {
                    ...state.ui,
                    sidebar: { isOpen: !state.ui.sidebar.isOpen },
                },
            }),
            false,
            "ui/toggleSidebar"
        ),
});
