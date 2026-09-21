import { Loading } from "@/components/Loading";
import ProposalTable from "@/features/freelancer/components/ProposalTable";
import { getAllProposalsQueryOptions } from "@/features/freelancer/queries/proposalQueries";

import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_dashboardLayout/_freelancerLayout/freelancer/proposals/",
)({
  component: RouteComponent,
  loader: ({ context }) => {
    return context.queryClient.fetchQuery(getAllProposalsQueryOptions);
  },
  pendingComponent: Loading,
});

function RouteComponent() {
  return <ProposalTable />;
}
