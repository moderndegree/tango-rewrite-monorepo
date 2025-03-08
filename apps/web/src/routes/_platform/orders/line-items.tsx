import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_platform/orders/line-items')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_platform/orders/line-items"!</div>
}
