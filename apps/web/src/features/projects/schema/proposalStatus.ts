import z from "zod";
import { ProposalStatus } from "@/constants/proposalStatus";

export const ProposalStatusSchema = z.object({
  status: z.enum(ProposalStatus, "یک وضعیت انتخاب کنید !"),
});

export type ProposalStatusType = z.infer<typeof ProposalStatusSchema>;
