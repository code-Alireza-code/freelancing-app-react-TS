import { getOwnerProjectsApi } from "@/services/projectService";
import { queryOptions, useQuery } from "@tanstack/react-query";

export const ownerProjectsQueryOptions = queryOptions({
  queryKey: ["owner-projects"],
  queryFn: getOwnerProjectsApi,
});

export const useGetOwnerProjects = () => {
  const { isLoading: isLoadingProjects, data } = useQuery(
    ownerProjectsQueryOptions,
  );
  return {
    projects: data,
    isLoadingProjects,
  };
};
