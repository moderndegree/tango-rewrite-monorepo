import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_platform/print-templates/create')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_platform/print-templates/create"!</div>
}
