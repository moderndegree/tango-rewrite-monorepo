import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { Navigation } from "../components/navigation";
import React, { Suspense, useState } from "react";
import { QueryClient } from "@tanstack/react-query";

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          position: "bottom-right",
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        }))
      );

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: () => {
    const [mobileNavOpen, setMobileNavOpen] = useState(false);

    return (
      <div className="min-h-screen flex flex-col">
        {/* Header with responsive menu button */}
        <header className="flex items-center justify-between p-4 border-b">
          <h1 className="text-3xl font-bold">Hello world!</h1>
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </header>

        <div className="flex flex-1 relative">
          {/* Mobile navigation overlay */}
          <div
            className={`lg:hidden fixed inset-0 bg-black bg-opacity-50 z-10 transition-opacity ${
              mobileNavOpen ? "opacity-100" : "opacity-0 pointer-events-none"
            }`}
            onClick={() => setMobileNavOpen(false)}
          />

          {/* Navigation sidebar - hidden on mobile unless opened */}
          <div
            className={`
              lg:static lg:block w-64 bg-white shadow-lg z-20
              fixed inset-y-0 left-0 transform transition-transform duration-200 ease-in-out
              ${mobileNavOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
            `}
          >
            <div className="p-4">
              <Navigation />
            </div>
          </div>

          {/* Main content */}
          <div className="flex-1 p-4 overflow-auto">
            <Outlet />
          </div>
        </div>

        <Suspense>
          <TanStackRouterDevtools />
        </Suspense>
      </div>
    );
  },
});
