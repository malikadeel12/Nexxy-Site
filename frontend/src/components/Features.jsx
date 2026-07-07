import { motion } from "framer-motion";
import { Bot, Workflow, LineChart, ShieldCheck, Zap, Users } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "Intelligent Agents",
    desc: "AI agents that learn your processes and execute repetitive tasks autonomously, around the clock.",
  },
  {
    icon: Workflow,
    title: "Visual Workflows",
    desc: "Design multi-step automations with a drag-and-drop builder—no code required.",
  },
  {
    icon: LineChart,
    title: "Real-time Analytics",
    desc: "Track pipeline health, revenue, and team performance from a single live dashboard.",
  },
  {
    icon: Users,
    title: "Built-in CRM",
    desc: "Nexxy CRM keeps every lead, contact, and deal organized and synced with your automations.",
  },
  {
    icon: Zap,
    title: "Instant Integrations",
    desc: "Connect the tools you already use in minutes with one-click native integrations.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    desc: "SOC 2-ready infrastructure with encryption at rest and in transit, roles, and audit logs.",
  },
];

export default function Features() {
  return (
    <section id="features" data-testid="features-section" className="px-6 md:px-12 lg:px-20 pt-[22rem] md:pt-[28rem] pb-24 md:pb-32 border-t border-border bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl"
        >
          <p className="text-sm text-accent font-medium font-body mb-3">Features</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
            Everything you need to <em className="italic">automate</em> your business
          </h2>
          <p className="mt-4 text-muted-foreground font-body leading-relaxed">
            Nexxy brings agents, workflows, and your CRM together in one place—so busywork
            disappears and your team moves faster.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              data-testid={`feature-card-${i}`}
              className="group rounded-xl border border-border bg-background p-6 hover:border-accent/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-[border-color,box-shadow] duration-300"
            >
              <div className="h-10 w-10 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
                <f.icon className="h-5 w-5 text-foreground group-hover:text-accent transition-colors duration-300" />
              </div>
              <h3 className="mt-4 font-body font-semibold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground font-body leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
