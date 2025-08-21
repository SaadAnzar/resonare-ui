import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Link } from "@tanstack/react-router";

import { MobNavLinks, NavLinks } from "./nav-links";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-white text-black backdrop-blur-md shadow-sm border-b"
          : "py-5 bg-transparent text-white"
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-serif font-medium tracking-tight transition-opacity hover:opacity-70"
        >
          Resonare
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
          <div className="flex items-center space-x-6 ml-4">
            <Link
              to="/sign-in"
              className="text-sm font-medium hover:underline hover:opacity-70 transition-colors"
            >
              Sign In
            </Link>
            <Link
              to="/sign-up"
              className="text-sm font-medium hover:underline hover:opacity-70 transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
        <MobNavLinks isScrolled={isScrolled} />
      </div>
    </header>
  );
}
