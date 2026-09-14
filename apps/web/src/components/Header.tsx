import { useUser } from "@/hooks/useUser";
import HeaderMenu from "./HeaderMenu";
import UserAvatar from "../features/auth/components/UserAvatar";
import { clsx } from "clsx";
import { Loading } from "./Loading";

export default function Header() {
  const { user, isLoading } = useUser();

  if (!user) return <Loading />;

  return (
    <header
      className={clsx(
        "bg-secondary-0 py-3 px-6 border-b border-secondary-200",
        isLoading && "blur-sm opacity-50",
      )}
    >
      <div className="flex items-center justify-between">
        <UserAvatar user={user} />
        <HeaderMenu />
      </div>
    </header>
  );
}
