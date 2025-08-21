import { Link, Outlet, useNavigate } from "@tanstack/react-router";
import LoaderComponent from "@/components/loader";
import { useAuth } from "@clerk/clerk-react";
import { Home } from "lucide-react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function AuthLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const navigate = useNavigate();

  if (!isLoaded) {
    return <LoaderComponent />;
  }

  if (isLoaded && isSignedIn) {
    navigate({ to: "/dashboard" });
    return null;
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <Link
        to="/"
        className={cn(buttonVariants(), "fixed left-4 top-4 h-8 px-2")}
      >
        <Home className="size-4" />
        Home
      </Link>
      <Outlet />
    </div>
  );
}
