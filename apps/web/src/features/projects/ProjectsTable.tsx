import { Loading } from "@/components/Loading";
import { Empty } from "@/components/Empty";
import { Table } from "@/components/Table";
import { useGetOwnerProjects } from "./queries/projectQueries";
import ProjectTableHeader from "./components/ProjectTableHeader";
import ProjectTableBody from "./components/ProjectTableBody";

export default function ProjectsTable() {
  const { isLoadingProjects, projects = [] } = useGetOwnerProjects();
  if (isLoadingProjects) return <Loading />;
  if (projects.length === 0) return <Empty resourceName="پروژه" />;

  return (
    <div className="overflow-x-auto">
      <Table>
        <ProjectTableHeader />
        <ProjectTableBody projects={projects} />
      </Table>
    </div>
  );
}
