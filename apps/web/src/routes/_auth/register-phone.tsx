import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/register-phone")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_auth/register-phone"!</div>;
}
