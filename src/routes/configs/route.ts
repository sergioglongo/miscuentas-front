import { createFileRoute } from "@tanstack/react-router";

import { ConfigsLayout } from "./_layout";

export const Route = createFileRoute("/configs")({
    component: ConfigsLayout,
});
