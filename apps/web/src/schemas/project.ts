import { z } from "zod";

export const ProjectSchema = z
  .object({
    _id: z.string(),
    title: z.string(),
    description: z.string(),
    status: z.enum(["OPEN", "CLOSED"]),
    category: z.object({
      _id: z.string(),
      title: z.string(),
      englishTitle: z.string(),
    }),
    budget: z.number(),
    tags: z.array(z.string()).optional(),
    proposals: z.array(z.string()),
    deadline: z.coerce.date(),
    owner: z.object({
      _id: z.string(),
      name: z.string(),
      avatarUrl: z.string().nullable(),
    }),
    freelancer: z
      .object({
        _id: z.string(),
        name: z.string(),
      })
      .nullable(),
  })
  .catchall(z.unknown());

export const ProjectsSchema = z.array(ProjectSchema);

export type Project = z.infer<typeof ProjectSchema>;
export type Projects = z.infer<typeof ProjectsSchema>;

export type ProjectData = z.infer<typeof ProjectSchema>;
