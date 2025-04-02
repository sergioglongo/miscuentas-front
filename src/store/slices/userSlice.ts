import { StoreSlice, UserSlice } from "../types";

export const createUserSlice: StoreSlice<UserSlice> = (set) => ({
    userData: null,
    isAuthenticated: false,
    setUser: (userData) =>
        set(
            (state) => ({
                user: {
                    ...state.user,
                    userData,
                    isAuthenticated: true,
                },
            }),
            false,
            "user/setUser"
        ),
    clearUser: () =>
        set(
            (state) => ({
                user: {
                    ...state.user,
                    userData: null,
                    isAuthenticated: false,
                },
            }),
            false,
            "user/clearUser"
        ),
    setIsAuthenticated: (isAuthenticated) =>
        set(
            (state) => ({
                user: {
                    ...state.user,
                    isAuthenticated,
                },
            }),
            false,
            "user/setIsAuthenticated"
        ),
});
