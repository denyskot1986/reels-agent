"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  MessageSquare,
  Zap,
  Shield,
  TrendingUp,
  Instagram,
  Bot,
  ArrowRight,
  Check,
  Star,
  Mail,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Bot,
    title: "AI Auto-Replies",
    desc: "Instant, contextual responses to every comment. 24/7, no breaks.",
  },
  {
    icon: Zap,
    title: "Boost Engagement",
    desc: "Algorithm loves active accounts. More replies = more reach.",
  },
  {
    icon: Shield,
    title: "Brand-Safe",
    desc: "Set tone, banned topics, and style. Your brand voice, automated.",
  },
  {
    icon: TrendingUp,
    title: "Analytics Dashboard",
    desc: "Track every reply, sentiment, and engagement metric in real-time.",
  },
  {
    icon: MessageSquare,
    title: "Smart Filtering",
    desc: "Ignore spam, prioritize real users, escalate VIP comments.",
  },
  {
    icon: Instagram,
    title: "1-Click Connect",
    desc: "Connect your Instagram in seconds via OAuth. No passwords shared.",
  },
];

const plans = [
  {
    name: "Starter",
    price: "$29",
    period: "/mo",
    desc: "For creators getting started",
    features: [
      "1 Instagram account",
      "500 auto-replies/mo",
      "Basic tone settings",
      "Email support",
    ],
    cta: "Join Waitlist",
    popular: false,
  },
  {
    name: "Pro",
    price: "$79",
    period: "/mo",
    desc: "For serious creators & brands",
    features: [
      "3 Instagram accounts",
      "Unlimited auto-replies",
      "Advanced voice & tone",
      "Priority support",
      "Analytics dashboard",
      "Banned topics filter",
    ],
    cta: "Join Waitlist",
    popular: true,
  },
  {
    name: "Agency",
    price: "$199",
    period: "/mo",
    desc: "For agencies managing clients",
    features: [
      "10 Instagram accounts",
      "Unlimited everything",
      "White-label option",
      "API access",
      "Dedicated account manager",
      "Custom AI training",
    ],
    cta: "Join Waitlist",
    popular: false,
  },
];

const testimonials = [
  {
    name: "Sarah K.",
    role: "Fashion Influencer, 230K followers",
    text: "Reels Agent replies to my comments faster than I ever could. My engagement went up 40% in the first week.",
    stars: 5,
  },
  {
    name: "Mike D.",
    role: "Fitness Creator, 85K followers",
    text: "I was spending 2 hours a day on comments. Now it's zero. The AI sounds exactly like me.",
    stars: 5,
  },
  {
    name: "Studio Noir",
    role: "Brand Agency, 12 clients",
    text: "We manage 12 client accounts. Reels Agent saves us 100+ hours per month. No brainer.",
    stars: 5,
  },
];

