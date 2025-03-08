import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_platform/email-templates/duplicate/$etid/details"
)({
  component: DuplicateEmailTemplateDetails,
});

function DuplicateEmailTemplateDetails() {
  const { etid } = useParams({
    from: "/_platform/email-templates/duplicate/$etid/details",
  });

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Duplicate Template</h2>
      <p className="mb-4">Duplicating from template ID: {etid}</p>
      <form className="space-y-4">
        <div>
          <label className="block mb-2">New Template Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter new template name"
          />
        </div>
        <div>
          <label className="block mb-2">Description</label>
          <textarea
            className="w-full p-2 border rounded"
            rows={4}
            placeholder="Enter template description"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Create Duplicate
          </button>
        </div>
      </form>
    </div>
  );
}
