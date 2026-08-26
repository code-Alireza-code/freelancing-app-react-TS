import z from "zod";
import { UserRoles } from "../types/userRole";

export const CompleteProfileSchema = z.object({
  name: z.string().min(3, { error: "حداقل باید ۳ کاراکتر باشد !" }),
  email: z.email({ error: "ایمیل نامعتبر است !" }),
  role: z.enum(UserRoles, { error: "نقش کاربر نامعتبر است !" }),
});

export type CompleteProfileDataType = z.infer<typeof CompleteProfileSchema>;
