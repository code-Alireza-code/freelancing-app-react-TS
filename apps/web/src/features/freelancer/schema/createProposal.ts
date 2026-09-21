import z from "zod";

export const CreateProposalSchema = z.object({
  description: z
    .string("توضیحات اجباری است")
    .trim()
    .min(1)
    .max(200, "توضیحات طولانی تر از حد مجاز است !"),
  price: z
    .string("بودجه اجباری است !")
    .regex(/^[1-9]\d{5,9}$/, "مقدار بودجه نامعتبر است !"),
  duration: z
    .string("زمان تحویل اجباری است !")
    .regex(/^[1-9]\d{0,2}$/, "مقدار بودجه نامعتبر است !"),
});

export type CreateProposalDataType = z.infer<typeof CreateProposalSchema>;
