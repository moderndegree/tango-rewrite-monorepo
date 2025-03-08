import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_settings/settings/user")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/settings/user"!</div>;
}
