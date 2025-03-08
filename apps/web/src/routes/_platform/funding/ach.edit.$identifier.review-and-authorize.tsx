import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_platform/funding/ach/edit/$identifier/review-and-authorize',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/_platform/funding/ach/edit/$identifier/review-and-authorize"!
    </div>
  )
}
