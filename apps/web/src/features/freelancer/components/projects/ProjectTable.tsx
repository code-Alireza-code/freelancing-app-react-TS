import { Table } from "@/components/Table";
import ProjectTableHeader from "./ProjectTableHeader";
import ProjectTableBody from "./ProjectTableBody";
import { useGetAllProjects } from "../../queries/projectQuries";
import { Loading } from "@/components/Loading";

export default function ProjectTable() {
  const { projects, isLoading } = useGetAllProjects();

  if (isLoading) return <Loading />;
  return (
    <div>
      <h1 className="font-black text-secondary-700 text-xl mb-8">
        لیست پروژه ها
      </h1>
      <Table>
        <ProjectTableHeader />
        <ProjectTableBody projects={projects} />
      </Table>
    </div>
  );
}
