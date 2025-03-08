import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_admin/roles')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_admin/roles"!</div>
}
