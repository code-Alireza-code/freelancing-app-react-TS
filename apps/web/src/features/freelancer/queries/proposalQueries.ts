import {
  createProposalApi,
  getAllProposalsApi,
} from "@/services/proposalService";
import {
  queryOptions,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { useNavigate } from "@tanstack/react-router";

export const getAllProposalsQueryOptions = queryOptions({
  queryKey: ["all-proposals"],
  queryFn: getAllProposalsApi,
});

export const useGetAllProposals = () => {
  const { data, isLoading } = useQuery(getAllProposalsQueryOptions);

  const proposals = data || [];

  return { proposals, isLoading };
};

export const useCreateProposal = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutateAsync: createProposal, isPending: isCreating } = useMutation({
    mutationFn: createProposalApi,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [getAllProposalsQueryOptions.queryKey],
      });
      navigate({ to: "/freelancer/proposals" });
    },
  });

  return { createProposal, isCreating };
};
