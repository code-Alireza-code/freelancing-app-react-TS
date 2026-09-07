import ActionButtons from "@/features/projects/components/ActionButtons";
import { Table } from "@/components/Table";
import type { Projects } from "@/schemas/project";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import { Status } from "./Status";

export default function ProjectTableBody({ projects }: { projects: Projects }) {
  return (
    <Table.Body>
      {projects.map((project, index: number) => (
        <Table.Row key={project._id}>
          <Table.Cell>{index + 1}</Table.Cell>
          <Table.Cell>{project.title}</Table.Cell>
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
        </Table.Row>
      ))}
    </Table.Body>
  );
}
