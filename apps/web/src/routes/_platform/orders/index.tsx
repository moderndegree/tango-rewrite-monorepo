import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_platform/orders/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_platform/orders/"!</div>
}
