import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_settings/settings/order-settings-management')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/settings/order-settings-management"!</div>
}
