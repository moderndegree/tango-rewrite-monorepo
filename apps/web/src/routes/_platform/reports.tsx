import { createFileRoute } from "@tanstack/react-router";
import { reportsQueryOptions } from "../../reports/reports-query-options";
import { useSuspenseQuery } from "@tanstack/react-query";
import { ReportsTable } from "../../reports/reports-table";

export const Route = createFileRoute("/_platform/reports")({
  component: RouteComponent,
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

      <ReportsTable reports={reports} />

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
