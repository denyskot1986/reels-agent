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
  Check,
  Star,
  Mail,
} from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── DATA ─── */

const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#testimonials", label: "Reviews" },
];

const features = [
  { icon: Bot, title: "AI Auto-Replies", desc: "Instant, contextual responses to every comment. 24/7, no breaks." },
  { icon: Zap, title: "Boost Engagement", desc: "Algorithm loves active accounts. More replies = more reach." },
  { icon: Shield, title: "Brand-Safe", desc: "Set tone, banned topics, and style. Your brand voice, automated." },
  { icon: TrendingUp, title: "Analytics Dashboard", desc: "Track every reply, sentiment, and engagement metric in real-time." },
  { icon: MessageSquare, title: "Smart Filtering", desc: "Ignore spam, prioritize real users, escalate VIP comments." },
  { icon: Instagram, title: "1-Click Connect", desc: "Connect your Instagram in seconds via OAuth. No passwords shared." },
];

const plans = [
  {
    name: "Starter", price: "$29", period: "/mo", desc: "For creators getting started",
    features: ["1 Instagram account", "500 auto-replies/mo", "Basic tone settings", "Email support"],
    popular: false,
  },
  {
    name: "Pro", price: "$79", period: "/mo", desc: "For serious creators & brands",
    features: ["3 Instagram accounts", "Unlimited auto-replies", "Advanced voice & tone", "Priority support", "Analytics dashboard", "Banned topics filter"],
    popular: true,
  },
  {
    name: "Agency", price: "$199", period: "/mo", desc: "For agencies managing clients",
    features: ["10 Instagram accounts", "Unlimited everything", "White-label option", "API access", "Dedicated account manager", "Custom AI training"],
    popular: false,
  },
];

const testimonials = [
  { name: "Sarah K.", role: "Fashion Influencer, 230K followers", text: "Reels Agent replies to my comments faster than I ever could. My engagement went up 40% in the first week.", stars: 5 },
  { name: "Mike D.", role: "Fitness Creator, 85K followers", text: "I was spending 2 hours a day on comments. Now it's zero. The AI sounds exactly like me.", stars: 5 },
  { name: "Studio Noir", role: "Brand Agency, 12 clients", text: "We manage 12 client accounts. Reels Agent saves us 100+ hours per month. No brainer.", stars: 5 },
];

/* ─── COMPONENTS ─── */

function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-transparent">
      <motion.div
        className="h-full bg-gradient-to-r from-pink-600 via-pink-400 to-orange-400"
        style={{ width: `${progress}%` }}
        transition={{ duration: 0.05 }}
      />
    </div>
  );
}

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
      <button
        type="submit"
        className="shrink-0 flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-pink-600 to-pink-500 text-white font-medium rounded-lg hover:from-pink-500 hover:to-pink-400 hover:shadow-[0_0_30px_rgba(244,114,182,0.3)] transition-all font-mono text-sm"
      >
        <Mail className="h-4 w-4" />
        Join Waitlist
      </button>
    </form>
  );
}

/* ─── PAGE ─── */

