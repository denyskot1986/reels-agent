"use client";

import { useState } from "react";
import { AppLayout } from "@/components/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import {
  Check,
  CreditCard,
  Bitcoin,
  ArrowRight,
  Shield,
  Copy,
  ExternalLink,
  Clock,
} from "lucide-react";

const plans = [
  {
    id: "starter",
    name: "Starter",
    price: 29,
    period: "mo",
    features: ["1 Instagram account", "500 auto-replies/mo", "Basic tone settings", "Email support"],
  },
  {
    id: "pro",
    name: "Pro",
    price: 79,
    period: "mo",
    popular: true,
    features: [
      "3 Instagram accounts",
      "Unlimited auto-replies",
      "Advanced voice & tone",
      "Priority support",
      "Analytics dashboard",
      "Banned topics filter",
    ],
  },
  {
    id: "agency",
    name: "Agency",
    price: 199,
    period: "mo",
    features: [
      "10 Instagram accounts",
      "Unlimited everything",
      "White-label option",
      "API access",
      "Dedicated manager",
      "Custom AI training",
    ],
  },
];

const cryptoOptions = [
  { name: "Bitcoin", symbol: "BTC", icon: "B", address: "Contact us for BTC payment details" },
  { name: "USDT (TRC20)", symbol: "USDT", icon: "T", address: "Contact us for USDT payment details" },
];

export default function PayPage() {
  const [selectedPlan, setSelectedPlan] = useState("pro");
  const [copied, setCopied] = useState<string | null>(null);

  const plan = plans.find((p) => p.id === selectedPlan)!;

  const copyAddress = (symbol: string, address: string) => {
    navigator.clipboard.writeText(address);
    setCopied(symbol);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <AppLayout>
      <div className="mx-auto max-w-4xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Billing & Payment</h1>
          <p className="text-muted-foreground">Choose your plan and payment method.</p>
        </div>

        {/* Plan Selection */}
        <div className="grid gap-4 md:grid-cols-3">
          {plans.map((p) => (
            <Card
              key={p.id}
              className={`relative cursor-pointer transition-all ${
                selectedPlan === p.id
                  ? "border-primary shadow-lg shadow-primary/10"
                  : "border-border/50 hover:border-border"
              }`}
              onClick={() => setSelectedPlan(p.id)}
            >
              {p.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2">
                  Most Popular
                </Badge>
              )}
              <CardContent className="p-5">
                <h3 className="text-lg font-semibold">{p.name}</h3>
                <div className="mt-2 mb-4">
                  <span className="text-3xl font-bold">${p.price}</span>
                  <span className="text-muted-foreground">/{p.period}</span>
                </div>
                <ul className="space-y-1.5">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <Check className="h-3.5 w-3.5 text-green-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Payment Method */}
        <Tabs defaultValue="card">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="card" className="gap-2">
              <CreditCard className="h-4 w-4" />
              Card / Stripe
            </TabsTrigger>
            <TabsTrigger value="crypto" className="gap-2">
              <Bitcoin className="h-4 w-4" />
              Crypto
            </TabsTrigger>
          </TabsList>

          {/* Card Payment */}
          <TabsContent value="card">
            <Card>
              <CardHeader>
                <CardTitle>Pay with Card</CardTitle>
                <CardDescription>
                  Secure payment via Stripe. {plan.name} plan — ${plan.price}/mo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full gap-2" size="lg">
                  <CreditCard className="h-4 w-4" />
                  Pay ${plan.price}/mo with Stripe
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                  <Shield className="h-3 w-3" />
                  Secured by Stripe. 256-bit SSL encryption.
                </div>
                <Separator />
                <div className="text-center text-sm text-muted-foreground">
                  7-day free trial included. Cancel anytime.
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Crypto Payment */}
          <TabsContent value="crypto">
            <Card>
              <CardHeader>
                <CardTitle>Pay with Crypto</CardTitle>
                <CardDescription>
                  Send exact amount to the address below. {plan.name} plan — ${plan.price}/mo
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {cryptoOptions.map((c) => (
                  <div key={c.symbol} className="rounded-lg border border-border/50 p-4">
                    <div className="mb-3 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-bold text-primary">
                          {c.icon}
                        </div>
                        <div>
                          <p className="font-semibold">{c.name}</p>
                          <p className="text-xs text-muted-foreground">{c.symbol}</p>
                        </div>
                      </div>
                      <Badge variant="outline">${plan.price} USD</Badge>
                    </div>
                    <div className="flex items-center gap-2">
                      <code className="flex-1 truncate rounded bg-muted px-3 py-2 text-xs">
                        {c.address}
                      </code>
                      <Button
                        variant="outline"
                        size="sm"
                        className="gap-1 shrink-0"
                        onClick={() => copyAddress(c.symbol, c.address)}
                      >
                        {copied === c.symbol ? (
                          <>
                            <Check className="h-3 w-3" />
                            Copied
                          </>
                        ) : (
                          <>
                            <Copy className="h-3 w-3" />
                            Copy
                          </>
                        )}
                      </Button>
                    </div>
                  </div>
                ))}

                <Separator />

                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <Clock className="mt-0.5 h-4 w-4 shrink-0" />
                    <p>Payment is confirmed after 1 network confirmation (usually 10-30 min).</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <Shield className="mt-0.5 h-4 w-4 shrink-0" />
                    <p>After payment, send TX hash to support for instant activation.</p>
                  </div>
                </div>

                <Button variant="outline" className="w-full gap-2">
                  I&apos;ve sent the payment — verify
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
