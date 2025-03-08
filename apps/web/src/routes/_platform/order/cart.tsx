import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_platform/order/cart')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_platform/order/cart"!</div>
}
