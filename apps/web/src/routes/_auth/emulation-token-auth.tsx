import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_auth/emulation-token-auth')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_auth/emulation-token-auth"!</div>
}
