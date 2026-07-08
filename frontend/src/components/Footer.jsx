import { ArrowUpRight } from "lucide-react";
import { useTheme } from "@/ThemeContext";

const explore = [
  { label: "Home", href: "/#home" },
  { label: "Pricing", href: "/#pricing" },
  { label: "About", href: "/#about" },
  { label: "Manifesto", href: "/manifesto" },
  { label: "Contact", href: "/#contact" },
];

const product = [
  { label: "Nexxy CRM", href: "/#features" },
  { label: "Consistency Engine", href: "/#features" },
  { label: "AI Assistant", href: "/#features" },
  { label: "Relationship Pillars", href: "/#features" },
];

export default function Footer() {
  const { isDark } = useTheme();
  return (
    <footer data-testid="footer" className="border-t border-border bg-secondary/40 font-body px-6 md:px-12 lg:px-20">
      <div className="pt-16 md:pt-20 pb-10 max-w-6xl mx-auto">
        {/* Statement */}
        <p className="font-display text-3xl md:text-5xl tracking-tight text-foreground max-w-2xl">
          Build Relationships. <em className="italic text-accent">Not Just Pipelines.</em>
        </p>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-5">
            <a href="/#home" className="inline-flex items-center">
              <img src={isDark ? "/nexxy-logo-dark.png" : "/nexxy-logo.png"} alt="Nexxy" className="h-4 w-auto transition-opacity duration-500" />
            </a>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Helping professionals build relationships that build businesses.
            </p>
            <a
              href="/#contact"
              data-testid="footer-cta"
              className="press mt-6 inline-flex items-center gap-1.5 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              Start Building Better Relationships <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>

          {/* Explore */}
          <div className="md:col-span-2 md:col-start-7">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Explore</p>
            <ul className="space-y-2.5">
              {explore.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    data-testid={`footer-link-${l.label.toLowerCase()}`}
                    className="text-sm text-foreground/85 hover:text-foreground transition-colors duration-200"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product */}
          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Product</p>
            <ul className="space-y-2.5">
              {product.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sm text-foreground/85 hover:text-foreground transition-colors duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in touch */}
          <div className="md:col-span-2">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground mb-4">Get in touch</p>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="mailto:support@getnexxy.com" className="text-foreground/85 hover:text-foreground transition-colors duration-200">
                  support@getnexxy.com
                </a>
              </li>
              <li className="text-muted-foreground">Mon–Fri, 9am–6pm</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="text-xs text-muted-foreground">© 2026 Nexxy. All rights reserved.</span>
          <span className="text-xs text-muted-foreground">The relationship-first CRM for real estate professionals.</span>
        </div>
      </div>
    </footer>
  );
}
