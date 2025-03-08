import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/mfa")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_auth/mfa"!</div>;
}
