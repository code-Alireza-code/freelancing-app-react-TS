import Header from "@/components/Header";
import { Outlet } from "@tanstack/react-router";

export default function DashboardLayout() {
  return (
    <div className="grid h-screen grid-rows-[auto_minmax(0,1fr)]">
      <Header />
      <Outlet />
    </div>
  );
}
