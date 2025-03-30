import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/dashboard/")({
  component: DashboardHome,
});

function DashboardHome() {
  return (
    <div className="p-6">
      <h1 className="mb-6 text-3xl font-bold text-blue-400">Dashboard Home</h1>
      <div className="rounded-lg bg-gray-800 p-6">
        <p className="text-gray-300">
          Welcome to your dashboard! This is your home page after
          authentication.
        </p>
      </div>
    </div>
  );
}
