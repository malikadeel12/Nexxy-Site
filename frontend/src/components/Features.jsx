import { motion } from "framer-motion";
import { ArrowRight, User, Sparkles, Repeat, ShieldCheck, HeartHandshake } from "lucide-react";

const beliefs = [
  "Trusted Relationships, Not Forgotten Leads",
  "Consistent Communication Without Constant Effort",
  "AI That Supports You, Never Replaces You",
  "Built For Long-Term Growth, Not Short-Term Hacks",
];

const chain = [
  { icon: User, label: "Human" },
  { icon: Sparkles, label: "AI" },
  { icon: Repeat, label: "Consistency" },
  { icon: ShieldCheck, label: "Trust" },
  { icon: HeartHandshake, label: "Referrals" },
];

const pillars = [
  {
    title: "Stay Present",
    desc: "Automated follow-ups that never feel automated.",
  },
  {
    title: "Stay Organized",
    desc: "Every conversation. Every client. Every opportunity. In one place.",
  },
  {
    title: "Stay Trusted",
    desc: "Respond faster. Remember more. Deliver consistently.",
  },
  {
    title: "Stay Focused",
    desc: "Less admin. More conversations. More closings.",
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function Features() {
  return (
    <section id="features" data-testid="features-section" className="px-6 md:px-12 lg:px-20 pt-[22rem] md:pt-[28rem] pb-24 md:pb-32 border-t border-border bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        {/* Trust bar — beliefs, not logos (marquee) */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          data-testid="trust-bar"
          className="relative overflow-hidden"
        >
          <div className="marquee-track flex w-max items-center font-body">
            {[...beliefs, ...beliefs].map((b, i) => (
              <span key={i} className="flex items-center whitespace-nowrap text-sm font-medium text-foreground/60">
                {b}
                <span className="mx-10 text-accent/60 text-xs">✦</span>
              </span>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#fafafa] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#fafafa] to-transparent" />
        </motion.div>

        {/* Technology should strengthen relationships */}
        <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }}>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
              Technology Should Never Replace Relationships. It Should <em className="italic">Strengthen</em> Them.
            </h2>
            <p className="mt-5 text-muted-foreground font-body leading-relaxed">
              The best agents don't win because they send the most messages. They win because
              every interaction feels timely, thoughtful, and personal. Nexxy quietly handles
              the repetitive work so you can spend more time building the relationships that
              actually grow your business.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            data-testid="relationship-chain"
            className="rounded-2xl border border-border bg-background p-8 md:p-10"
          >
            <div className="flex flex-col gap-2 font-body">
              {chain.map((step, i) => (
                <div key={step.label}>
                  <div className="flex items-center gap-4">
                    <div className={`h-10 w-10 rounded-full flex items-center justify-center ${i === chain.length - 1 ? "bg-accent text-accent-foreground" : "bg-secondary text-foreground"}`}>
                      <step.icon className="h-4 w-4" />
                    </div>
                    <span className={`text-sm ${i === chain.length - 1 ? "font-semibold text-foreground" : "text-muted-foreground"}`}>{step.label}</span>
                  </div>
                  {i < chain.length - 1 && (
                    <div className="ml-5 h-5 w-px bg-border" />
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Relationship Pillars */}
        <div className="mt-28">
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.6 }}
            className="font-display text-3xl md:text-4xl tracking-tight text-foreground"
          >
            The Relationship Pillars
          </motion.h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 font-body">
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeUp}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                data-testid={`pillar-card-${i}`}
                className="hover-lift rounded-xl border border-border bg-background p-7"
              >
                <span className="font-display text-xl text-accent italic">0{i + 1}</span>
                <h3 className="mt-3 font-semibold text-foreground text-lg">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
