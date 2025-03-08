import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_platform/email-templates/edit/$etid/details"
)({
  component: EditEmailTemplateDetails,
});

function EditEmailTemplateDetails() {
  const { etid } = useParams({
    from: "/_platform/email-templates/edit/$etid/details",
  });

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Edit Template Details</h2>
      <p className="mb-4">Editing template ID: {etid}</p>
      <form className="space-y-4">
        <div>
          <label className="block mb-2">Template Name</label>
          <input
            type="text"
            className="w-full p-2 border rounded"
            placeholder="Enter template name"
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
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Next: Defaults
          </button>
        </div>
      </form>
    </div>
  );
}
