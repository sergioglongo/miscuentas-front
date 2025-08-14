import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/configs/panel")({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <div className="flex flex-col gap-y-6 p-6">
            <h1 className="text-3xl font-bold text-blue-400">
                Configuraciones de la app
            </h1>
            <div className="rounded-lg bg-gray-800 p-6">
                <p className="text-gray-300">Configuraciones</p>
            </div>
        </div>
    );
}
