import { getAllProposalsApi } from "@/services/proposalService";
import { queryOptions, useQuery } from "@tanstack/react-query";

export const getAllProposalsQueryOptions = queryOptions({
  queryKey: ["all-proposals"],
  queryFn: getAllProposalsApi,
});

export const useGetAllProposals = () => {
  const { data, isLoading } = useQuery(getAllProposalsQueryOptions);

  const proposals = data || [];

  return { proposals, isLoading };
};
