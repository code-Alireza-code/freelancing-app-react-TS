import { createFileRoute } from "@tanstack/react-router";
import Auth from "../../features/auth/Auth";

export const Route = createFileRoute("/auth/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <Auth />;
}
