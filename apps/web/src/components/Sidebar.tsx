import { MdSpaceDashboard, MdFolderShared } from "react-icons/md";
import NavLink from "./NavLink";

export default function Sidebar() {
  return (
    <div className="bg-secondary-0 p-2 row-start-1 row-span-2 border-l border-secondary-300">
      <aside>
        <ul className="flex flex-col gap-y-3 [&_svg]:size-6">
          <li>
            <NavLink
              to="/owner/dashboard"
              className="p-2 rounded-lg flex items-center gap-x-2 hover:bg-primary-100 hover:text-primary-900  data-[status=active]:text-primary-900"
            >
              <MdSpaceDashboard />
              <span>داشبورد</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/owner/projects"
              className="p-2 rounded-lg flex items-center gap-x-2 hover:bg-primary-100 hover:text-primary-900  data-[status=active]:text-primary-900"
            >
              <MdFolderShared />
              <span>پروژه ها</span>
            </NavLink>
          </li>
        </ul>
      </aside>
    </div>
  );
}
