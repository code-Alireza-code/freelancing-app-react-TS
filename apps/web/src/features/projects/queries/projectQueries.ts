import {
  changeProjectStatusApi,
  createProjectApi,
  editProjectApi,
  getOwnerProjectsApi,
  getProjectByIdApi,
  removeProjectApi,
} from "@/services/projectService";
import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

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

export const ownerProjectQueryOptions = (projectId: string) =>
  queryOptions({
    queryKey: ["owner-project", projectId],
    queryFn: () => getProjectByIdApi(projectId),
  });

export const useEditProject = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutateAsync: editProject, isPending: isEditing } = useMutation({
    mutationFn: editProjectApi,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ownerProjectQueryOptions(variables.projectId).queryKey,
      });
      navigate({ to: "/owner/projects" });
    },
  });

  return { editProject, isEditing };
};

export const useGetOwnerProject = (projectId: string) => {
  const { data: project, isLoading } = useQuery(
    ownerProjectQueryOptions(projectId),
  );

  return { project, isLoading };
};
