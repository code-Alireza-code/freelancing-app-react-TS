import { ProjectsSchema, type ProjectData } from "@/schemas/project";
import http from "./httpService";

export async function getOwnerProjectsApi(): Promise<ProjectData[]> {
  const { projects } = await http
    .get("/project/owner-projects")
    .then(({ data }) => data.data);
  return ProjectsSchema.parse(projects);
}

export async function removeProjectApi(projectId: string) {
  return http.delete(`/project/${projectId}`).then(({ data }) => data.data);
}
