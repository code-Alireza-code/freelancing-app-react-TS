import FreelancerLayout from "@/features/freelancer/FreelancerLayout";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_dashboardLayout/_freelancerLayout")({
  component: FreelancerLayout,
});
