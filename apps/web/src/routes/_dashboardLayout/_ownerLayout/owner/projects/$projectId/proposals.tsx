import { ProposalTable } from "@/features/projects/components/proposal/ProposalTable";
import { ownerProjectQueryOptions } from "@/features/projects/queries/projectQueries";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_dashboardLayout/_ownerLayout/owner/projects/$projectId/proposals",
)({
  loader: ({ context, params }) => {
    return context.queryClient.fetchQuery(
      ownerProjectQueryOptions(params.projectId),
    );
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <ProposalTable />;
}
