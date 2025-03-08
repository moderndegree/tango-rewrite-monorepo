import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_settings/settings/api-key-management')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/settings/api-key-management"!</div>
}
