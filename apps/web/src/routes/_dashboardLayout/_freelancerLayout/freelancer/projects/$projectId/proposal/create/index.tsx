import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_dashboardLayout/_freelancerLayout/freelancer/projects/$projectId/proposal/create/",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>create proposal form</div>;
}
