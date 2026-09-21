import { z } from "zod";
import { ProposalStatus } from "@/constants/proposalStatus";

const ProjectCategorySchema = z.object({
  _id: z.string(),
  title: z.string(),
  englishTitle: z.string(),
});

const ProjectOwnerSchema = z.object({
  _id: z.string(),
  name: z.string(),
  avatarUrl: z.string().nullable(),
});

const ProjectFreelancerSchema = z.object({
  _id: z.string(),
  name: z.string(),
});

const ProjectBaseSchema = z.object({
  _id: z.string(),
  title: z.string(),
  description: z.string(),
  status: z.enum(["OPEN", "CLOSED"]),
  category: ProjectCategorySchema,
  budget: z.number(),
  tags: z.array(z.string()).optional(),
  deadline: z.coerce.date(),
});

const ProposalFreelancerSchema = z.object({
  _id: z.string(),
  name: z.string(),
  avatarUrl: z.string().nullable(),
});

const ProposalSchema = z
  .object({
    _id: z.string(),
    description: z.string(),
    duration: z.number(),
    price: z.number(),
    status: z.union([
      z.literal(Number(ProposalStatus.rejected)),
      z.literal(Number(ProposalStatus.approved)),
      z.literal(Number(ProposalStatus.awaiting)),
    ]),
    user: ProposalFreelancerSchema,
  })
  .catchall(z.unknown());

export const ProjectSchema = ProjectBaseSchema.extend({
  proposals: z.array(ProposalSchema),
  owner: ProjectOwnerSchema,
  freelancer: ProjectFreelancerSchema.nullable(),
}).catchall(z.unknown());

export type ProjectProposal = z.infer<typeof ProposalSchema>;
export type Project = z.infer<typeof ProjectSchema>;

export const AllProjectSchema = ProjectBaseSchema.catchall(z.unknown());

export const AllProjectsSchema = z.array(AllProjectSchema);

export type AllProject = z.infer<typeof AllProjectSchema>;
export type AllProjects = z.infer<typeof AllProjectsSchema>;

export const ProjectsSchema = z.array(
  ProjectBaseSchema.extend({
    proposals: z.array(z.string()),
    owner: ProjectOwnerSchema,
    freelancer: ProjectFreelancerSchema.nullable(),
  }).catchall(z.unknown()),
);

export type Projects = z.infer<typeof ProjectsSchema>;