function WaitlistForm({ className = "" }: { className?: string }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  if (submitted) {
    return (
      <div className={`flex items-center justify-center gap-2 rounded-lg border border-pink-500/30 bg-pink-500/10 px-6 py-3 ${className}`}>
        <Check className="h-5 w-5 text-pink-400" />
        <span className="text-sm font-medium text-pink-300">You&apos;re on the list! We&apos;ll notify you at launch.</span>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex w-full max-w-md gap-2 ${className}`}>
      <Input
        type="email"
        placeholder="your@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="h-11 bg-[#1a0d12] border-pink-500/20 text-pink-100 placeholder:text-pink-300/30 focus:border-pink-400/50"
      />
      <Button
        type="submit"
        size="lg"
        className="shrink-0 gap-2 bg-gradient-to-r from-pink-600 to-pink-500 text-white hover:from-pink-500 hover:to-pink-400 hover:shadow-[0_0_30px_rgba(244,114,182,0.3)] border-0"
      >
        <Mail className="h-4 w-4" />
        Join Waitlist
      </Button>
    </form>
  );
}

export default function LandingPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0608] text-[#ede0e4]">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-pink-500/10 bg-[#0a0608]/80 backdrop-blur-lg">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-pink-400" />
            <span className="text-lg font-bold font-mono">Reels Agent</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm font-mono text-pink-200/40 hover:text-pink-300 transition">
              Features
            </a>
            <a href="#pricing" className="text-sm font-mono text-pink-200/40 hover:text-pink-300 transition">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm font-mono text-pink-200/40 hover:text-pink-300 transition">
              Reviews
            </a>
          </div>
          <div className="hidden items-center gap-3 sm:flex">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm" className="text-pink-200/40 hover:text-pink-300 hover:bg-pink-500/5 font-mono">
                Demo
              </Button>
            </Link>
            <a href="#waitlist">
              <Button size="sm" className="bg-gradient-to-r from-pink-600 to-pink-500 text-white hover:from-pink-500 hover:to-pink-400 hover:shadow-[0_0_20px_rgba(244,114,182,0.3)] border-0 font-mono">
                Join Waitlist <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </a>
          </div>
          <button
            className="sm:hidden p-2 text-pink-200/40"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-pink-500/10 px-6 py-4 sm:hidden bg-[#0a0608]/95 backdrop-blur-lg"
          >
            <div className="flex flex-col gap-3">
              <a href="#features" onClick={() => setMobileOpen(false)} className="text-sm font-mono text-pink-200/40 hover:text-pink-300 transition">Features</a>
              <a href="#pricing" onClick={() => setMobileOpen(false)} className="text-sm font-mono text-pink-200/40 hover:text-pink-300 transition">Pricing</a>
              <a href="#testimonials" onClick={() => setMobileOpen(false)} className="text-sm font-mono text-pink-200/40 hover:text-pink-300 transition">Reviews</a>
              <Link href="/dashboard" className="text-sm font-mono text-pink-200/40 hover:text-pink-300 transition">Demo</Link>
              <a href="#waitlist" onClick={() => setMobileOpen(false)}>
                <Button size="sm" className="w-full bg-gradient-to-r from-pink-600 to-pink-500 text-white border-0 font-mono">
                  Join Waitlist
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16 dot-grid">
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/[0.08] rounded-full blur-[150px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-orange-500/[0.06] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/3 w-[300px] h-[300px] bg-purple-500/[0.05] rounded-full blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-pink-500/10 border border-pink-500/20 text-pink-300/60 font-mono text-xs uppercase tracking-wider hover:bg-pink-500/10">
              Trusted by 2,000+ creators
            </Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl"
          >
            Your Instagram Comments.{" "}
            <span className="gradient-text">
              Answered by AI.
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-pink-100/50 md:text-xl"
          >
            Reels Agent auto-replies to every comment on your posts and reels.
            Sounds like you. Works 24/7. Boosts engagement by up to 3x.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            id="waitlist"
            className="flex flex-col items-center gap-4"
          >
            <WaitlistForm />
            <Link href="/dashboard">
              <Button size="sm" variant="ghost" className="text-pink-300/30 hover:text-pink-300 hover:bg-pink-500/5 font-mono text-xs">
                See Demo Dashboard <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </motion.div>
          <p className="mt-4 text-sm text-pink-300/30 font-mono">
            Launching soon. Join 2,000+ on the waitlist.
          </p>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1 h-3 rounded-full bg-pink-500/30" />
        </motion.div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-pink-400/40 mb-4">What you get</p>
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Everything you need to{" "}
            <span className="gradient-text">automate engagement</span>
          </h2>
          <p className="text-pink-100/50">
            Set it up once. Let AI handle the rest.
          </p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card p-6"
            >
              <f.icon className="mb-4 h-10 w-10 text-pink-400/70" />
              <h3 className="mb-2 text-lg font-semibold text-pink-100/80">{f.title}</h3>
              <p className="text-sm text-pink-100/40">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-pink-500/10 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-pink-400/40 mb-4">How it works</p>
            <h2 className="mb-16 text-3xl font-bold md:text-5xl">
              3 Steps to <span className="gradient-text">Autopilot</span>
            </h2>
          </motion.div>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              { step: "01", title: "Connect Instagram", desc: "One-click OAuth. Your password stays with you." },
              { step: "02", title: "Set Your Voice", desc: "Choose tone, style, banned topics. AI adapts to your brand." },
              { step: "03", title: "Watch It Work", desc: "AI replies instantly. You review on the dashboard." },
            ].map((s, i) => (
              <motion.div
                key={s.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-pink-500/20 bg-pink-500/5 text-lg font-bold font-mono text-pink-400">
                  {s.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-pink-100/80">{s.title}</h3>
                <p className="text-sm text-pink-100/40">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-6xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-mono uppercase tracking-[0.3em] text-pink-400/40 mb-4">Testimonials</p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Loved by <span className="gradient-text">creators</span>
          </h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card p-6"
            >
              <div className="mb-3 flex gap-1">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-pink-400 text-pink-400" />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-pink-100/60">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="text-sm font-semibold text-pink-100/80">{t.name}</p>
                <p className="text-xs text-pink-300/30 font-mono">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-pink-500/10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xs font-mono uppercase tracking-[0.3em] text-pink-400/40 mb-4">Pricing</p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Simple pricing. <span className="gradient-text">No surprises.</span>
            </h2>
            <Badge className="mx-auto mb-4 bg-pink-500/10 border border-pink-500/20 text-pink-300/60 font-mono text-xs uppercase tracking-wider hover:bg-pink-500/10">
              Coming Soon
            </Badge>
            <p className="mb-16 text-pink-100/50">
              Join the waitlist. Be first when we launch.
            </p>
          </motion.div>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glow-card p-6 relative ${p.popular ? "border-pink-400/40 shadow-[0_0_25px_rgba(244,114,182,0.1)]" : ""}`}
              >
                {p.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-600 to-pink-500 text-white border-0 font-mono text-xs">
                    Most Popular
                  </Badge>
                )}
                <h3 className="mb-1 text-lg font-semibold text-pink-100/80">{p.name}</h3>
                <p className="mb-4 text-sm text-pink-300/30 font-mono">{p.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#ede0e4]">{p.price}</span>
                  <span className="text-pink-300/40">{p.period}</span>
                </div>
                <ul className="mb-6 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-pink-100/50">
                      <Check className="h-4 w-4 text-pink-400/60" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#waitlist">
                  <Button
                    className={`w-full font-mono ${
                      p.popular
                        ? "bg-gradient-to-r from-pink-600 to-pink-500 text-white hover:from-pink-500 hover:to-pink-400 hover:shadow-[0_0_20px_rgba(244,114,182,0.3)] border-0"
                        : "border border-pink-500/20 bg-transparent text-pink-200 hover:border-pink-400/50 hover:bg-pink-500/5"
                    }`}
                  >
                    {p.cta}
                  </Button>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 dot-grid relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-500/[0.06] rounded-full blur-[120px]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto max-w-2xl px-6 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Ready to <span className="gradient-text">automate</span> your comments?
          </h2>
          <p className="mb-8 text-pink-100/50">Join 2,000+ creators on the waitlist. Be first when we launch.</p>
          <WaitlistForm className="mx-auto justify-center" />
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="border-t border-pink-500/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-pink-400/40" />
            <span className="text-sm text-pink-300/30 font-mono">Reels Agent &copy; {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-6 text-sm text-pink-300/30 font-mono">
            <a href="#" className="hover:text-pink-300 transition">Privacy</a>
            <a href="#" className="hover:text-pink-300 transition">Terms</a>
            <a href="#" className="hover:text-pink-300 transition">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
