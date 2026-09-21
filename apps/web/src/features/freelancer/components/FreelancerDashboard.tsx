import DashboardHeader from "@/components/DashboardHeader";
import { Loading } from "@/components/Loading";
import { useGetAllProposals } from "../queries/proposalQueries";
import Stats from "./Stats";

export default function FreelancerDashboard() {
  const { proposals, isLoading } = useGetAllProposals();
  if (isLoading) return <Loading />;

  return (
    <div>
      <DashboardHeader />
      <Stats proposals={proposals} />
    </div>
  );
}