export default function LandingPage() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navLinks.map((l) => l.href.slice(1));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0608] text-[#ede0e4]">
      <ScrollProgress />

      {/* ═══ NAVBAR ═══ */}
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-[#0a0608]/90 backdrop-blur-lg border-b border-pink-500/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="text-lg font-bold tracking-tight gradient-text font-mono">
            &lt;RA/&gt;
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => {
              const id = link.href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-xs font-mono uppercase tracking-wider transition-colors duration-200 ${
                    isActive ? "text-pink-400" : "text-pink-200/40 hover:text-pink-300"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="h-px bg-gradient-to-r from-pink-500 to-pink-300 mt-0.5"
                    />
                  )}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            {/* Desktop CTA */}
            <a
              href="#waitlist"
              className="hidden md:block text-sm px-4 py-2 rounded-lg border border-pink-500/20 hover:border-pink-400/60 hover:bg-pink-500/10 hover:shadow-[0_0_15px_rgba(244,114,182,0.15)] transition-all duration-200 font-mono text-pink-300"
            >
              Join Waitlist
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-lg border border-pink-500/20 hover:border-pink-400/40 transition-colors"
              aria-label="Toggle menu"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="w-5 h-px bg-pink-400 block"
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="w-5 h-px bg-pink-400 block"
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                transition={{ duration: 0.2 }}
                className="w-5 h-px bg-pink-400 block"
              />
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t border-pink-500/10"
            >
              <div className="px-6 py-4 flex flex-col gap-1">
                {navLinks.map((link) => {
                  const id = link.href.slice(1);
                  const isActive = activeSection === id;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setMenuOpen(false)}
                      className={`px-4 py-3 rounded-lg text-sm font-mono uppercase tracking-wider transition-all duration-200 ${
                        isActive
                          ? "text-pink-400 bg-pink-500/10 border border-pink-500/20"
                          : "text-pink-200/50 hover:text-pink-300 hover:bg-pink-500/5"
                      }`}
                    >
                      {link.label}
                    </a>
                  );
                })}
                <a
                  href="#waitlist"
                  onClick={() => setMenuOpen(false)}
                  className="mt-2 px-4 py-3 rounded-lg border border-pink-500/30 text-center text-sm font-mono text-pink-300 hover:bg-pink-500/10 transition-all"
                >
                  Join Waitlist
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* ═══ HERO ═══ */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center dot-grid overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-pink-500/8 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] bg-orange-500/6 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/5 rounded-full blur-[100px]" />

        <div className="relative z-10 text-center px-6 max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-xs uppercase tracking-[0.4em] text-pink-400/50 mb-6 font-mono"
          >
            Instagram AI Automation
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Your Comments.{" "}
            <span className="gradient-text">Answered by AI.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mx-auto mb-10 max-w-2xl text-lg text-pink-100/50 md:text-xl"
          >
            Reels Agent auto-replies to every comment on your posts and reels.
            Sounds like you. Works 24/7. Boosts engagement by up to 3x.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            id="waitlist"
            className="flex flex-col items-center gap-4"
          >
            <WaitlistForm />
            <Link href="/dashboard">
              <span className="text-xs font-mono text-pink-300/30 hover:text-pink-300 transition-colors cursor-pointer">
                See Demo Dashboard →
              </span>
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator — capsule with bouncing dot */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-pink-500/20 rounded-full flex justify-center pt-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-pink-400/60 rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* ═══ FEATURES ═══ */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-mono uppercase tracking-[0.4em] text-pink-400/40 mb-4">What you get</p>
          <h2 className="text-3xl font-bold md:text-5xl">
            Everything to{" "}
            <span className="gradient-text">automate engagement</span>
          </h2>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glow-card p-8"
            >
              <f.icon className="mb-4 h-8 w-8 text-pink-400/60" />
              <h3 className="mb-2 text-lg font-semibold text-pink-100/70">{f.title}</h3>
              <p className="text-sm text-pink-100/40 leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ HOW IT WORKS ═══ */}
      <section className="border-y border-pink-500/10 py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-mono uppercase tracking-[0.4em] text-pink-400/40 mb-4">How it works</p>
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
                <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-pink-500/20 bg-pink-500/5 text-lg font-bold font-mono text-pink-400">
                  {s.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-pink-100/70">{s.title}</h3>
                <p className="text-sm text-pink-100/40">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TESTIMONIALS ═══ */}
      <section id="testimonials" className="mx-auto max-w-6xl px-6 py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="text-xs font-mono uppercase tracking-[0.4em] text-pink-400/40 mb-4">Testimonials</p>
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
              className="glow-card p-8"
            >
              <div className="mb-3 flex gap-1">
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-pink-400 text-pink-400" />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-pink-100/50">&ldquo;{t.text}&rdquo;</p>
              <div>
                <p className="text-sm font-semibold text-pink-100/70">{t.name}</p>
                <p className="text-xs text-pink-300/30 font-mono">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ═══ PRICING ═══ */}
      <section id="pricing" className="border-t border-pink-500/10 py-32">
        <div className="mx-auto max-w-6xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xs font-mono uppercase tracking-[0.4em] text-pink-400/40 mb-4">Pricing</p>
            <h2 className="mb-4 text-3xl font-bold md:text-5xl">
              Simple pricing. <span className="gradient-text">No surprises.</span>
            </h2>
            <div className="flex justify-center mb-4">
              <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full border border-pink-500/20 bg-pink-500/5 text-pink-300/50">
                Coming Soon
              </span>
            </div>
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
                className={`glow-card p-8 relative ${p.popular ? "border-pink-400/40 shadow-[0_0_25px_rgba(244,114,182,0.1)]" : ""}`}
              >
                {p.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-pink-600 to-pink-500 text-white">
                    Most Popular
                  </span>
                )}
                <h3 className="mb-1 text-lg font-semibold text-pink-100/70">{p.name}</h3>
                <p className="mb-4 text-xs text-pink-300/30 font-mono">{p.desc}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-[#ede0e4]">{p.price}</span>
                  <span className="text-pink-300/40 font-mono">{p.period}</span>
                </div>
                <ul className="mb-6 space-y-2">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-pink-100/50">
                      <Check className="h-4 w-4 text-pink-400/50" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#waitlist">
                  {p.popular ? (
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-pink-600 to-pink-500 text-white font-medium rounded-lg hover:from-pink-500 hover:to-pink-400 hover:shadow-[0_0_30px_rgba(244,114,182,0.3)] transition-all font-mono text-sm">
                      Join Waitlist
                    </button>
                  ) : (
                    <button className="w-full px-6 py-3 border border-pink-500/20 rounded-lg hover:border-pink-400/50 hover:bg-pink-500/5 transition-all text-pink-200 font-mono text-sm">
                      Join Waitlist
                    </button>
                  )}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ FINAL CTA ═══ */}
      <section className="py-32 dot-grid relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-pink-500/[0.06] rounded-full blur-[120px]" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative z-10 mx-auto max-w-2xl px-6 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold md:text-5xl">
            Ready to <span className="gradient-text">automate</span>?
          </h2>
          <p className="mb-8 text-pink-100/50">Join 2,000+ creators on the waitlist.</p>
          <WaitlistForm className="mx-auto justify-center" />
        </motion.div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="border-t border-pink-500/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <span className="text-xs text-pink-300/20 font-mono">
            &copy; {new Date().getFullYear()} Reels Agent by Finekot
          </span>
          <div className="flex gap-6 text-xs text-pink-300/20 font-mono">
            <a href="#" className="hover:text-pink-300 transition">Privacy</a>
            <a href="#" className="hover:text-pink-300 transition">Terms</a>
            <a href="#" className="hover:text-pink-300 transition">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
