import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_platform/accounts/balance-alerts/create',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_platform/accounts/balance-alerts/create"!</div>
}
