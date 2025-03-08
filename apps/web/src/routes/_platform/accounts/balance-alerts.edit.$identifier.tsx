import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_platform/accounts/balance-alerts/edit/$identifier',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_platform/accounts/balance-alerts/edit/$identifier"!</div>
}
