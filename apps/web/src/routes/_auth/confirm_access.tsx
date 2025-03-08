import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/confirm_access")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_auth/confirm_access"!</div>;
}
