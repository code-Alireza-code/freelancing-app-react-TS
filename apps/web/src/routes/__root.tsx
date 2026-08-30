import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { QueryClient } from "@tanstack/react-query";
import NotFound from "@/components/NotFound";

interface RouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<RouterContext>()({
  component: RootLayout,
  notFoundComponent: NotFound,
});

function RootLayout() {
  return (
    <div className="text-secondary-800">
      <Outlet />
      {import.meta.env.MODE === "development" && (
        <>
          <ReactQueryDevtools />
          <TanStackRouterDevtools />
        </>
      )}
    </div>
  );
}
