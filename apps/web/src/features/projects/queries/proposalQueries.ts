import { changeProposalStatusApi } from "@/services/proposalService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ownerProjectQueryOptions } from "./projectQueries";

export const useChangeProposalStatus = (projectId: string) => {
  const queryClient = useQueryClient();
  const queryKey = ownerProjectQueryOptions(projectId).queryKey;

  const { mutateAsync: changeProposalStatus, isPending: isChanging } =
    useMutation({
      mutationFn: changeProposalStatusApi,
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey });
      },
    });

  return { changeProposalStatus, isChanging };
};
