import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/_platform/email-templates")({
  component: EmailTemplatesLayout,
});

function EmailTemplatesLayout() {
  return (
    <div className="container mx-auto py-4">
      <h1 className="text-3xl font-bold mb-6">Email Templates Management</h1>
      <Outlet />
    </div>
  );
}
