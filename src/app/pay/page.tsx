"use client";

import { useState } from "react";
import { AppLayout } from "@/components/app-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Check,
  Mail,
  Send,
  Sparkles,
} from "lucide-react";

export default function PayPage() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [waitlistDone, setWaitlistDone] = useState(false);
  const [contactDone, setContactDone] = useState(false);

  const handleWaitlist = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setWaitlistDone(true);
  };

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!message) return;
    setContactDone(true);
  };

  return (
    <AppLayout>
      <div className="mx-auto max-w-2xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-[#ede0e4]">Get Early Access</h1>
          <p className="text-pink-300/50 font-mono text-sm">
            Reels Agent is launching soon. Join the waitlist or reach out directly.
          </p>
        </div>

        {/* Waitlist */}
        <div className="glow-card p-6">
          <div className="mb-4">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-pink-100/80">
              <Sparkles className="h-5 w-5 text-pink-400" />
              Join the Waitlist
            </h2>
            <p className="text-sm text-pink-300/40 mt-1">
              Be the first to get access when we launch. Early adopters get a special discount.
            </p>
          </div>
          {waitlistDone ? (
            <div className="flex items-center gap-2 rounded-lg border border-pink-500/30 bg-pink-500/10 px-6 py-4">
              <Check className="h-5 w-5 text-pink-400" />
              <span className="text-sm font-medium text-pink-300">
                You&apos;re on the list! We&apos;ll email you when we launch.
              </span>
            </div>
          ) : (
            <form onSubmit={handleWaitlist} className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-11 bg-[#120a0e] border-pink-500/20 text-pink-100 placeholder:text-pink-300/30 focus:border-pink-400/50"
              />
              <Button
                type="submit"
                className="shrink-0 gap-2 bg-gradient-to-r from-pink-600 to-pink-500 text-white hover:from-pink-500 hover:to-pink-400 hover:shadow-[0_0_20px_rgba(244,114,182,0.3)] border-0 font-mono"
              >
                <Mail className="h-4 w-4" />
                Join
              </Button>
            </form>
          )}
        </div>

        {/* Contact */}
        <div className="glow-card p-6">
          <div className="mb-4">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-pink-100/80">
              <Send className="h-5 w-5 text-pink-400" />
              Contact Us
            </h2>
            <p className="text-sm text-pink-300/40 mt-1">
              Have questions about pricing, enterprise plans, or partnerships? Drop us a message.
            </p>
          </div>
          {contactDone ? (
            <div className="flex items-center gap-2 rounded-lg border border-pink-500/30 bg-pink-500/10 px-6 py-4">
              <Check className="h-5 w-5 text-pink-400" />
              <span className="text-sm font-medium text-pink-300">
                Message sent! We&apos;ll get back to you within 24 hours.
              </span>
            </div>
          ) : (
            <form onSubmit={handleContact} className="space-y-4">
              <Input
                type="email"
                placeholder="your@email.com"
                required
                className="bg-[#120a0e] border-pink-500/20 text-pink-100 placeholder:text-pink-300/30 focus:border-pink-400/50"
              />
              <Textarea
                placeholder="Your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={4}
                className="bg-[#120a0e] border-pink-500/20 text-pink-100 placeholder:text-pink-300/30 focus:border-pink-400/50"
              />
              <Button
                type="submit"
                className="w-full gap-2 bg-gradient-to-r from-pink-600 to-pink-500 text-white hover:from-pink-500 hover:to-pink-400 hover:shadow-[0_0_20px_rgba(244,114,182,0.3)] border-0 font-mono"
              >
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </form>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
