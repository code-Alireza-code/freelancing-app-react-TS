import z from "zod";

export const CategorySchema = z
  .object({
    icon: z.object({
      sm: z.string().nullable(),
      lg: z.string().nullable(),
    }),
    _id: z.string(),
    title: z.string(),
    englishTitle: z.string(),
    description: z.string(),
    type: z.string(),
    parentId: z.string().nullable(),
    createdAt: z.iso.datetime(),
    updatedAt: z.iso.datetime(),
    __v: z.number(),
  })
  .catchall(z.unknown());

export const CategoriesSchema = z.array(CategorySchema);

export type Category = z.infer<typeof CategorySchema>;
export type Categories = z.infer<typeof CategoriesSchema>;
