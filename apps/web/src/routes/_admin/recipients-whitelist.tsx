import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_admin/recipients-whitelist")({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_admin/recipients-whitelist"!</div>;
}
