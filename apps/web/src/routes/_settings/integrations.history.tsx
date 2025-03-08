import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_settings/integrations/history')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/settings/integrations/history"!</div>
}
