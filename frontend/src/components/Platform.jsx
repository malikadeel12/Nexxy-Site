import { motion } from "framer-motion";
import { Megaphone, Sparkles, BookOpen } from "lucide-react";

const blocks = [
  {
    icon: Megaphone,
    eyebrow: "Show Up Everywhere",
    headline: "Teach More. Show Up Consistently. Become The Professional People Remember.",
    copy: "Modern real estate professionals aren't just agents. They're educators. Trusted advisors. Community builders. Nexxy helps you stay visible across every platform with thoughtful, consistent content—so your audience remembers you long before they need you.",
  },
  {
    icon: Sparkles,
    eyebrow: "AI That Works Quietly In The Background",
    headline: "Great Technology Shouldn't Demand Attention. It Should Remove Friction.",
    copy: "Nexxy uses AI where it matters most—drafting follow-ups, organizing conversations, surfacing opportunities, and handling repetitive work—so you can focus on people, not processes.",
  },
  {
    icon: BookOpen,
    eyebrow: "The Nexxy CRM",
    headline: "Every Relationship Has A Story. Keep Every Chapter Together.",
    copy: "Remember birthdays. Past conversations. Important milestones. Client preferences. Referral sources. Next steps. Because meaningful relationships aren't built from scattered notes. They're built from remembering what matters.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function Platform() {
  return (
    <section data-testid="platform-section" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 border-t border-border bg-secondary/40">
      <div className="max-w-6xl mx-auto space-y-24">
        {blocks.map((b, i) => (
          <motion.div
            key={b.eyebrow}
            {...fadeUp}
            transition={{ duration: 0.6 }}
            data-testid={`platform-block-${i}`}
            className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-start ${i % 2 === 1 ? "" : ""}`}
          >
            <div className={`lg:col-span-6 ${i % 2 === 1 ? "lg:col-start-7 lg:order-2" : ""}`}>
              <div className="flex items-center gap-2.5 font-body">
                <div className="h-8 w-8 rounded-lg bg-accent/10 flex items-center justify-center">
                  <b.icon className="h-4 w-4 text-accent" />
                </div>
                <span className="text-sm font-medium text-accent">{b.eyebrow}</span>
              </div>
              <h2 className="mt-5 font-display text-3xl md:text-4xl leading-[1.1] tracking-tight text-foreground">
                {b.headline}
              </h2>
            </div>
            <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:col-start-1 lg:order-1" : "lg:col-start-8"} flex items-end h-full`}>
              <p className="text-muted-foreground font-body leading-relaxed">{b.copy}</p>
            </div>
          </motion.div>
        ))}

        {/* Testimonial */}
        <motion.figure
          {...fadeUp}
          transition={{ duration: 0.6 }}
          data-testid="platform-testimonial"
          className="max-w-3xl border-t border-border pt-16"
        >
          <p className="text-xs uppercase tracking-widest text-muted-foreground font-body mb-6">
            How has Nexxy changed the way you build relationships?
          </p>
          <blockquote className="font-display text-2xl md:text-[2rem] leading-snug text-foreground">
            "My clients tell me I'm the only agent who 'always remembers.' Their kids' names,
            the closing anniversary, the follow-up I promised. Truth is, I just stopped
            letting those moments slip. Nexxy remembers with me."
          </blockquote>
          <figcaption className="mt-5 flex items-center gap-3 font-body">
            <div className="h-9 w-9 rounded-full bg-accent/15 text-accent flex items-center justify-center text-xs font-semibold">MK</div>
            <div className="text-sm">
              <span className="font-medium text-foreground">Maya Krishnan</span>
              <span className="text-muted-foreground"> — Residential Realtor, Crestline Group</span>
            </div>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
