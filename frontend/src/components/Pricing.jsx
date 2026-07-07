import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    desc: "For small teams getting started with automation.",
    features: ["Up to 3 team members", "5 active workflows", "Nexxy CRM (500 contacts)", "Email support"],
    cta: "Start free trial",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$79",
    period: "/mo",
    desc: "For growing teams that need serious automation power.",
    features: [
      "Up to 15 team members",
      "Unlimited workflows",
      "Nexxy CRM (10,000 contacts)",
      "AI agents with GPT-5",
      "Priority support",
    ],
    cta: "Start free trial",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For organizations with advanced security and scale needs.",
    features: [
      "Unlimited everything",
      "Dedicated success manager",
      "SSO & audit logs",
      "Custom integrations",
      "99.9% uptime SLA",
    ],
    cta: "Contact sales",
    highlight: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" data-testid="pricing-section" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-secondary/40 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm text-accent font-medium font-body mb-3">Pricing</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
            Simple pricing that <em className="italic">scales</em> with you
          </h2>
          <p className="mt-4 text-muted-foreground font-body leading-relaxed">
            Start free for 14 days. No credit card required. Cancel anytime.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-testid={`pricing-card-${plan.name.toLowerCase()}`}
              className={`rounded-2xl p-8 flex flex-col font-body ${
                plan.highlight
                  ? "bg-primary text-primary-foreground shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                  : "bg-background border border-border"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-sm font-medium ${plan.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                  {plan.name}
                </span>
                {plan.highlight && (
                  <span className="rounded-full bg-accent text-accent-foreground px-3 py-1 text-xs font-medium">
                    Most popular
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-5xl tracking-tight">{plan.price}</span>
                <span className={`text-sm ${plan.highlight ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`mt-3 text-sm leading-relaxed ${plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {plan.desc}
              </p>
              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${plan.highlight ? "text-accent" : "text-accent"}`} />
                    <span className={plan.highlight ? "text-primary-foreground/90" : "text-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                data-testid={`pricing-cta-${plan.name.toLowerCase()}`}
                className={`mt-8 rounded-full w-full text-sm font-medium ${
                  plan.highlight
                    ? "bg-accent text-accent-foreground hover:bg-accent/90"
                    : ""
                }`}
                variant={plan.highlight ? "default" : "outline"}
                asChild
              >
                <a href="#contact">{plan.cta}</a>
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
