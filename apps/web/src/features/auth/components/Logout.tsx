import ButtonIcon from "@/ui/ButtonIcon";
import { useLogout } from "../queries/authQueries";
import { MdLogout } from "react-icons/md";
import { toast } from "sonner";

export default function Logout() {
  const { logout, isPending } = useLogout();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error: any) {
      console.log(error);
      toast.error(
        error?.response?.data?.message || "خطایی رخ داد, مجددا تلاش کنید !",
      );
    }
  };

  return (
    <ButtonIcon onClick={handleLogout} disabled={isPending}>
      <MdLogout className="size-5 hover:text-error" />
    </ButtonIcon>
  );
}
