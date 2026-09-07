import z from "zod";
import { ProjectStatus } from "../types/projectStatus";

export const ProjectStatusSchema = z.object({
  status: z.enum(Object.values(ProjectStatus)),
});

export type ProjectStatusType = z.infer<typeof ProjectStatusSchema>;
