import { Table } from "@/components/Table";
import type { AllProjects } from "@/schemas/project";
import {
  toPersianNumbers,
  toPersianNumbersWithComma,
} from "@/utils/toPersianNumbers";
import { Link } from "@tanstack/react-router";

type Props = {
  projects: AllProjects;
};

export default function ProjectTableBody({ projects }: Props) {
  return (
    <Table.Body>
      {projects.map((project, index) => (
        <Table.Row key={project._id}>
          <Table.Cell>{toPersianNumbers(index + 1)}</Table.Cell>
          <Table.Cell>{project.title}</Table.Cell>
          <Table.Cell>{toPersianNumbersWithComma(project.budget)}</Table.Cell>
          <Table.Cell>{project.deadline.toLocaleDateString("fa")}</Table.Cell>
          <Table.Cell>
            {project.status === "OPEN" ? (
              <span className="badge badge--success">باز</span>
            ) : (
              <span className="badge badge--danger">بسته</span>
            )}
          </Table.Cell>
          <Table.Cell>
            <Link
              to="/freelancer/projects/$projectId/proposal/create"
              params={{ projectId: project._id }}
              className="text-primary-700 hover:underline hover:underline-offset-4"
            >
              ایجاد پروپوزال
            </Link>
          </Table.Cell>
        </Table.Row>
      ))}
    </Table.Body>
  );
}
