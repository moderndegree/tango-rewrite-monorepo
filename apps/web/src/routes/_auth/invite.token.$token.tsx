import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/invite/token/$token")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_auth/invite/token/$token"!</div>;
}
