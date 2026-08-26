import CompleteProfileForm from "@/features/auth/components/CompleteProfileForm";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/complete-profile")({
  component: RouteComponent,
});

function RouteComponent() {
  return <CompleteProfileForm />;
}
