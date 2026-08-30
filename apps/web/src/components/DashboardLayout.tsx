import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "@tanstack/react-router";

export default function DashboardLayout() {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr] grid-cols-[1fr_2fr] sm:grid-cols-[15rem_1fr]">
      <Header />
      <Sidebar />
      <div className="bg-secondary-100 p-4 sm:p-8 overflow-y-auto">
        <main className="max-w-6xl flex flex-col gap-y-6 sm:gap-y-12">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
