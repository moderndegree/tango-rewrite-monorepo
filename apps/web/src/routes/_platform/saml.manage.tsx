import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_platform/saml/manage')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_platform/saml/manage"!</div>
}
