import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_platform/order/checkout')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_platform/order/checkout"!</div>
}
