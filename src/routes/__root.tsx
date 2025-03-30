import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { useAuthStore } from "@/store/authStore";

export interface RouterContext {
  isAuthenticated: boolean;
}

export const Route = createRootRoute({
  component: RootComponent,
  beforeLoad: () => {
    const isAuthenticated = useAuthStore.getState().isAuthenticated;
    console.log("Root beforeLoad - isAuthenticated:", isAuthenticated);
  },
});

function RootComponent() {
  return (
    <>
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
