import { createFileRoute } from "@tanstack/react-router";

import { AuthLayout } from "./_layout";

export const Route = createFileRoute("/auth")({
  component: AuthLayout,
});
