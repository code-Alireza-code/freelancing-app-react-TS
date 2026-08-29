import { useUser } from "@/hooks/useUser";

export default function Header() {
  const { userData } = useUser();
  // console.log(userData.name);
  return <header className="bg-secondary-0 py-4 px-8">app header</header>;
}
