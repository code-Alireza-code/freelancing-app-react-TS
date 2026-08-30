import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboardLayout/owner/projects/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_dashboardLayout/owner/projects/"!</div>;
}
