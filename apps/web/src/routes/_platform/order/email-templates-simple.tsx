import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_platform/order/email-templates-simple')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  return <div>Hello "/_platform/order/email-templates-simple"!</div>
}
