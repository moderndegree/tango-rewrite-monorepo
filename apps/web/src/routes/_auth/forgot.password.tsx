import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/forgot/password")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Forgot password layout!
      <Outlet />
    </div>
  );
}
