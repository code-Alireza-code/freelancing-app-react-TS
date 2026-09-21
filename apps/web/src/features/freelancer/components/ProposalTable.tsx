import { Table } from "@/components/Table";
import ProposalTableHeader from "./ProposalTableHeader";
import { useGetAllProposals } from "../queries/proposalQueries";
import { ProposalTableBody } from "./ProposalTableBody";

export default function ProposalTable() {
  const { proposals } = useGetAllProposals();
  return (
    <div>
      <h1 className="font-black text-secondary-700 text-xl mb-8">
        لیست پروپوزال ها
      </h1>
      <Table>
        <ProposalTableHeader />
        <ProposalTableBody proposals={proposals} />
      </Table>
    </div>
  );
}
