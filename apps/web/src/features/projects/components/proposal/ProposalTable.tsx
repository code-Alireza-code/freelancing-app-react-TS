import { Empty } from "@/components/Empty";
import { Table } from "@/components/Table";
import { useParams, useRouter } from "@tanstack/react-router";
import { FaArrowRight } from "react-icons/fa6";
import ProposalTableHeader from "./ProposalTableHeader";
import { ProposalTableBody } from "./ProposalTableBody";
import { useGetOwnerProject } from "../../queries/projectQueries";
import { Loading } from "@/components/Loading";

// type Props = { project: Project };

export function ProposalTable() {
  const { projectId } = useParams({
    from: "/_dashboardLayout/_ownerLayout/owner/projects/$projectId/proposals",
  });

  const { project, isLoading } = useGetOwnerProject(projectId);
  if (isLoading) return <Loading />;
  if (!project) {
    return <Empty resourceName="پروژه" />;
  }

  const { proposals } = project;

  if (!proposals.length) return <Empty resourceName="پروپوزال" />;

  const router = useRouter();
  return (
    <div>
      <div className="flex items-center gap-x-4 mb-8">
        <button onClick={() => router.history.back()}>
          <FaArrowRight className="size-5 text-secondary-500" />
        </button>
        <h1 className="font-black text-secondary-700 text-xl">
          لیست درخواست های {project.title}
        </h1>
      </div>
      <Table>
        <ProposalTableHeader />
        <ProposalTableBody proposals={proposals} />
      </Table>
    </div>
  );
}
