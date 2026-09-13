import type { ProposalStatusType } from "@/features/projects/schema/proposalStatus";
import http from "./httpService";

export async function changeProposalStatusApi({
  proposalId,
  data,
}: {
  proposalId: string;
  data: ProposalStatusType;
}) {
  return http
    .patch(`/proposal/${proposalId}`, data)
    .then(({ data }) => data.data);
}
