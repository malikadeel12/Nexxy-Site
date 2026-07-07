import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [loading, setLoading] = useState(false);

  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill in your name, email, and message.");
      return;
    }
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, form);
      toast.success("Thanks! We'll be in touch shortly.");
      setForm({ name: "", email: "", company: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" data-testid="contact-section" className="px-6 md:px-12 lg:px-20 py-24 md:py-32 bg-secondary/40 border-t border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-accent font-medium font-body mb-3">Contact</p>
          <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-foreground">
            Let's build something <em className="italic">together</em>
          </h2>
          <p className="mt-6 text-muted-foreground font-body leading-relaxed max-w-md">
            Book a demo, ask about pricing, or just say hello. Our team typically responds
            within one business day.
          </p>
          <div className="mt-8 space-y-3 font-body text-sm">
            <p className="text-foreground font-medium">hello@nexxy.com</p>
            <p className="text-muted-foreground">Mon–Fri, 9am–6pm</p>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={submit}
          data-testid="contact-form"
          className="rounded-2xl border border-border bg-background p-8 space-y-4 font-body"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              data-testid="contact-name-input"
              placeholder="Your name"
              value={form.name}
              onChange={update("name")}
            />
            <Input
              data-testid="contact-email-input"
              type="email"
              placeholder="Work email"
              value={form.email}
              onChange={update("email")}
            />
          </div>
          <Input
            data-testid="contact-company-input"
            placeholder="Company (optional)"
            value={form.company}
            onChange={update("company")}
          />
          <Textarea
            data-testid="contact-message-input"
            placeholder="Tell us about your automation needs..."
            rows={5}
            value={form.message}
            onChange={update("message")}
          />
          <Button
            data-testid="contact-submit-button"
            type="submit"
            disabled={loading}
            className="rounded-full px-6 w-full md:w-auto text-sm font-medium"
          >
            {loading ? "Sending..." : "Send message"}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
