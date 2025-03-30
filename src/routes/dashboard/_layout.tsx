import { createFileRoute, Outlet } from "@tanstack/react-router";

import { DashboardHeader } from "@/components/headers/DashboardHeader";
import { Sidebar } from "@/components/navigation/Sidebar";
import { useUIStore } from "@/store/uiStore";

export function DashboardLayout() {
  const _isOpen = useUIStore((state) => state.sidebar.isOpen);

  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div
        className="flex flex-1 flex-col"
        style={{
          marginLeft: 0,
          transition: "margin-left 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms",
        }}
      >
        <DashboardHeader />
        <main className="mt-16 flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export const Route = createFileRoute("/dashboard/_layout")({
  component: DashboardLayout,
});
