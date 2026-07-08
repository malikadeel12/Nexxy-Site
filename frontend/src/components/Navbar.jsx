import { Button } from "@/components/ui/button";

const links = [
  { label: "Home", href: "/#home" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/#about" },
  { label: "Manifesto", href: "/manifesto" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  return (
    <nav
      data-testid="navbar"
      className="fixed top-4 inset-x-4 md:inset-x-10 lg:inset-x-16 z-50 flex items-center justify-between rounded-full border border-border bg-background/75 backdrop-blur-xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] px-5 md:px-8 py-3 font-body"
    >
      <a
        href="/#home"
        data-testid="navbar-logo"
        className="flex items-center"
      >
        <img src="/nexxy-logo.png" alt="Nexxy" className="h-6 md:h-7 w-auto" />
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
      <Button
        data-testid="navbar-cta-button"
        className="press rounded-full px-5 text-sm font-medium"
        asChild
      >
        <a href="/#contact">Get Started</a>
      </Button>
    </nav>
  );
}
