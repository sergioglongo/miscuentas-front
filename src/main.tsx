import "./styles/index.css";

import { StrictMode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";

import { useStore } from "@/store/mainStore";

import { ErrorDisplay } from "./components/error-display";
import { NotFound } from "./components/not-found";
import { PendingComponent } from "./components/pending-component";
import { routeTree } from "./routeTree.gen";

const queryClient = new QueryClient();

const router = createRouter({
    routeTree,
    context: {
        queryClient,
        isAuthenticated: useStore.getState().user.isAuthenticated,
    },
    defaultPreload: "intent",
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: ErrorDisplay,
    defaultNotFoundComponent: NotFound,
    defaultPendingComponent: PendingComponent,
});

declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <StrictMode>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </StrictMode>
    );
}
