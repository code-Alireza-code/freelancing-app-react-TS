import OwnerLayout from "@/features/owner/components/OwnerLayout";
import { ownerProjectsQueryOptions } from "@/features/projects/queries/projectQueries";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboardLayout/_ownerLayout")({
  loader: ({ context }) => {
    return context.queryClient.fetchQuery(ownerProjectsQueryOptions);
  },
  component: OwnerLayout,
});
