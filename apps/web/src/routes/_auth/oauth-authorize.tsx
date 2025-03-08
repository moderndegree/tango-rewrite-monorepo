import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/oauth-authorize")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_auth/oauth-authorize"!</div>;
}
