import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboardLayout/_ownerLayout/owner/")({
  beforeLoad: () => {
    throw redirect({
      to: "/owner/dashboard",
      replace: true,
    });
  },
});
