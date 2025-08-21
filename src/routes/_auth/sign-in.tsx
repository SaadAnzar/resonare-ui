import { createFileRoute } from "@tanstack/react-router";
import { SignIn } from "@clerk/clerk-react";

export const Route = createFileRoute("/_auth/sign-in")({
  component: RouteComponent,
});

function RouteComponent() {
  return <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />;
}
