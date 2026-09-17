import OwnerDashboard from "@/features/owner/components/OwnerDashboard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_dashboardLayout/_ownerLayout/owner/dashboard/",
)({
  component: OwnerDashboard,
});
