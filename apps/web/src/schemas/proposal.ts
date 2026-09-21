import { ProposalStatus } from "@/constants/proposalStatus";
import z from "zod";

export const FreelancerProposalSchema = z
  .object({
    _id: z.string(),
    price: z.number(),
    duration: z.number(),
    description: z.string().nullable(),
    user: z.string(),
    status: z.union([
      z.literal(ProposalStatus.rejected),
      z.literal(ProposalStatus.approved),
      z.literal(ProposalStatus.awaiting),
    ]),
  })
  .catchall(z.unknown());

export const FreelancerProposalsSchema = z.array(FreelancerProposalSchema);

export type FreelancerProposal = z.infer<typeof FreelancerProposalSchema>;
export type FreelancerProposals = z.infer<typeof FreelancerProposalsSchema>;
