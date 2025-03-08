import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/reset-password/$token-id")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_auth/reset-password"!</div>;
}
