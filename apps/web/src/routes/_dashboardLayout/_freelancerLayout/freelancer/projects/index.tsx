import ProjectTable from "@/features/freelancer/components/projects/ProjectTable";
import { getAllProjectsQueryOptions } from "@/features/freelancer/queries/projectQuries";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_dashboardLayout/_freelancerLayout/freelancer/projects/",
)({
  component: RouteComponent,
  loader: ({ context }) => {
    return context.queryClient.fetchQuery(getAllProjectsQueryOptions);
  },
});

function RouteComponent() {
  return <ProjectTable />;
}
