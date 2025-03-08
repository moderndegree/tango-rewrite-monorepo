import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_platform/funding/ach/create/account-and-users',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_platform/funding/ach/create/account-and-users"!</div>
}
