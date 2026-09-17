import DashboardHeader from "@/features/owner/components/DashboardHeader";
import { useGetOwnerProjects } from "@/features/projects/queries/projectQueries";
import Stats from "./Stats";
import { Loading } from "@/components/Loading";

export default function OwnerDashboard() {
  const { projects = [], isLoadingProjects } = useGetOwnerProjects();

  if (isLoadingProjects) return <Loading />;
  return (
    <div>
      <DashboardHeader />
      <Stats projects={projects} />
    </div>
  );
}
