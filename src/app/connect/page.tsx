"use client";

import { useState } from "react";
import { AppLayout } from "@/components/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Instagram,
  Check,
  Shield,
  ArrowRight,
  AlertCircle,
  RefreshCw,
  Trash2,
  ExternalLink,
} from "lucide-react";

interface ConnectedAccount {
  id: string;
  username: string;
  followers: string;
  connectedAt: string;
  status: "active" | "expired";
}

export default function ConnectPage() {
  const [accounts, setAccounts] = useState<ConnectedAccount[]>([
    {
      id: "1",
      username: "@demo_creator",
      followers: "45.2K",
      connectedAt: "Mar 1, 2026",
      status: "active",
    },
  ]);

  const [connecting, setConnecting] = useState(false);

  const handleConnect = () => {
    setConnecting(true);
    // Simulate OAuth flow
    setTimeout(() => {
      setAccounts([
        ...accounts,
        {
          id: String(accounts.length + 1),
          username: "@new_account",
          followers: "12.8K",
          connectedAt: "Mar 5, 2026",
          status: "active",
        },
      ]);
      setConnecting(false);
    }, 2000);
  };

  const handleDisconnect = (id: string) => {
    setAccounts(accounts.filter((a) => a.id !== id));
  };

  return (
    <AppLayout>
      <div className="mx-auto max-w-3xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Connect Instagram</h1>
          <p className="text-muted-foreground">
            Link your Instagram accounts to enable AI auto-replies.
          </p>
        </div>

        {/* Connected Accounts */}
        <Card>
          <CardHeader>
            <CardTitle>Connected Accounts</CardTitle>
            <CardDescription>
              Manage your linked Instagram accounts. Pro plan supports up to 3.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {accounts.length === 0 ? (
              <div className="py-8 text-center text-muted-foreground">
                <Instagram className="mx-auto mb-3 h-12 w-12 opacity-30" />
                <p>No accounts connected yet.</p>
                <p className="text-sm">Connect your first Instagram account below.</p>
              </div>
            ) : (
              accounts.map((account) => (
                <div
                  key={account.id}
                  className="flex items-center justify-between rounded-lg border border-border/50 p-4"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
                      <Instagram className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="font-semibold">{account.username}</p>
                        <Badge
                          variant={account.status === "active" ? "default" : "destructive"}
                        >
                          {account.status === "active" ? "Active" : "Expired"}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {account.followers} followers &middot; Connected {account.connectedAt}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    {account.status === "expired" && (
                      <Button variant="outline" size="sm" className="gap-1">
                        <RefreshCw className="h-3 w-3" />
                        Reconnect
                      </Button>
                    )}
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-destructive hover:text-destructive"
                      onClick={() => handleDisconnect(account.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))
            )}

            <Separator />

            <Button
              onClick={handleConnect}
              disabled={connecting}
              className="w-full gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600"
            >
              {connecting ? (
                <>
                  <RefreshCw className="h-4 w-4 animate-spin" />
                  Connecting...
                </>
              ) : (
                <>
                  <Instagram className="h-4 w-4" />
                  Connect New Instagram Account
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </Button>
          </CardContent>
        </Card>

        {/* Security Info */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-green-500" />
              <CardTitle>Security & Privacy</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {[
              "We use official Instagram Graph API via OAuth 2.0",
              "We never store your Instagram password",
              "You can revoke access anytime from Instagram settings",
              "We only request permissions needed for comment replies",
              "All data is encrypted in transit and at rest",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <Check className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Help */}
        <Card>
          <CardContent className="flex items-start gap-3 p-4">
            <AlertCircle className="mt-0.5 h-5 w-5 shrink-0 text-muted-foreground" />
            <div>
              <p className="text-sm">
                <strong>Need help connecting?</strong> Make sure your Instagram account is a
                Business or Creator account (not personal).{" "}
                <a href="#" className="inline-flex items-center gap-1 text-primary hover:underline">
                  See guide <ExternalLink className="h-3 w-3" />
                </a>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
