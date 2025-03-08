import { queryOptions } from "@tanstack/react-query";
import { fetchReports } from "./reports-service";

export const reportsQueryOptions = queryOptions({
  queryKey: ["reports"],
  queryFn: () => fetchReports(),
});
