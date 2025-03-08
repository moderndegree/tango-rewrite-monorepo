import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_platform/authentication')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_platform/authentication"!</div>
}
