import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_platform/order/reward/$brand-key')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_platform/order/reward/$brand-key"!</div>
}
