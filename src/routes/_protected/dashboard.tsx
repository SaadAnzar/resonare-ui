import { createFileRoute } from "@tanstack/react-router";
import { ModeToggle } from "@/components/theme-toggle";
import { SignOutButton } from "@clerk/clerk-react";

export const Route = createFileRoute("/_protected/dashboard")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      Hello "/_main/dashboard"!
      <ModeToggle />
      <SignOutButton signOutOptions={{ redirectUrl: "/" }}>
        <button className="px-4 py-2 rounded bg-red-500 text-white">
          Logout
        </button>
      </SignOutButton>
    </div>
  );
}
