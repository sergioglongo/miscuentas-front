import { createFileRoute } from "@tanstack/react-router";

import { AccountsLayout } from "./_layout";

export const Route = createFileRoute("/accounts")({
    component: AccountsLayout,
});
