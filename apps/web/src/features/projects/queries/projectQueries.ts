import {
  changeProjectStatusApi,
  createProjectApi,
  getOwnerProjectsApi,
  removeProjectApi,
} from "@/services/projectService";
import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";

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

export const useRemoveOwnerProject = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: removeProject, isPending: isRemoving } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ownerProjectsQueryOptions.queryKey,
      });
    },
  });
  return { removeProject, isRemoving };
};

export const useChangeProjectStatus = () => {
  const queryClient = useQueryClient();
  const { mutateAsync: changeProjectStatus, isPending: isChanging } =
    useMutation({
      mutationFn: changeProjectStatusApi,
      onSuccess: () => {
        queryClient.invalidateQueries({
          queryKey: ownerProjectsQueryOptions.queryKey,
        });
      },
    });

  return { changeProjectStatus, isChanging };
};

export const useCreateProject = () => {
  const { mutateAsync: createProject, isPending: isCreating } = useMutation({
    mutationFn: createProjectApi,
  });

  return { createProject, isCreating };
};
