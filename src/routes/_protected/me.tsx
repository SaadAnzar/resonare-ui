import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_protected/me')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_main/me"!</div>
}
