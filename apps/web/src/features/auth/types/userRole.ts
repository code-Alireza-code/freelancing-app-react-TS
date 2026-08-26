export const UserRoles = {
  FREELANCER: "FREELANCER",
  OWNER: "OWNER",
} as const;

export type UserRoleType = (typeof UserRoles)[keyof typeof UserRoles];
