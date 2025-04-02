import { createLazyFileRoute } from "@tanstack/react-router";

import DashCircleCard from "@/components/dashboard/DashCircleCard";

export const Route = createLazyFileRoute("/dashboard/dashboard")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div className="flex flex-col gap-y-6 p-6">
            <h1 className="text-3xl font-bold text-blue-400">Dashboard Home</h1>
            <div className="rounded-lg bg-gray-800 p-6">
                <p className="text-gray-300">
                    Welcome to your dashboard! This is your home page after
                    authentication.
                </p>
            </div>
            <DashCircleCard />
        </div>
    );
}
