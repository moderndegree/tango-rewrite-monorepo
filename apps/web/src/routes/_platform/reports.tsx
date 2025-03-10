import { createFileRoute } from "@tanstack/react-router";
import { reportsQueryOptions } from "../../reports/reports-query-options";
import { useSuspenseQuery } from "@tanstack/react-query";

export const Route = createFileRoute("/_platform/reports")({
  component: RouteComponent,
  validateSearch: () => true,
  loader: ({ context: { queryClient } }) =>
    queryClient.ensureQueryData(reportsQueryOptions),
});

function RouteComponent() {
  const reportsQuery = useSuspenseQuery(reportsQueryOptions);
  const reports = reportsQuery.data;

  return (
    <div className="p-6 bg-white rounded-lg shadow-sm">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-gray-800">
          Reports Dashboard
        </h1>
        <p className="text-gray-600 mt-1">
          View and manage all available reports
        </p>
      </div>

      {reports.length === 0 ? (
        <div className="text-center py-10 bg-gray-50 rounded-lg">
          <h3 className="mt-2 text-sm font-medium text-gray-900">
            No reports found
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            Get started by creating a new report.
          </p>
        </div>
      ) : (
        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                >
                  User ID
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Title
                </th>
                <th
                  scope="col"
                  className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                >
                  Body
                </th>
                <th
                  scope="col"
                  className="py-3.5 pl-3 pr-4 text-right text-sm font-semibold text-gray-900 sm:pr-6"
                >
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {reports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                    {report.userId}
                  </td>
                  <td className=" px-3 py-4 text-sm text-gray-500">
                    {report.title}
                  </td>
                  <td className=" px-3 py-4 text-sm text-gray-500">
                    {report.body}
                  </td>
                  <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                    <a
                      href={`/reports/${report.id}`}
                      className="text-blue-600 hover:text-blue-900 mr-4"
                    >
                      View
                    </a>
                    <button className="text-blue-600 hover:text-blue-900">
                      Download
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <div className="mt-6 flex justify-between">
        <div className="text-sm text-gray-700">
          Showing <span className="font-medium">{reports.length}</span> reports
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
          Generate New Report
        </button>
      </div>
    </div>
  );
}
