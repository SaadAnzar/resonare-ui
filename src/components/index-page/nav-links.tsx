import { NAV_LINKS } from "@/lib/constants";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

const scrollToSection = (id: string) => {
  if (id === "home") {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Account for header height
        behavior: "smooth",
      });
    }
  }
};

export function NavLinks() {
  return (
    <>
      {NAV_LINKS.map((link) => (
        <button
          key={link}
          className="text-sm font-medium hover:opacity-70 transition-colors"
          onClick={() => scrollToSection(link)}
        >
          {link.charAt(0).toUpperCase() + link.slice(1)}
        </button>
      ))}
    </>
  );
}

export function MobNavLinks({ isScrolled }: { isScrolled: boolean }) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className="md:hidden flex items-center"
          aria-label="Toggle menu"
        >
          <span className="block w-6 transition-all duration-300">
            <span
              className={cn(
                "block w-6 h-0.5 mb-1.5",
                isScrolled ? "bg-black" : "bg-white"
              )}
            />
            <span
              className={cn(
                "block w-6 h-0.5 mb-1.5",
                isScrolled ? "bg-black" : "bg-white"
              )}
            />
            <span
              className={cn(
                "block w-4 h-0.5",
                isScrolled ? "bg-black" : "bg-white"
              )}
            />
          </span>
        </button>
      </SheetTrigger>
      <SheetContent className="bg-white">
        <SheetHeader>
          <SheetTitle>
            <Link
              to="/"
              className="text-black text-xl font-serif font-medium tracking-tight transition-opacity hover:opacity-70"
            >
              Resonare
            </Link>
          </SheetTitle>
          <SheetDescription className="sr-only" />
          <SheetClose asChild>
            <button
              className="absolute top-5 right-5 p-2"
              aria-label="Close menu"
            >
              <span className="block w-6 h-0.5 bg-black transform rotate-45 translate-y-0.5" />
              <span className="block w-6 h-0.5 bg-black transform -rotate-45" />
            </button>
          </SheetClose>
        </SheetHeader>
        <nav className="flex flex-col space-y-6 text-black">
          {NAV_LINKS.map((link) => (
            <SheetClose asChild key={link}>
              <button
                className="w-full hover:opacity-70 transition-colors"
                onClick={() => scrollToSection(link)}
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </button>
            </SheetClose>
          ))}

          <div className="flex flex-col items-center justify-center space-y-6 text-lg font-medium">
            <SheetClose asChild>
              <Link
                to="/sign-in"
                className="hover:underline hover:opacity-70 transition-colors"
              >
                Sign In
              </Link>
            </SheetClose>
            <SheetClose asChild>
              <Link
                to="/sign-up"
                className="hover:underline hover:opacity-70 transition-colors"
              >
                Sign Up
              </Link>
            </SheetClose>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
