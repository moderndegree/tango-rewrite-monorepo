import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_platform/order/bulk-upload/$upload-id')(
  {
    component: RouteComponent,
  },
)

function RouteComponent() {
  return <div>Hello "/_platform/order/bulk-upload/$upload-id"!</div>
}
