import { toPersianNumbers } from "@/utils/toPersianNumbers";
import type { ReactNode } from "react";

const colors = {
  primary: "bg-primary-100 text-primary-700",
  green: "bg-green-100 text-green-700",
  orange: "bg-orange-100 text-orange-700",
};

type Props = {
  icon: ReactNode;
  value: string | number;
  title: string;
  color: keyof typeof colors;
};

function Stat({ icon, value, title, color }: Props) {
  return (
    <div className="col-span-1 grid grid-rows-2 grid-cols-[5rem_1fr] bg-secondary-0 p-4 rounded-lg gap-x-4">
      <div
        className={`row-span-2 flex items-center justify-center
       p-1 aspect-square rounded-full
       ${colors[color]}
  `}
      >
        {icon}
      </div>
      <h5 className="font-bold text-secondary-500 text-lg self-center">
        {title}
      </h5>
      <p className="text-2xl font-bold text-secondary-900">
        {toPersianNumbers(value)}
      </p>
    </div>
  );
}
export default Stat;
