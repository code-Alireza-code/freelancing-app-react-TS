import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_dashboardLayout/owner/projects/$projectId",
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_dashboardLayout/owner/projects/$projectId"!</div>;
}
