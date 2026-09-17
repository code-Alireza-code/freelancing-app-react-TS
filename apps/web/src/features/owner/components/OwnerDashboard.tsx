import DashboardHeader from "@/features/owner/components/DashboardHeader";
import { useGetOwnerProjects } from "@/features/projects/queries/projectQueries";
import Stats from "./Stats";

export default function OwnerDashboard() {
  const { projects } = useGetOwnerProjects();
  return (
    <div>
      <DashboardHeader />
      <Stats projects={projects} />
    </div>
  );
}
