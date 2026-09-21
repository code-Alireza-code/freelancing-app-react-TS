import type { ProposalStatusType } from "@/features/projects/schema/proposalStatus";
import http from "./httpService";
import {
  FreelancerProposalsSchema,
  type FreelancerProposals,
} from "@/schemas/proposal";
import type { CreateProposalDataType } from "@/features/freelancer/schema/createProposal";

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

export async function getAllProposalsApi(): Promise<FreelancerProposals> {
  const { proposals } = await http
    .get("/proposal/list")
    .then(({ data }) => data.data);

  return FreelancerProposalsSchema.parse(proposals);
}

type CreateProposalApiData = CreateProposalDataType & { projectId: string };
export async function createProposalApi(data: CreateProposalApiData) {
  return http.post("/proposal/add", data).then(({ data }) => data.data);
}
