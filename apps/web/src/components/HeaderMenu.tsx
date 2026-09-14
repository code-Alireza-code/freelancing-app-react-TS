import DarkModeToggle from "./DarkModeToggle";
import Logout from "../features/auth/components/Logout";

export default function HeaderMenu() {
  return (
    <div>
      <ul className="flex items-center">
        <li className="flex">
          <DarkModeToggle />
        </li>
        <li className="flex">
          <Logout />
        </li>
      </ul>
    </div>
  );
}
