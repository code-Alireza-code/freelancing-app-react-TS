import NavLink from "@/components/NavLink";
import Sidebar from "@/components/Sidebar";
import { Outlet } from "@tanstack/react-router";
import { MdFolderShared, MdSpaceDashboard } from "react-icons/md";

export default function OwnerLayout() {
  return (
    <div className="grid min-h-0 grid-cols-[15rem_minmax(0,1fr)]">
      <Sidebar>
        <li>
          <NavLink
            to="/owner/dashboard"
            className="flex items-center gap-x-2 rounded-lg p-2 hover:bg-primary-100 hover:text-primary-900 data-[status=active]:text-primary-900"
          >
            <MdSpaceDashboard />
            <span>داشبورد</span>
          </NavLink>
        </li>

        <li>
          <NavLink
            to="/owner/projects"
            className="flex items-center gap-x-2 rounded-lg p-2 hover:bg-primary-100 hover:text-primary-900 data-[status=active]:text-primary-900"
          >
            <MdFolderShared />
            <span>پروژه ها</span>
          </NavLink>
        </li>
      </Sidebar>
      <main className="min-h-0 h-full overflow-y-auto bg-secondary-100 p-4 sm:p-8 row-span-2">
        <div className="flex max-w-6xl flex-col gap-y-6 sm:gap-y-12">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
