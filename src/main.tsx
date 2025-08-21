import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@/providers/theme-provider";
import ClerkProvider from "@/providers/clerk-provider";
import { RouterProvider, createRouter } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";

// Import the generated route tree
import { routeTree } from "./routeTree.gen";

// Create a new router instance
const router = createRouter({ routeTree });

// Register the router instance for type safety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

// Render the app
const rootElement = document.getElementById("root")!;

if (!rootElement) {
  throw new Error("Root element not found");
}

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <StrictMode>
      <ThemeProvider defaultTheme="dark" storageKey="resonare-theme">
        <QueryClientProvider client={queryClient}>
          <ClerkProvider>
            <RouterProvider router={router} />
          </ClerkProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </StrictMode>
  );
}
