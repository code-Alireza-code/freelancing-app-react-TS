import { UserRoles } from "@/features/auth/types/userRole";
import z from "zod";

// export interface UserData {
//   _id: string;
//   biography: null | string;
//   phoneNumber: string;
//   isVerifiedPhoneNumber: boolean;
//   isActive: boolean;
//   status: 0 | 1 | 2;
//   role: UserRoleType;
//   createdAt: string;
//   updatedAt: string;
//   email: string | null;
//   name: string | null;
//   avatarUrl: string | null;
//   [key: string]: unknown;
// }

export const UserSchema = z
  .object({
    _id: z.string(),
    biography: z.string().nullable(),
    phoneNumber: z.string(),
    isVerifiedPhoneNumber: z.boolean(),
    isActive: z.boolean(),
    status: z.literal([0, 1, 2]),
    role: z.enum(UserRoles),
    createdAt: z.string(),
    updatedAt: z.string(),
    email: z.string().nullable(),
    name: z.string().nullable(),
    avatarUrl: z.string().nullable(),
  })
  .catchall(z.unknown());

export type UserData = z.infer<typeof UserSchema>;
