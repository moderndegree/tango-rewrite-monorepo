import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_platform/order/print-templates-simple/$brand-key"
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_platform/order/print-templates-simple/$brand-key"!</div>;
}
