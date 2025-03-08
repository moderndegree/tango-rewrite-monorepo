import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { Navigation } from "../components/navigation";
import React, { Suspense } from "react";
import { QueryClient } from "@tanstack/react-query";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: () => (
    <div className="min-h-screen flex flex-col">
      <h1 className="text-3xl font-bold underline p-4">Hello world!</h1>
      <div className="flex flex-1">
        {/* Left navigation */}
        <div className="w-64 border-r p-4">
          <Navigation />
        </div>

        {/* Main content */}
        <div className="flex-1 p-4">
          <Outlet />
        </div>
      </div>
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </div>
  ),
});
