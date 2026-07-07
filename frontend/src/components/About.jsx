import { motion } from "framer-motion";

const beliefs = [
  {
    num: "01",
    title: "Software should do the chasing",
    desc: "Follow-ups, reminders, data entry — if a machine can do it, a person shouldn't have to. That rule shapes every feature we ship.",
  },
  {
    num: "02",
    title: "No feature ships until we use it",
    desc: "Our own sales, support, and hiring run entirely on Nexxy. When something annoys us, it gets fixed before you ever see it.",
  },
  {
    num: "03",
    title: "Small team, opinionated product",
    desc: "We're 23 people. We say no a lot. The upside: everything in Nexxy works together, because the same people built all of it.",
  },
];

export default function About() {
  return (
    <section id="about" data-testid="about-section" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5"
          >
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
              We got tired of doing the same work <em className="italic">twice</em>
            </h2>
            <p className="mt-6 text-muted-foreground font-body leading-relaxed">
              Nexxy started in 2023 as an internal tool at a small agency. Every Friday, someone
              spent half a day copying data between a CRM, a spreadsheet, and an inbox. We
              automated that afternoon away — then our clients asked for the same thing.
            </p>
            <p className="mt-4 text-muted-foreground font-body leading-relaxed">
              Three years later, 11,482 teams run on Nexxy. Our agents have quietly handled
              over 40 million tasks. The Friday problem, as we still call it, is gone.
            </p>
            <div className="mt-8 flex items-center gap-8 font-body" data-testid="about-stat-0">
              <div>
                <div className="font-display text-3xl text-foreground">11,482</div>
                <div className="text-xs text-muted-foreground mt-1">teams on Nexxy</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="font-display text-3xl text-foreground">40M+</div>
                <div className="text-xs text-muted-foreground mt-1">tasks handled</div>
              </div>
              <div className="h-8 w-px bg-border" />
              <div>
                <div className="font-display text-3xl text-foreground">23</div>
                <div className="text-xs text-muted-foreground mt-1">of us, worldwide</div>
              </div>
            </div>
          </motion.div>

          <div className="lg:col-span-6 lg:col-start-7 space-y-10">
            {beliefs.map((b, i) => (
              <motion.div
                key={b.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                data-testid={`about-belief-${i}`}
                className="flex gap-6 border-t border-border pt-8"
              >
                <span className="font-display text-2xl text-muted-foreground/60">{b.num}</span>
                <div className="font-body">
                  <h3 className="font-semibold text-foreground">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
