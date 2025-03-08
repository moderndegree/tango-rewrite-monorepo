import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_platform/funding/ach/edit/$identifier/account-and-users',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/_platform/funding/ach/edit/$identifier/account-and-users"!
    </div>
  )
}
