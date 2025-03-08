import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/confirm-access")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_auth/confirm-access"!</div>;
}
