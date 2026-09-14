import OwnerLayout from "@/features/owner/components/OwnerLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboardLayout/_ownerLayout")({
  component: OwnerLayout,
});
