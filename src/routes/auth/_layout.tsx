import { createFileRoute, Outlet } from "@tanstack/react-router";

import { AuthHeader } from "@/components/headers/AuthHeader";

export function AuthLayout() {
  return (
    <>
      <AuthHeader />
      <div className="flex min-h-screen items-center justify-center">
        <Outlet />
      </div>
    </>
  );
}

export const Route = createFileRoute("/auth/_layout")({
  component: AuthLayout,
});
