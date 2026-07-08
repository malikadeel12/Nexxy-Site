import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

const manifesto = [
  "Technology changes. Markets evolve. Algorithms come and go.",
  "But trust still grows the same way. One conversation. One promise. One thoughtful follow-up. One relationship at a time.",
  "We believe businesses should educate before they sell. Listen before they automate. Serve before they scale.",
  "Because in the end... people don't recommend software. They recommend experiences.",
  "And behind every unforgettable experience is someone who cared enough to build a relationship that lasted.",
  "That's why Nexxy exists. Not to replace people. To help them become even more human.",
];

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
              too many professionals were losing opportunities—not because they lacked talent,
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

        {/* Manifesto */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.7 }}
          data-testid="manifesto"
          className="mt-24 rounded-2xl border border-border bg-secondary/50 p-10 md:p-16"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-body">The Nexxy Manifesto</p>
          <h3 className="mt-4 font-display text-3xl md:text-5xl tracking-tight text-foreground">
            Build Relationships. <em className="italic">Not Just Pipelines.</em>
          </h3>
          <div className="mt-8 max-w-2xl space-y-4">
            {manifesto.map((line, i) => (
              <p key={i} className="text-muted-foreground font-body leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
