import { createFileRoute, useParams } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/_platform/email-templates/edit/$etid/access-level"
)({
  component: EditEmailTemplateAccessLevel,
});

function EditEmailTemplateAccessLevel() {
  const { etid } = useParams({
    from: "/_platform/email-templates/edit/$etid/access-level",
  });

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Edit Access Level</h2>
      <p className="mb-4">Editing template ID: {etid}</p>
      <form className="space-y-4">
        <div>
          <label className="block mb-2">Access Level</label>
          <select className="w-full p-2 border rounded">
            <option value="public">Public</option>
            <option value="restricted">Restricted</option>
            <option value="private">Private</option>
          </select>
        </div>
        <div>
          <label className="block mb-2">Authorized Users</label>
          <select className="w-full p-2 border rounded" multiple>
            <option value="user1">User 1</option>
            <option value="user2">User 2</option>
            <option value="user3">User 3</option>
          </select>
        </div>
        <div className="flex justify-between">
          <button
            type="button"
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
          >
            Back: Defaults
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
