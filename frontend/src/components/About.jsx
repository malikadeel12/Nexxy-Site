import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="lg:col-span-5">
            <p className="text-sm text-accent font-medium font-body mb-3">About Nexxy</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
              We Believe Better Relationships Build Better <em className="italic">Businesses</em>.
            </h2>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="lg:col-span-6 lg:col-start-7">
            <p className="text-muted-foreground font-body leading-relaxed">
              Nexxy wasn't created because the world needed another CRM. It was created because
              too many professionals were losing opportunities, not because they lacked talent,
              but because they lacked time.
            </p>
            <p className="mt-4 text-muted-foreground font-body leading-relaxed">
              Relationships deserve consistency. Clients deserve thoughtful communication.
              Professionals deserve technology that helps them serve people better.
            </p>
            <p className="mt-4 text-foreground font-body leading-relaxed font-medium">
              Everything we build begins with one question: Will this help someone create a
              better client experience? If the answer is yes, we build it.
            </p>
          </motion.div>
        </div>

        {/* Manifesto teaser */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7 }}
          data-testid="manifesto"
          className="mt-24 rounded-2xl border border-border bg-secondary/50 p-10 md:p-16 flex flex-col md:flex-row md:items-end md:justify-between gap-8"
        >
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-body">The Nexxy Manifesto</p>
            <h3 className="mt-4 font-display text-3xl md:text-5xl tracking-tight text-foreground">
              Build Relationships. <em className="italic">Not Just Pipelines.</em>
            </h3>
            <p className="mt-4 text-muted-foreground font-body leading-relaxed max-w-xl">
              People don't recommend software. They recommend experiences. Read what we
              believe, and why Nexxy exists.
            </p>
          </div>
          <a
            href="/manifesto"
            data-testid="manifesto-page-link"
            className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium font-body hover:bg-primary/90 transition-colors duration-200 shrink-0"
          >
            Read the Manifesto <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
