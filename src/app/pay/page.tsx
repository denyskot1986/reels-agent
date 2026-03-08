"use client";

import { useState } from "react";
import { AppLayout } from "@/components/app-layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
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
          <h1 className="text-3xl font-bold">Get Early Access</h1>
          <p className="text-muted-foreground">
            Reels Agent is launching soon. Join the waitlist or reach out directly.
          </p>
        </div>

        {/* Waitlist */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-purple-400" />
              Join the Waitlist
            </CardTitle>
            <CardDescription>
              Be the first to get access when we launch. Early adopters get a special discount.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {waitlistDone ? (
              <div className="flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 px-6 py-4">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-green-400">
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
                  className="h-11"
                />
                <Button type="submit" className="shrink-0 gap-2">
                  <Mail className="h-4 w-4" />
                  Join
                </Button>
              </form>
            )}
          </CardContent>
        </Card>

        {/* Contact */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Send className="h-5 w-5 text-blue-400" />
              Contact Us
            </CardTitle>
            <CardDescription>
              Have questions about pricing, enterprise plans, or partnerships? Drop us a message.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {contactDone ? (
              <div className="flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 px-6 py-4">
                <Check className="h-5 w-5 text-green-500" />
                <span className="text-sm font-medium text-green-400">
                  Message sent! We&apos;ll get back to you within 24 hours.
                </span>
              </div>
            ) : (
              <form onSubmit={handleContact} className="space-y-4">
                <Input
                  type="email"
                  placeholder="your@email.com"
                  required
                />
                <Textarea
                  placeholder="Your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                />
                <Button type="submit" className="w-full gap-2">
                  <Send className="h-4 w-4" />
                  Send Message
                </Button>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
