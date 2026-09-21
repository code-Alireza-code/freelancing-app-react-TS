export const ProposalStatus = {
  rejected: 0,
  awaiting: 1,
  approved: 2,
} as const;

export type ProposalStatusType =
  (typeof ProposalStatus)[keyof typeof ProposalStatus];
