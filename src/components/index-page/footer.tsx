import { Link } from "@tanstack/react-router";
import { NavLinks } from "./nav-links";

export default function Footer() {
  return (
    <footer className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link
              to="/"
              className="text-xl font-serif font-medium tracking-tight hover:opacity-70"
            >
              Resonare
            </Link>
          </div>

          <div className="flex space-x-6 mb-4 md:mb-0">
            <NavLinks />
          </div>

          <div className="text-sm text-muted-foreground">
            &copy; 2025 Resonare. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
