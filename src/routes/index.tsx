import { createFileRoute, redirect } from "@tanstack/react-router";

import { useStore } from "@/store/mainStore";

export const Route = createFileRoute("/")({
  component: IndexRoute,
  beforeLoad: () => {
    const isAuthenticated = useStore.getState().user.isAuthenticated;
    if (!isAuthenticated) {
      throw redirect({
        to: "/auth/login",
      });
    }

    throw redirect({
      to: "/dashboard",
    });
  },
});

function IndexRoute() {
  return null;
}
