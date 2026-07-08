export default function Footer() {
  return (
    <footer data-testid="footer" className="px-6 md:px-12 lg:px-20 py-10 border-t border-border font-body">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-lg font-semibold tracking-tight text-foreground">✦ Nexxy</span>
        <div className="flex items-center gap-8 text-sm text-muted-foreground">
          <a href="/#home" className="hover:text-foreground transition-colors duration-200">Home</a>
          <a href="/#pricing" className="hover:text-foreground transition-colors duration-200">Pricing</a>
          <a href="/#about" className="hover:text-foreground transition-colors duration-200">About</a>
          <a href="/manifesto" data-testid="footer-manifesto-link" className="hover:text-foreground transition-colors duration-200">Manifesto</a>
          <a href="/#contact" className="hover:text-foreground transition-colors duration-200">Contact</a>
        </div>
        <span className="text-sm text-muted-foreground">Helping professionals build relationships that build businesses.</span>
      </div>
    </footer>
  );
}
