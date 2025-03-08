import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_platform/orders/$reference-order-id/$line-item-number"
)({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_platform/orders/$reference-order-id"!</div>;
}
