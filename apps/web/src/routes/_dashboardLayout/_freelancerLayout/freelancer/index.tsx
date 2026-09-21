import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_dashboardLayout/_freelancerLayout/freelancer/",
)({
  beforeLoad: () => {
    throw redirect({
      to: "/freelancer/dashboard",
      replace: true,
    });
  },
});
