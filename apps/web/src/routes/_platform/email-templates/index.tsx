import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_platform/email-templates/")({
  component: EmailTemplatesIndex,
});

function EmailTemplatesIndex() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Email Templates</h1>
      <div className="flex justify-end mb-4">
        <a
          href="/email-templates/create"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Create Template
        </a>
      </div>
      <div className="border rounded shadow">
        {/* Template listing will go here */}
        <p className="p-4">Email templates listing will be displayed here</p>
      </div>
    </div>
  );
}
