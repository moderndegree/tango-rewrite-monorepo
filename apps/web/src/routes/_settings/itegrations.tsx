import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_settings/itegrations')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/settings/itegrations"!</div>
}
