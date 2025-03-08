import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_settings/settings/qualtrics-api-key-management')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/settings/qualtrics-api-key-management"!</div>
}
