import { Table } from "@/components/Table";
import {
  ProposalStatus,
  type ProposalStatusType,
} from "@/constants/proposalStatus";
import type {
  FreelancerProposal,
  FreelancerProposals,
} from "@/schemas/proposal";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";

type Props = {
  proposals: FreelancerProposals;
};

const proposalStatusConfig = {
  [ProposalStatus.rejected]: {
    label: "رد شده",
    className: "badge badge--danger",
  },
  [ProposalStatus.awaiting]: {
    label: "در انتظار تایید",
    className: "badge badge--warning",
  },
  [ProposalStatus.approved]: {
    label: "تایید شده",
    className: "badge badge--success",
  },
} satisfies Record<
  ProposalStatusType,
  {
    label: string;
    className: string;
  }
>;

export function ProposalTableBody({ proposals }: Props) {
  const proposalStatus = (status: FreelancerProposal["status"]) => {
    const config = proposalStatusConfig[status];
    return <span className={config.className}>{config.label}</span>;
  };

  return (
    <Table.Body>
      {proposals.map((proposal, index) => (
        <Table.Row key={proposal._id}>
          <Table.Cell>{toPersianNumbers(index + 1)}</Table.Cell>
          <Table.Cell>{proposal.description}</Table.Cell>
          <Table.Cell>{toPersianNumbers(proposal.duration)}</Table.Cell>
          <Table.Cell>{toPersianNumbersWithComma(proposal.price)}</Table.Cell>
          <Table.Cell>{proposalStatus(proposal.status)}</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
}
