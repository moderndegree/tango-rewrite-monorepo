import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_platform/order-complete/$reference-order-id',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_platform/order-complete/$reference-order-id"!</div>
}
