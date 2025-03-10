import { createFileRoute, Outlet, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_platform/email-templates/create")({
  component: CreateEmailTemplate,
});

function CreateEmailTemplate() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Create Email Template</h1>
      <div className="flex space-x-4 mb-4">
        <Link
          to="/email-templates/create/details"
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Details
        </Link>
        <Link
          to="/email-templates/create/defaults"
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Defaults
        </Link>
        <Link
          to="/email-templates/create/access-level"
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Access Level
        </Link>
      </div>
      <div className="border p-4 rounded">
        <Outlet />
      </div>
    </div>
  );
}
