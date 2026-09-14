import { CreateProjectForm } from "@/features/projects/components/CreateProjectForm";
import { getAllCategoriesQueryOptions } from "@/queries/categoryQueries";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboardLayout/_ownerLayout/owner/projects/create")(
  {
    loader: ({ context }) => {
      return context.queryClient.ensureQueryData(
        getAllCategoriesQueryOptions(),
      );
    },
    component: RouteComponent,
  },
);

function RouteComponent() {
  return <CreateProjectForm />;
}
