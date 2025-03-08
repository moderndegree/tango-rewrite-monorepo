import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_integration/qualtrics-research')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_integration/qualtrics-research"!</div>
}
