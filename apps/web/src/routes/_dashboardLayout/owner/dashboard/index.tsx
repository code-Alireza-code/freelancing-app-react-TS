import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboardLayout/owner/dashboard/")({
  component: OwnerDashboard,
});

function OwnerDashboard() {
  return <div>OwnerDashboard page</div>;
}
