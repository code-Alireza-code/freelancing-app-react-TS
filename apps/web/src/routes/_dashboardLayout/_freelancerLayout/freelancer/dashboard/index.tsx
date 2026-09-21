import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute(
  '/_dashboardLayout/_freelancerLayout/freelancer/dashboard/',
)({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      Hello "/_dashboardLayout/_freelancerLayout/freelancer/dashboard/"!
    </div>
  )
}
