import { motion } from "framer-motion";

const stats = [
  { value: "12k+", label: "Teams automating with Nexxy" },
  { value: "40M+", label: "Tasks executed by our agents" },
  { value: "99.9%", label: "Platform uptime" },
  { value: "6h", label: "Saved per employee, weekly" },
];

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-accent font-medium font-body mb-3">About Nexxy</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
            We believe work should feel <em className="italic">effortless</em>
          </h2>
          <p className="mt-6 text-muted-foreground font-body leading-relaxed">
            Nexxy started with a simple idea: the best teams shouldn't spend their days on
            repetitive busywork. So we built a platform where intelligent agents handle the
            routine—data entry, follow-ups, reporting—while people focus on strategy,
            creativity, and relationships.
          </p>
          <p className="mt-4 text-muted-foreground font-body leading-relaxed">
            Today, Nexxy powers automation and CRM for thousands of companies worldwide,
            from two-person startups to global enterprises. And we're just getting started.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-testid={`about-stat-${i}`}
              className="rounded-xl border border-border bg-background p-6"
            >
              <div className="font-display text-4xl md:text-5xl tracking-tight text-foreground">{s.value}</div>
              <div className="mt-2 text-sm text-muted-foreground font-body leading-relaxed">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
