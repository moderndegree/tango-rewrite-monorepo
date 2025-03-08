import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_platform/email-templates/create/defaults"
)({
  component: CreateEmailTemplateDefaults,
});

function CreateEmailTemplateDefaults() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Template Defaults</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-2">Subject</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter email subject"
          />
        </div>
        <div>
          <label className="block mb-2">Email Content</label>
          <textarea
            className="w-full p-2 border rounded"
            rows={8}
            placeholder="Enter email content"
          />
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
          >
            Back: Details
          </button>
          <button
            type="button"
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Next: Access Level
          </button>
        </div>
      </form>
    </div>
  );
}
