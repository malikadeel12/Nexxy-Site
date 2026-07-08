import { motion } from "framer-motion";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

export default function Story() {
  return (
    <>
      {/* Consistency Engine */}
      <section data-testid="consistency-section" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 border-t border-border">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="lg:col-span-5">
            <p className="text-sm text-accent font-medium font-body mb-3">The Consistency Engine</p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
              Consistency Builds Trust. Trust Builds <em className="italic">Business</em>.
            </h2>
          </motion.div>
          <motion.div {...fadeUp} transition={{ duration: 0.6, delay: 0.15 }} className="lg:col-span-6 lg:col-start-7 flex items-end">
            <p className="text-muted-foreground font-body leading-relaxed text-lg">
              Most professionals don't lose opportunities because they lack skill. They lose
              them because life gets busy. A forgotten follow-up. An unanswered message. A
              delayed reply. Nexxy makes consistency effortless—helping every client feel
              remembered, valued, and supported.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy */}
      <section data-testid="philosophy-section" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            {...fadeUp}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight"
          >
            Business Is Built One <em className="italic">Conversation</em> At A Time.
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 text-primary-foreground/70 font-body leading-relaxed text-lg max-w-2xl mx-auto"
          >
            Every message. Every meeting. Every follow-up. Every promise kept. Those small
            moments shape your reputation. Technology should help you create more of
            them—not replace them. That's why Nexxy exists.
          </motion.p>
        </div>
      </section>
    </>
  );
}
