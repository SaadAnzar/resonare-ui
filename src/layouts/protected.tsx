import LoaderComponent from "@/components/loader";
import { useAuth } from "@clerk/clerk-react";
import { Outlet, useNavigate } from "@tanstack/react-router";

export default function ProtectedLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const navigate = useNavigate();

  if (!isLoaded) {
    return <LoaderComponent />;
  }

  if (isLoaded && !isSignedIn) {
    navigate({ to: "/sign-in" });
    return null;
  }

  return <Outlet />;
}
