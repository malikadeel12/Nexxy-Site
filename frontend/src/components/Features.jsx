import { motion } from "framer-motion";
import { ArrowRight, User, Sparkles, Repeat, ShieldCheck, HeartHandshake } from "lucide-react";

const beliefs = [
  "Trusted Relationships, Not Forgotten Leads",
  "Consistent Communication Without Constant Effort",
  "AI That Supports You, Never Replaces You",
  "Built For Long-Term Growth, Not Short-Term Hacks",
];

const chain = [
  { icon: User, label: "Human", desc: "You bring the relationships" },
  { icon: Sparkles, label: "AI", desc: "Nexxy drafts, reminds, and organizes" },
  { icon: Repeat, label: "Consistency", desc: "Every follow-up happens on time" },
  { icon: ShieldCheck, label: "Trust", desc: "Clients feel remembered and valued" },
  { icon: HeartHandshake, label: "Referrals", desc: "Your business grows itself" },
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
        {/* Trust bar: beliefs, not logos (marquee) */}
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
            className="rounded-2xl border border-border bg-background p-7 md:p-9 shadow-[0_8px_40px_rgba(0,0,0,0.05)]"
          >
            <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-body mb-6">
              How trust compounds
            </p>
            <div className="relative font-body">
              <div className="absolute left-[19px] top-3 bottom-3 w-px bg-gradient-to-b from-border via-border to-transparent" style={{ backgroundImage: "linear-gradient(to bottom, hsl(var(--border)), hsl(var(--accent)))" }} />
              <div className="flex flex-col gap-6">
                {chain.map((step, i) => {
                  const last = i === chain.length - 1;
                  return (
                    <motion.div
                      key={step.label}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.2 + i * 0.12 }}
                      className="relative flex items-center gap-4"
                    >
                      <div
                        className={`relative z-10 h-10 w-10 shrink-0 rounded-full flex items-center justify-center ${
                          last
                            ? "bg-accent text-accent-foreground shadow-[0_6px_20px_hsl(239_84%_67%/0.4)]"
                            : "bg-background border border-border text-foreground"
                        }`}
                      >
                        <step.icon className="h-4 w-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className={`text-sm ${last ? "font-semibold text-foreground" : "font-medium text-foreground"}`}>
                          {step.label}
                          {last && (
                            <span className="ml-2 rounded-full bg-accent/10 text-accent px-2 py-0.5 text-[10px] font-medium align-middle">
                              The outcome
                            </span>
                          )}
                        </div>
                        <div className="text-xs text-muted-foreground mt-0.5">{step.desc}</div>
                      </div>
                      <span className="font-display italic text-lg text-muted-foreground/40">0{i + 1}</span>
                    </motion.div>
                  );
                })}
              </div>
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
