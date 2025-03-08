import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_platform/funding/history')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_platform/funding/history"!</div>
}
