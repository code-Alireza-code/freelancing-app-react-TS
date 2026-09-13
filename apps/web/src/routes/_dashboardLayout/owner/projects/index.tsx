import { Loading } from "@/components/Loading";
import ProjectsTable from "@/features/projects/components/ProjectsTable";
import { ownerProjectsQueryOptions } from "@/features/projects/queries/projectQueries";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboardLayout/owner/projects/")({
  loader: ({ context }) => {
    return context.queryClient.ensureQueryData(ownerProjectsQueryOptions);
  },
  component: RouteComponent,
  pendingComponent: Loading,
});

function RouteComponent() {
  return (
    <div>
      <ProjectsTable />
    </div>
  );
}
