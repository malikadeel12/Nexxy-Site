import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const lines = [
  "Technology changes. Markets evolve. Algorithms come and go.",
  "But trust still grows the same way.",
  "One conversation. One promise. One thoughtful follow-up. One relationship at a time.",
  "We believe businesses should educate before they sell.",
  "Listen before they automate.",
  "Serve before they scale.",
  "Because in the end... people don't recommend software. They recommend experiences.",
  "And behind every unforgettable experience is someone who cared enough to build a relationship that lasted.",
];

export default function Manifesto() {
  return (
    <div className="bg-background min-h-screen flex flex-col">
      <Navbar />
      <main data-testid="manifesto-page" className="flex-1 px-6 md:px-12 lg:px-20 py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs uppercase tracking-[0.25em] text-muted-foreground font-body"
          >
            The Nexxy Manifesto
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            data-testid="manifesto-headline"
            className="mt-6 font-display text-5xl md:text-7xl leading-[1] tracking-tight text-foreground"
          >
            Build Relationships. <em className="italic">Not Just Pipelines.</em>
          </motion.h1>

          <div className="mt-14 space-y-7">
            {lines.map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.08 }}
                className="font-display text-2xl md:text-3xl leading-snug text-foreground/80"
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 + lines.length * 0.08 }}
            className="mt-16 border-t border-border pt-10"
          >
            <p className="font-display text-3xl md:text-4xl leading-snug text-foreground">
              That's why Nexxy exists.
            </p>
            <p className="mt-3 font-display text-3xl md:text-4xl leading-snug text-foreground">
              Not to replace people. <em className="italic text-accent">To help them become even more human.</em>
            </p>
            <Button
              data-testid="manifesto-cta"
              className="mt-10 rounded-full px-6 py-5 text-sm font-medium font-body"
              asChild
            >
              <a href="/#contact">Start Building Better Relationships</a>
            </Button>
          </motion.div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
