import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_platform/email-templates/review")({
  component: ReviewEmailTemplate,
});

function ReviewEmailTemplate() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Review Email Template</h1>

      <div className="border-t border-b py-4 my-4">
        <h2 className="text-xl font-semibold">Preview</h2>
        <div className="mt-4 p-4 border rounded bg-gray-50">
          <div className="mb-2">
            <strong>Subject:</strong> Example Email Subject
          </div>
          <div className="p-4 border rounded bg-white">
            <p>This is a preview of the email content.</p>
            <p>Hello &#123;recipient_name&#125;,</p>
            <p>Thank you for using our service.</p>
            <p>
              Best regards,
              <br />
              The Team
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between">
        <button
          type="button"
          className="px-4 py-2 bg-gray-300 text-gray-700 rounded"
          onClick={() => window.history.back()}
        >
          Back
        </button>
        <button
          type="button"
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Approve
        </button>
      </div>
    </div>
  );
}
