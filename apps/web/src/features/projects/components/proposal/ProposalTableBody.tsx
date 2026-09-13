import { Table } from "@/components/Table";
import type { ProjectProposal } from "@/schemas/project";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import Status from "./Status";

type Props = { proposals: ProjectProposal[] };

export function ProposalTableBody({ proposals }: Props) {
  return (
    <Table.Body>
      {proposals.map((proposal) => (
        <Table.Row key={proposal._id}>
          <Table.Cell>{proposal.user.name}</Table.Cell>
          <Table.Cell>{proposal.description}</Table.Cell>
          <Table.Cell>{toPersianNumbers(proposal.duration)}</Table.Cell>
          <Table.Cell>{toPersianNumbersWithComma(proposal.price)}</Table.Cell>
          <Table.Cell>
            <Status proposal={proposal} />
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
}
