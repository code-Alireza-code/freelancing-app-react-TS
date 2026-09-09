import { Loading } from "@/components/Loading";
import { Empty } from "@/components/Empty";
import { Table } from "@/components/Table";
import { useGetOwnerProjects } from "./queries/projectQueries";
import ProjectTableHeader from "./components/ProjectTableHeader";
import ProjectTableBody from "./components/ProjectTableBody";
import { FaPlus } from "react-icons/fa6";
import ButtonIcon from "@/ui/ButtonIcon";
import { useNavigate } from "@tanstack/react-router";

export default function ProjectsTable() {
  const { isLoadingProjects, projects = [] } = useGetOwnerProjects();
  if (isLoadingProjects) return <Loading />;
  if (projects.length === 0) return <Empty resourceName="پروژه" />;

  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto flex flex-col space-y-4">
      <ButtonIcon
        variant="primary"
        className="w-fit flex gap-x-2"
        onClick={() => navigate({ to: "/owner/projects/create" })}
      >
        <FaPlus className="size-5" />
        <span>افزودن پروژه جدید</span>
      </ButtonIcon>
      <div className="w-full">
        <Table>
          <ProjectTableHeader />
          <ProjectTableBody projects={projects} />
        </Table>
      </div>
    </div>
  );
}
