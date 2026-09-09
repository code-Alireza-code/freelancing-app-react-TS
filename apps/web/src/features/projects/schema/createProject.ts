import z from "zod";

export const CreateProjectSchema = z.object({
  title: z.string("عنوان اجباری است").trim().min(1),
  description: z
    .string("توضیحات اجباری است")
    .trim()
    .min(1)
    .max(200, "توضیحات طولانی تر از حد مجاز است !"),
  tags: z.array(z.string().trim().min(1)).nullable().optional(),
  category: z
    .string("دسته بندی اجباری است")
    .regex(/^[0-9a-fA-F]{24}$/, "دسته بندی معتبر نیست !"),
  budget: z
    .string("بودجه اجباری است !")
    .regex(/^\d{3,10}$/, "مقدار بودجه نامعتبر است !"),
  deadline: z.date("تاریخ مهلت پروژه اجباری است !"),
});

export type CreateProjectFormDataType = z.infer<typeof CreateProjectSchema>;

export type CreateProjectPayload = Omit<
  CreateProjectFormDataType,
  "deadline"
> & {
  deadline: string;
};
