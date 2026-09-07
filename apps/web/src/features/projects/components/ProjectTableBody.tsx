import { Table } from "@/components/Table";
import type { Projects } from "@/schemas/project";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";

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
          <Table.Cell>{project?.freelancer?.name || "---"}</Table.Cell>
          <Table.Cell>
            {project.status === "OPEN" ? (
              <span className="badge badge--success">باز</span>
            ) : (
              <span className="badge badge--danger">بسته</span>
            )}
          </Table.Cell>
          <Table.Cell>عملیات</Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
}
