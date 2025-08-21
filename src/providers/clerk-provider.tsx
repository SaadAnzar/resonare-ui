import { ClerkProvider as Provider } from "@clerk/clerk-react";

export default function ClerkProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

  if (!PUBLISHABLE_KEY) {
    throw new Error("Add your Clerk Publishable Key to the .env file");
  }

  return (
    <Provider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
      {children}
    </Provider>
  );
}
