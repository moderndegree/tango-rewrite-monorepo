import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_platform/print-templates/duplicate/$ptid',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_platform/print-templates/duplicate/$ptid"!</div>
}
