"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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
} from "lucide-react";
import Link from "next/link";

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
    cta: "Start Free Trial",
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
    cta: "Start Free Trial",
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
    cta: "Contact Sales",
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

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Nav */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <div className="flex items-center gap-2">
            <Bot className="h-6 w-6 text-primary" />
            <span className="text-lg font-bold">Reels Agent</span>
          </div>
          <div className="hidden items-center gap-8 md:flex">
            <a href="#features" className="text-sm text-muted-foreground hover:text-foreground transition">
              Features
            </a>
            <a href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition">
              Reviews
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/dashboard">
              <Button variant="ghost" size="sm">Log In</Button>
            </Link>
            <Link href="/pay">
              <Button size="sm">
                Get Started <ArrowRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-500/10 via-background to-background" />
        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6">
            Trusted by 2,000+ creators
          </Badge>
          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Your Instagram Comments.{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Answered by AI.
            </span>
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Reels Agent auto-replies to every comment on your posts and reels.
            Sounds like you. Works 24/7. Boosts engagement by up to 3x.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/pay">
              <Button size="lg" className="text-base px-8">
                Start 7-Day Free Trial <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/dashboard">
              <Button size="lg" variant="outline" className="text-base px-8">
                See Demo Dashboard
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-sm text-muted-foreground">
            No credit card required. Cancel anytime.
          </p>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Everything you need to automate engagement
          </h2>
          <p className="text-muted-foreground">
            Set it up once. Let AI handle the rest.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <Card key={f.title} className="border-border/50 bg-card/50 backdrop-blur">
              <CardContent className="p-6">
                <f.icon className="mb-4 h-10 w-10 text-primary" />
                <h3 className="mb-2 text-lg font-semibold">{f.title}</h3>
                <p className="text-sm text-muted-foreground">{f.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="border-y border-border/40 bg-muted/30 py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-16 text-3xl font-bold md:text-4xl">3 Steps to Autopilot</h2>
          <div className="grid gap-12 md:grid-cols-3">
            {[
              { step: "1", title: "Connect Instagram", desc: "One-click OAuth. Your password stays with you." },
              { step: "2", title: "Set Your Voice", desc: "Choose tone, style, banned topics. AI adapts to your brand." },
              { step: "3", title: "Watch It Work", desc: "AI replies instantly. You review on the dashboard." },
            ].map((s) => (
              <div key={s.step}>
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  {s.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold">{s.title}</h3>
                <p className="text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="mb-16 text-center text-3xl font-bold md:text-4xl">Loved by creators</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <Card key={t.name} className="border-border/50">
              <CardContent className="p-6">
                <div className="mb-3 flex gap-1">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                <p className="mb-4 text-sm leading-relaxed">&ldquo;{t.text}&rdquo;</p>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-border/40 bg-muted/30 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="mb-4 text-center text-3xl font-bold md:text-4xl">
            Simple pricing. No surprises.
          </h2>
          <p className="mb-16 text-center text-muted-foreground">
            Start free. Upgrade when you&apos;re ready.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <Card
                key={p.name}
                className={`relative ${p.popular ? "border-primary shadow-lg shadow-primary/10" : "border-border/50"}`}
              >
                {p.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">Most Popular</Badge>
                )}
                <CardContent className="p-6">
                  <h3 className="mb-1 text-lg font-semibold">{p.name}</h3>
                  <p className="mb-4 text-sm text-muted-foreground">{p.desc}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{p.price}</span>
                    <span className="text-muted-foreground">{p.period}</span>
                  </div>
                  <ul className="mb-6 space-y-2">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm">
                        <Check className="h-4 w-4 text-green-500" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/pay">
                    <Button className="w-full" variant={p.popular ? "default" : "outline"}>
                      {p.cta}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to automate your comments?</h2>
          <p className="mb-8 text-muted-foreground">Join 2,000+ creators who never miss a comment.</p>
          <Link href="/pay">
            <Button size="lg" className="px-8 text-base">
              Start Free Trial <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
          <div className="flex items-center gap-2">
            <Bot className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">Reels Agent &copy; {new Date().getFullYear()}</span>
          </div>
          <div className="flex gap-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-foreground transition">Privacy</a>
            <a href="#" className="hover:text-foreground transition">Terms</a>
            <a href="#" className="hover:text-foreground transition">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
