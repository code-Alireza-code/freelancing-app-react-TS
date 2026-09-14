import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboardLayout/_ownerLayout/owner/dashboard/")({
  component: OwnerDashboard,
});

function OwnerDashboard() {
  return <div>OwnerDashboard page</div>;
}
