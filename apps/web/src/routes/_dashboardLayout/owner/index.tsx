import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboardLayout/owner/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/owner/"!</div>;
}
