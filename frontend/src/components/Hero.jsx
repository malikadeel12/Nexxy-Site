import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import DashboardPreview from "@/components/DashboardPreview";

const VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_015952_e1deeb12-8fb7-4071-a42a-60779fc64ab6.mp4";

export default function Hero() {
  return (
    <section id="home" data-testid="hero-section" className="relative z-10 flex-1 flex flex-col items-center pt-28 md:pt-32 px-6">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={VIDEO_URL}
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="relative z-10 flex flex-col items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          data-testid="hero-eyebrow"
          className="inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-[11px] md:text-xs tracking-[0.18em] uppercase text-muted-foreground font-body mb-6"
        >
          Built for relationship-first real estate professionals
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          data-testid="hero-headline"
          className="text-center font-display text-4xl md:text-6xl lg:text-[4.5rem] leading-[1] tracking-tight text-foreground max-w-4xl"
        >
          Every Great Deal Begins With a <em className="italic">Great Relationship</em>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          data-testid="hero-highlight"
          className="mt-4 text-center font-body text-sm md:text-base font-medium text-accent"
        >
          Nurture Every Conversation. Earn More Trust. Close More Business.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          data-testid="hero-subheadline"
          className="mt-3 text-center text-base md:text-lg text-muted-foreground max-w-[680px] leading-relaxed font-body"
        >
          Real estate isn't won by the loudest marketer. It's won by the professional who
          consistently stays present, follows up thoughtfully, and builds trust over time.
          Nexxy combines AI, automation, and relationship intelligence to help you create
          meaningful client experiences—without adding more work to your day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 flex items-center gap-3"
        >
          <Button
            data-testid="hero-book-demo-button"
            className="press rounded-full px-6 py-5 text-sm font-medium font-body"
            asChild
          >
            <a href="#contact">Start Building Better Relationships</a>
          </Button>
          <Button
            data-testid="hero-play-button"
            variant="ghost"
            className="press h-11 rounded-full border-0 bg-background px-5 shadow-[0_2px_12px_rgba(0,0,0,0.08)] hover:bg-background/80 text-sm font-body font-medium"
          >
            <Play className="h-4 w-4 fill-foreground mr-2" />
            See Nexxy In Action
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-8 w-full max-w-5xl -mb-64 md:-mb-80 relative z-10"
        >
          <div
            className="rounded-2xl overflow-hidden p-3 md:p-4"
            style={{
              background: "rgba(255, 255, 255, 0.4)",
              border: "1px solid rgba(255, 255, 255, 0.5)",
              boxShadow: "var(--shadow-dashboard)",
            }}
          >
            <DashboardPreview />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
