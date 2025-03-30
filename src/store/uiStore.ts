import { create } from "zustand";

interface UIState {
  sidebar: {
    isOpen: boolean;
  };
  toggleSidebar: () => void;
  // Future UI configurations can be added here
}

export const useUIStore = create<UIState>((set) => ({
  sidebar: {
    isOpen: true,
  },
  toggleSidebar: () =>
    set((state) => ({
      sidebar: {
        isOpen: !state.sidebar.isOpen,
      },
    })),
}));
