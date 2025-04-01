import { createFileRoute, Outlet } from "@tanstack/react-router";

import { AuthHeader } from "@/components/headers/AuthHeader";

export function AuthLayout() {
  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(/background.jpg)",
      }}
    >
      <AuthHeader />
      <div className="flex min-h-screen items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}

export const Route = createFileRoute("/auth/_layout")({
  component: AuthLayout,
});
