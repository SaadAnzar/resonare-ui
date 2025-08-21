import { Link } from "@tanstack/react-router";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col h-screen items-center justify-center space-y-2 text-center">
      <h2 className="font-bold text-2xl text-destructive">Page Not Found</h2>
      <p className="text-lg text-muted-foreground">
        The page you are looking for does not exist.
      </p>

      <Link to="/" className="hover:underline font-bold mt-4 text-lg">
        Return to Home
      </Link>
    </div>
  );
}
