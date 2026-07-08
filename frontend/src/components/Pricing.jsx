import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Nexxy Pro",
    price: "$1",
    period: "first month",
    desc: "Then $49.99/month. No hidden setup fees. No long-term contracts.",
    note: null,
    features: [
      "AI-powered pipeline management",
      "Pre-built sales funnels",
      "Automated SMS & email campaigns",
      "Social media scheduling",
      "Inbound call AI assistant",
      "Calendar management",
      "E-signature document sending",
      "Website with lead tracking",
      "Payment integrations",
      "Power dialer support",
      "Lead-to-referral network access",
    ],
    cta: "Start for $1",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    desc: "For teams and brokerages. SSO, SLAs, security reviews. We speak procurement.",
    note: null,
    features: [
      "Everything in Nexxy Pro",
      "Unlimited team members",
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
    <section id="pricing" data-testid="pricing-section" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 border-t border-border">
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
            <em className="italic">$1</em> for Your First Month
          </h2>
          <p className="mt-4 text-muted-foreground font-body leading-relaxed">
            Then just $49.99/month after that. Less than a family dinner.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              data-testid={`pricing-card-${plan.name.toLowerCase().replace(" ", "-")}`}
              className={`rounded-2xl p-8 flex flex-col font-body ${
                plan.highlight
                  ? "bg-primary text-primary-foreground shadow-[0_20px_60px_rgba(0,0,0,0.15)]"
                  : "hover-lift bg-background border border-border"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-sm font-medium ${plan.highlight ? "text-primary-foreground" : "text-foreground"}`}>
                  {plan.name}
                </span>
                {plan.highlight && (
                  <span className="rounded-full bg-accent text-accent-foreground dark:bg-primary-foreground dark:text-primary px-3 py-1 text-xs font-medium">
                    Best value
                  </span>
                )}
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="font-display text-5xl tracking-tight">{plan.price}</span>
                <span className={`text-sm ${plan.highlight ? "text-primary-foreground/60" : "text-muted-foreground"}`}>
                  {plan.period}
                </span>
              </div>
              <p className={`mt-3 text-sm leading-relaxed ${plan.highlight ? "text-primary-foreground/70" : "text-muted-foreground"}`}>
                {plan.desc}
              </p>
              {plan.note && (
                <p className="mt-2 text-xs text-primary-foreground/50 leading-relaxed">{plan.note}</p>
              )}
              <ul className="mt-6 space-y-2.5 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className={`h-4 w-4 mt-0.5 shrink-0 ${plan.highlight ? "text-accent dark:text-primary-foreground" : "text-accent"}`} />
                    <span className={plan.highlight ? "text-primary-foreground/90" : "text-foreground"}>{f}</span>
                  </li>
                ))}
              </ul>
              <Button
                data-testid={`pricing-cta-${plan.name.toLowerCase().replace(" ", "-")}`}
                className={`press mt-8 rounded-full w-full text-sm font-medium ${
                  plan.highlight
                    ? "bg-accent text-accent-foreground hover:bg-accent/90 dark:bg-primary-foreground dark:text-primary dark:hover:bg-primary-foreground/90"
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

        <p className="mt-10 text-center text-sm text-muted-foreground font-body">
          Prices in USD. Cancel anytime. No long-term contracts.
        </p>
      </div>
    </section>
  );
}
