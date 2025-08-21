import { createFileRoute } from "@tanstack/react-router";
import { SignUp } from "@clerk/clerk-react";

export const Route = createFileRoute("/_auth/sign-up")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />;
}
