import { CreateProjectForm } from "@/features/projects/components/CreateProjectForm";
import { ownerProjectQueryOptions } from "@/features/projects/queries/projectQueries";
import { getAllCategoriesQueryOptions } from "@/queries/categoryQueries";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_dashboardLayout/owner/projects/edit/$projectId",
)({
  loader: async ({ context, params }) => {
    const [categories, project] = await Promise.all([
      context.queryClient.fetchQuery(getAllCategoriesQueryOptions()),
      context.queryClient.fetchQuery(
        ownerProjectQueryOptions(params.projectId),
      ),
    ]);

    return { categories, project };
  },
  component: RouteComponent,
});

function RouteComponent() {
  const { project } = Route.useLoaderData();
  return <CreateProjectForm edit project={project} key={project._id} />;
}
