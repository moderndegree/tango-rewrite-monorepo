import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/forgot/password/success")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_auth/forgot/password/success"!</div>;
}
