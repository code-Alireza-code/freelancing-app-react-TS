import {
  AllProjectsSchema,
  ProjectSchema,
  ProjectsSchema,
  type AllProjects,
  type Project,
  type Projects,
} from "@/schemas/project";
import http from "./httpService";
import type { ProjectStatusType } from "@/features/projects/schema/projectStatus";
import type { CreateProjectPayload } from "@/features/projects/schema/createProject";

export async function getOwnerProjectsApi(): Promise<Projects> {
  const { projects } = await http
    .get("/project/owner-projects")
    .then(({ data }) => data.data);
  return ProjectsSchema.parse(projects);
}

export async function removeProjectApi(projectId: string) {
  return http.delete(`/project/${projectId}`).then(({ data }) => data.data);
}

export async function changeProjectStatusApi({
  projectId,
  data,
}: {
  projectId: string;
  data: ProjectStatusType;
}) {
  return http
    .patch(`/project/${projectId}`, data)
    .then(({ data }) => data.data);
}

export async function createProjectApi(data: CreateProjectPayload) {
  return http.post("/project/add", data).then(({ data }) => data.data);
}

export async function getProjectByIdApi(projectId: string): Promise<Project> {
  const { project } = await http
    .get(`/project/${projectId}`)
    .then(({ data }) => data.data);
  return ProjectSchema.parse(project);
}

export async function editProjectApi({
  data,
  projectId,
}: {
  data: CreateProjectPayload;
  projectId: string;
}) {
  return http
    .patch(`/project/update/${projectId}`, data)
    .then(({ data }) => data.data);
}

export async function getAllProjectsApi(): Promise<AllProjects> {
  const { projects } = await http
    .get("/project/list")
    .then(({ data }) => data.data);
  return AllProjectsSchema.parse(projects);
}
