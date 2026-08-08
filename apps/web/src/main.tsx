import ReactDOM from "react-dom/client";
import { RouterProvider } from "@tanstack/react-router";

// Import the generated route tree
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./config/query-client";
import { router } from "./config/router";

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

// Render the app
const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>,
  );
}
