import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_platform/accounts/")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_platform/accounts/"!</div>;
}
