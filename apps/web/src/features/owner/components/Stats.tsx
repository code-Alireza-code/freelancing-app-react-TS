import {
  HiOutlineViewGrid,
  HiCurrencyDollar,
  HiCollection,
} from "react-icons/hi";
import Stat from "../../../components/Stat";
import type { Projects } from "@/schemas/project";

type Props = { projects: Projects };

function Stats({ projects }: Props) {
  const numOfProjects = projects.length;
  const numOfAcceptedProjects = projects.filter(
    (p) => p.status === "CLOSED",
  ).length;
  const numOfProposals = projects.reduce(
    (acc, curr) => curr.proposals.length + acc,
    0,
  );

  return (
    <div className="grid grid-cols-3 gap-8">
      <Stat
        color="green"
        title="پروژه ها"
        value={numOfProjects}
        icon={<HiOutlineViewGrid className="size-10" />}
      />
      <Stat
        color="green"
        title="پروژه های واگذار شده"
        value={numOfAcceptedProjects}
        icon={<HiCurrencyDollar className="size-10" />}
      />
      <Stat
        color="orange"
        title="درخواست ها"
        value={numOfProposals}
        icon={<HiCollection className="size-10" />}
      />
    </div>
  );
}

export default Stats;
