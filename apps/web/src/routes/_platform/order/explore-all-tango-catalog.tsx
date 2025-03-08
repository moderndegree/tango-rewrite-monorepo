import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_platform/order/explore-all-tango-catalog',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_platform/order/explore-all-tango-catalog"!</div>
}
