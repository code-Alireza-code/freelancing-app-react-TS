import { getAllProjectsApi } from "@/services/projectService";
import { queryOptions, useQuery } from "@tanstack/react-query";

export const getAllProjectsQueryOptions = queryOptions({
  queryKey: ["all-projects"],
  queryFn: getAllProjectsApi,
});

export const useGetAllProjects = () => {
  const { data, isLoading } = useQuery(getAllProjectsQueryOptions);

  const projects = data || [];

  return { projects, isLoading };
};
