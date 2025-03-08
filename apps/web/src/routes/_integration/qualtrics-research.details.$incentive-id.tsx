import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_integration/qualtrics-research/details/$incentive-id',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>Hello "/_integration/qualtrics-research/details/$incentive-id"!</div>
  )
}
