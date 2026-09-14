import type { ReactNode } from "react";

type Props = { children: ReactNode };

export default function Sidebar({ children }: Props) {
  return (
    <div className="bg-secondary-0 p-2 row-start-1 row-span-2 border-l border-secondary-300">
      <aside>
        <ul className="flex flex-col gap-y-3 [&_svg]:size-6">{children}</ul>
      </aside>
    </div>
  );
}
