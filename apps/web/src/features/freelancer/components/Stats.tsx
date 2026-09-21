import Stat from "@/components/Stat";
import type { FreelancerProposals } from "@/schemas/proposal";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import {
  HiOutlineViewGrid,
  HiCurrencyDollar,
  HiCollection,
} from "react-icons/hi";

type Props = { proposals: FreelancerProposals };
function Stats({ proposals }: Props) {
  const numOfProposals = proposals.length;
  const acceptedProposals = proposals.filter((p) => p.status === 2);
  const balance = acceptedProposals.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <div className="grid grid-cols-3 gap-8">
      <Stat
        color="primary"
        title="درخواست ها"
        value={numOfProposals}
        icon={<HiOutlineViewGrid className="size-10" />}
      />
      <Stat
        color="orange"
        title="درخواست های تایید شده"
        value={toPersianNumbersWithComma(balance)}
        icon={<HiCollection className="size-10" />}
      />
      <Stat
        color="green"
        title="کیف پول"
        value={acceptedProposals.length}
        icon={<HiCurrencyDollar className="size-10" />}
      />
    </div>
  );
}

export default Stats;
