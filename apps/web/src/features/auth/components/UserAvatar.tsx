import type { UserData } from "@/schemas/user";

type Props = { user: UserData };

export default function UserAvatar({ user }: Props) {
  return (
    <div className="flex items-center gap-x-2 text-secondary-600">
      <img
        className="size-7 rounded-full object-cover object-center"
        src={user.avatarUrl ?? "/user.jpg"}
        alt={user.name ?? "username"}
      />
      <span className="relative top-0.75">{user.name || "کاربر جدید"}</span>
    </div>
  );
}
