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
      className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-5 font-body relative z-20"
    >
      <a
        href="/#home"
        data-testid="navbar-logo"
        className="text-xl font-semibold tracking-tight text-foreground"
      >
        ✦ Nexxy
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
