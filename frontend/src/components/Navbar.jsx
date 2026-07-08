import { useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/ThemeContext";

const links = [
  { label: "Home", href: "/#home" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/#about" },
  { label: "Manifesto", href: "/manifesto" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { isDark, toggle } = useTheme();

  return (
    <header className="fixed top-4 inset-x-4 md:inset-x-10 lg:inset-x-16 z-50 font-body">
      <nav
        data-testid="navbar"
        className="flex items-center justify-between rounded-full border border-border bg-background/75 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] px-5 md:px-8 py-3"
      >
        <a href="/#home" data-testid="navbar-logo" className="flex items-center">
          <img src={isDark ? "/nexxy-logo-dark.png" : "/nexxy-logo.png"} alt="Nexxy" className="h-4 md:h-5 w-auto transition-opacity duration-500" />
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-testid={`nav-link-${link.label.toLowerCase()}`}
              className="nav-link text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            data-testid="theme-toggle"
            onClick={toggle}
            className="press h-9 w-9 rounded-full border border-border bg-background flex items-center justify-center text-foreground hover:bg-secondary transition-colors duration-200"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Button
            data-testid="navbar-cta-button"
            className="press rounded-full px-5 text-sm font-medium"
            asChild
          >
            <a href="/#contact">Get Started</a>
          </Button>
          <button
            data-testid="navbar-menu-toggle"
            onClick={() => setOpen(!open)}
            className="md:hidden h-9 w-9 rounded-full border border-border bg-background flex items-center justify-center text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </nav>

      {open && (
        <div
          data-testid="navbar-mobile-menu"
          className="md:hidden mt-2 rounded-2xl border border-border bg-background/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] p-3 flex flex-col"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              data-testid={`mobile-nav-link-${link.label.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="rounded-xl px-4 py-3 text-sm text-foreground/80 hover:bg-secondary hover:text-foreground transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
