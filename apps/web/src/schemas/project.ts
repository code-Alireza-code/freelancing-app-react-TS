import { ProposalStatus } from "@/constants/proposalStatus";
import { z } from "zod";

const PropsalFreelancerSchema = z.object({
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
    user: PropsalFreelancerSchema,
  })
  .catchall(z.unknown());

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
    proposals: z.array(ProposalSchema),
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

export const ProjectsSchema = z.array(
  z
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
    .catchall(z.unknown()),
);

export type ProjectProposal = z.infer<typeof ProposalSchema>;
export type Project = z.infer<typeof ProjectSchema>;
export type Projects = z.infer<typeof ProjectsSchema>;
