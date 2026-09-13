import ActionButtons from "@/features/projects/components/ActionButtons";
import { Table } from "@/components/Table";
import type { Projects } from "@/schemas/project";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { Status } from "./Status";
import { truncateText } from "@/utils/textFormatter";
import { IoMdDocument } from "react-icons/io";
import { useNavigate } from "@tanstack/react-router";

export default function ProjectTableBody({ projects }: { projects: Projects }) {
  const navigate = useNavigate();
  return (
    <Table.Body>
      {projects.map((project, index: number) => (
        <Table.Row key={project._id}>
          <Table.Cell>{index + 1}</Table.Cell>
          <Table.Cell>{project.title}</Table.Cell>
          <Table.Cell>{truncateText(project.description, 50)}</Table.Cell>
          <Table.Cell>{project.category.title}</Table.Cell>
          <Table.Cell>{toPersianNumbersWithComma(project.budget)}</Table.Cell>
          <Table.Cell>
            {new Date(project.deadline).toLocaleDateString("fa-IR")}
          </Table.Cell>
          <Table.Cell>
            <div className="grid grid-cols-2 items-center justify-center gap-1 max-h-8 overflow-y-auto">
              {project.tags?.length &&
                project.tags.map((tag) => (
                  <span key={tag} className="badge badge--secondary">
                    {tag}
                  </span>
                ))}
            </div>
          </Table.Cell>
          <Table.Cell>
            <span>{project?.freelancer?.name || "---"}</span>
          </Table.Cell>
          <Table.Cell>
            <Status project={project} />
          </Table.Cell>
          <Table.Cell>
            <ActionButtons project={project} />
          </Table.Cell>
          <Table.Cell>
            <button
              className="flex items-center justify-center w-full"
              onClick={() =>
                navigate({
                  to: "/owner/projects/$projectId/proposals",
                  params: { projectId: project._id },
                })
              }
            >
              <IoMdDocument className="size-5 text-primary-700" />
            </button>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
}
