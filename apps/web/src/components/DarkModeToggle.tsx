import { useDarkMode } from "@/hooks/useDarkMode";
import ButtonIcon from "@/ui/ButtonIcon";
import { IoMdSunny, IoMdMoon } from "react-icons/io";
import { MdMonitor } from "react-icons/md";

export default function DarkModeToggle() {
  const { theme, setTheme } = useDarkMode();

  const handleChangeTheme = () => {
    switch (theme) {
      case "system":
        setTheme("light");
        break;
      case "light":
        setTheme("dark");
        break;
      case "dark":
        setTheme("system");
        break;
      default:
        break;
    }
  };

  const currentTheme = () => {
    switch (theme) {
      case "dark":
        return <IoMdMoon className="size-5" />;
      case "light":
        return <IoMdSunny className="size-5" />;
      case "system":
        return <MdMonitor className="size-5" />;
    }
  };

  return <ButtonIcon onClick={handleChangeTheme}>{currentTheme()}</ButtonIcon>;
}
