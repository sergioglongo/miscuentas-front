import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

import { useStore } from "@/store/mainStore";

export const Route = createRootRoute({
  component: RootComponent,
  beforeLoad: () => {
    const isAuthenticated = useStore.getState().user.isAuthenticated;
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
