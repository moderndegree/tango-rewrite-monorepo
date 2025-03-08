import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_settings/settings/oauth-client-credentials-management',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/settings/oauth-client-credentials-management"!</div>
}
