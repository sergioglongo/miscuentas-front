import { createFileRoute } from "@tanstack/react-router";

import { DashboardLayout } from "./_layout";

export const Route = createFileRoute("/dashboard")({
    component: DashboardLayout,
});
