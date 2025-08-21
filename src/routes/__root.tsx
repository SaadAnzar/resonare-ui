import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Toaster } from "@/components/ui/sonner";
import ErrorPage from "@/pages/error";
import NotFoundPage from "@/pages/not-found";

export const Route = createRootRoute({
  component: RootComponent,
  errorComponent: ({ error }) => <ErrorPage error={error} />,
  notFoundComponent: () => <NotFoundPage />,
});

function RootComponent() {
  return (
    <>
      <Toaster richColors />
      <TanStackRouterDevtools position="bottom-left" />
      <Outlet />
    </>
  );
}
