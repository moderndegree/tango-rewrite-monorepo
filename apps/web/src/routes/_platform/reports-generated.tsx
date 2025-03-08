import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_platform/reports-generated')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_platform/reports-generated"!</div>
}
