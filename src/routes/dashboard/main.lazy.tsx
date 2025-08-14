import { createLazyFileRoute } from "@tanstack/react-router";

import DashAreaTransactions from "@/components/dashboard/DashAreaTransactions";
import DashIconsAccounts from "@/components/dashboard/DashIconsAccounts";
import DashLinesMonths from "@/components/dashboard/DashLinesMonths";

export const Route = createLazyFileRoute("/dashboard/main")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div className="flex flex-col gap-y-6 p-6">
            <h1 className="text-3xl font-bold text-blue-400">Dashboard Home</h1>
            <div className="rounded-lg bg-gray-800 p-6">
                <p className="text-gray-300">
                    Estas son tus estadisticas generales.
                </p>
            </div>
            <DashAreaTransactions />
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                <DashLinesMonths />
                <DashIconsAccounts />
            </div>
        </div>
    );
}
