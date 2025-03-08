import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_platform/print-templates/edit/$ptid/non-redemption',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>Hello "/_platform/print-templates/edit/$ptid/non-redemption"!</div>
  )
}
