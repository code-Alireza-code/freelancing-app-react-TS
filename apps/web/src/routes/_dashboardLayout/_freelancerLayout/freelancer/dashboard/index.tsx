import FreelancerDashboard from "@/features/freelancer/components/FreelancerDashboard";
import { getAllProposalsQueryOptions } from "@/features/freelancer/queries/proposalQueries";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_dashboardLayout/_freelancerLayout/freelancer/dashboard/",
)({
  loader: ({ context }) => {
    return context.queryClient.fetchQuery(getAllProposalsQueryOptions);
  },
  component: RouteComponent,
});

function RouteComponent() {
  return <FreelancerDashboard />;
}
