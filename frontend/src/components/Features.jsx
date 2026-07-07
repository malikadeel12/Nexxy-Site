import { motion } from "framer-motion";
import { ArrowRight, Zap, Mail, Database, BellRing } from "lucide-react";

const trustedBy = ["Crestline", "Juno Labs", "Fieldstone & Co.", "Arcadia Health", "Northwind", "Beacon Freight"];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function Features() {
  return (
    <section id="features" data-testid="features-section" className="px-6 md:px-12 lg:px-20 pt-[22rem] md:pt-[28rem] pb-24 md:pb-32 border-t border-border bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        {/* Trusted by strip */}
        <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="flex flex-wrap items-center gap-x-10 gap-y-3 font-body">
          <span className="text-xs uppercase tracking-widest text-muted-foreground">Runs quietly inside</span>
          {trustedBy.map((name) => (
            <span key={name} className="text-sm font-medium text-foreground/50">{name}</span>
          ))}
        </motion.div>

        <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.1 }} className="mt-20 max-w-2xl">
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
            Less busywork. That's the <em className="italic">whole</em> pitch.
          </h2>
          <p className="mt-4 text-muted-foreground font-body leading-relaxed">
            We're not going to list twelve features you'll never open. Here's what teams
            actually use Nexxy for, every single day.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5 font-body">
          {/* Wide card with workflow visual */}
          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            data-testid="feature-card-0"
            className="lg:col-span-2 rounded-xl border border-border bg-background p-8 flex flex-col justify-between gap-8"
          >
            <div>
              <h3 className="font-semibold text-foreground text-lg">Agents that finish the job, not just start it</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-lg">
                A lead fills your form at 2am. By the time you wake up, Nexxy has enriched the
                record, scored it, drafted the intro email, and booked the follow-up. You just
                hit send. Or don't — it'll nudge you.
              </p>
            </div>
            <div className="flex items-center gap-2 flex-wrap text-xs">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 text-accent px-3 py-1.5 font-medium"><Zap className="h-3 w-3" /> New lead</span>
              <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5"><Database className="h-3 w-3" /> Enrich &amp; score</span>
              <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5"><Mail className="h-3 w-3" /> Draft intro</span>
              <ArrowRight className="h-3.5 w-3.5 text-muted-foreground" />
              <span className="inline-flex items-center gap-1.5 rounded-full bg-secondary px-3 py-1.5"><BellRing className="h-3 w-3" /> Nudge you</span>
            </div>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.18 }}
            data-testid="feature-card-1"
            className="rounded-xl border border-border bg-primary text-primary-foreground p-8"
          >
            <h3 className="font-semibold text-lg">A CRM your team won't dodge</h3>
            <p className="mt-2 text-sm text-primary-foreground/70 leading-relaxed">
              Nexxy CRM updates itself from your inbox and calls. Reps stopped "forgetting"
              to log activity because there's nothing left to log.
            </p>
            <p className="mt-6 font-display text-3xl">0 manual entries<span className="text-primary-foreground/50 text-lg"> /week</span></p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 }}
            data-testid="feature-card-2"
            className="rounded-xl border border-border bg-background p-8"
          >
            <h3 className="font-semibold text-foreground text-lg">Workflows in plain English</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Type "when a deal closes, invoice them and post to #wins" — Nexxy builds the
              workflow. Edit it visually if you're picky. We are.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.18 }}
            data-testid="feature-card-3"
            className="rounded-xl border border-border bg-background p-8"
          >
            <h3 className="font-semibold text-foreground text-lg">Reports before the meeting</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Monday 8:55am: pipeline summary lands in Slack, five minutes before standup.
              Nobody builds that dashboard by hand anymore.
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.26 }}
            data-testid="feature-card-4"
            className="rounded-xl border border-border bg-background p-8"
          >
            <h3 className="font-semibold text-foreground text-lg">Security your IT lead will sign off on</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              SOC 2 Type II, encryption everywhere, granular roles, full audit trail. The
              boring stuff, done properly.
            </p>
          </motion.div>
        </div>

        {/* Testimonial */}
        <motion.figure
          {...fadeUp}
          transition={{ duration: 0.6 }}
          data-testid="features-testimonial"
          className="mt-24 max-w-3xl"
        >
          <blockquote className="font-display text-2xl md:text-[2rem] leading-snug text-foreground">
            "I was skeptical — every tool promises to 'save hours.' Nexxy is the first one
            where I actually noticed my Fridays getting quiet. We killed three other
            subscriptions after month two."
          </blockquote>
          <figcaption className="mt-5 flex items-center gap-3 font-body">
            <div className="h-9 w-9 rounded-full bg-accent/15 text-accent flex items-center justify-center text-xs font-semibold">MK</div>
            <div className="text-sm">
              <span className="font-medium text-foreground">Maya Krishnan</span>
              <span className="text-muted-foreground"> — Head of Ops, Crestline</span>
            </div>
          </figcaption>
        </motion.figure>
      </div>
    </section>
  );
}
