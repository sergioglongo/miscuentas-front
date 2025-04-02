import { StateCreator } from "zustand";

export interface User {
    id: number;
    firstname: string;
    lastname: string;
    email: string;
    photo: string | null;
    permissions: {
        [key: string]: boolean;
    };
    type: string;
    is_active: boolean;
    is_premium: boolean;
    last_login_date: string;
    register_date: string;
}

export interface UserSlice {
    userData: User | null;
    isAuthenticated: boolean;
    setUser: (user: User) => void;
    clearUser: () => void;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
}

export interface UISlice {
    sidebar: {
        isOpen: boolean;
    };
    toggleSidebar: () => void;
}

export interface Unit {
    id: number;
    name: string;
    description: string | null;
    photo: string;
    is_active: boolean;
    initialized: boolean;
}

export interface UnitsSlice {
    unitsList: Unit[];
    unitActive: Unit | null;
    unitMain: Unit | null;
    setUnitsList: (units: Unit[]) => void;
    setUnitActive: (unit: Unit | null) => void;
    setUnitMain: (unit: Unit | null) => void;
}

export interface Area {
    id: string;
    name: string;
}

export interface Category {
    id: string;
    name: string;
}

export interface Account {
    id: string;
    name: string;
}

export interface PayMethod {
    id: string;
    name: string;
}

export interface ListsSlice {
    areasList: Area[];
    categoriesList: Category[];
    accountsList: Account[];
    payMethodsList: PayMethod[];
    unitsList: Unit[];
    setAreasList: (areas: Area[]) => void;
    setCategoriesList: (categories: Category[]) => void;
    setAccountsList: (accounts: Account[]) => void;
    setPayMethodsList: (payMethods: PayMethod[]) => void;
    setUnitsList: (units: Unit[]) => void;
}

export interface MainStore {
    user: UserSlice;
    ui: UISlice;
    units: UnitsSlice;
    lists: ListsSlice;
}

export type StoreSlice<T> = StateCreator<
    MainStore,
    [["zustand/devtools", never]],
    [],
    T
>;
