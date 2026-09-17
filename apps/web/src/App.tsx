import { QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { Toaster } from "sonner";
import { RouterProvider } from "@tanstack/react-router";
import { queryClient } from "./config/query-client";
import { router } from "./config/router";

function App() {
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Toaster
          position="top-center"
          richColors
          duration={10000}
          toastOptions={{
            classNames: {
              title: "sm:text-base font-bold",
            },
          }}
        />
        <RouterProvider router={router} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

export default App;
