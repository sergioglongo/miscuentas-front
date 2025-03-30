import { createFileRoute, redirect } from "@tanstack/react-router";

import { useAuthStore } from "@/store/authStore";

export const Route = createFileRoute("/")({
  component: IndexRoute,
  beforeLoad: () => {
    const isAuthenticated = useAuthStore.getState().isAuthenticated;
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
