"use client";

import { AppLayout } from "@/components/app-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MessageSquare,
  Bot,
  TrendingUp,
  Clock,
  Search,
  Filter,
  ThumbsUp,
  ThumbsDown,
  Eye,
} from "lucide-react";

const stats = [
  { label: "Total Comments", value: "1,247", icon: MessageSquare, change: "+12% this week" },
  { label: "AI Replies Sent", value: "1,189", icon: Bot, change: "95.3% response rate" },
  { label: "Engagement Rate", value: "4.7%", icon: TrendingUp, change: "+0.8% vs last week" },
  { label: "Avg Response Time", value: "< 3s", icon: Clock, change: "Instant replies" },
];

const comments = [
  {
    id: 1,
    post: "Morning routine reel",
    author: "@fitness_jane",
    comment: "This is amazing! What protein do you use?",
    aiReply: "Thanks so much! I use whey isolate from MyProtein - the chocolate flavor is unreal. Link in bio!",
    sentiment: "positive",
    status: "replied",
    time: "2 min ago",
  },
  {
    id: 2,
    post: "Morning routine reel",
    author: "@gym_bro_99",
    comment: "How many sets do you do for chest?",
    aiReply: "Usually 4 sets of 8-12 reps! I posted a full chest workout breakdown last week - check it out!",
    sentiment: "neutral",
    status: "replied",
    time: "5 min ago",
  },
  {
    id: 3,
    post: "Recipe reel",
    author: "@foodie_maria",
    comment: "Can you make this without eggs?",
    aiReply: "Absolutely! You can substitute with flax eggs (1 tbsp ground flax + 3 tbsp water per egg). Works perfectly!",
    sentiment: "neutral",
    status: "replied",
    time: "12 min ago",
  },
  {
    id: 4,
    post: "Recipe reel",
    author: "@troll_2024",
    comment: "This looks disgusting lol",
    aiReply: "",
    sentiment: "negative",
    status: "skipped",
    time: "15 min ago",
  },
  {
    id: 5,
    post: "Travel reel",
    author: "@wanderlust_kate",
    comment: "WHERE IS THIS?! I need to go!!",
    aiReply: "It's Positano, Italy! Best time to visit is September - less crowds, perfect weather. I have a full travel guide saved in highlights!",
    sentiment: "positive",
    status: "replied",
    time: "23 min ago",
  },
  {
    id: 6,
    post: "Travel reel",
    author: "@verified_brand",
    comment: "Love this! DM us for a collab?",
    aiReply: "",
    sentiment: "positive",
    status: "escalated",
    time: "30 min ago",
  },
  {
    id: 7,
    post: "OOTD reel",
    author: "@style_queen",
    comment: "What size are you wearing?",
    aiReply: "I'm wearing a size S! The brand runs true to size. Use code REELS10 for 10% off!",
    sentiment: "neutral",
    status: "replied",
    time: "45 min ago",
  },
  {
    id: 8,
    post: "OOTD reel",
    author: "@spam_bot_123",
    comment: "FREE FOLLOWERS click here!!!",
    aiReply: "",
    sentiment: "negative",
    status: "spam",
    time: "48 min ago",
  },
];

function StatusBadge({ status }: { status: string }) {
  const variants: Record<string, { label: string; variant: "default" | "secondary" | "outline" | "destructive" }> = {
    replied: { label: "Replied", variant: "default" },
    skipped: { label: "Skipped", variant: "secondary" },
    escalated: { label: "Escalated", variant: "outline" },
    spam: { label: "Spam", variant: "destructive" },
  };
  const v = variants[status] || { label: status, variant: "secondary" as const };
  return <Badge variant={v.variant}>{v.label}</Badge>;
}

function SentimentIcon({ sentiment }: { sentiment: string }) {
  if (sentiment === "positive") return <ThumbsUp className="h-4 w-4 text-green-500" />;
  if (sentiment === "negative") return <ThumbsDown className="h-4 w-4 text-red-500" />;
  return <span className="text-muted-foreground">--</span>;
}

export default function DashboardPage() {
  return (
    <AppLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">Monitor AI replies across all your posts.</p>
        </div>

        {/* Stats */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <Card key={s.label}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                  <s.icon className="h-5 w-5 text-muted-foreground" />
                </div>
                <p className="mt-2 text-3xl font-bold">{s.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{s.change}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Filters */}
        <Card>
          <CardHeader>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <CardTitle>Recent Comments & AI Replies</CardTitle>
              <div className="flex gap-2">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Search comments..." className="pl-9 w-60" />
                </div>
                <Select defaultValue="all">
                  <SelectTrigger className="w-36">
                    <Filter className="mr-2 h-4 w-4" />
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All</SelectItem>
                    <SelectItem value="replied">Replied</SelectItem>
                    <SelectItem value="skipped">Skipped</SelectItem>
                    <SelectItem value="escalated">Escalated</SelectItem>
                    <SelectItem value="spam">Spam</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-36">Post</TableHead>
                  <TableHead className="w-32">Author</TableHead>
                  <TableHead>Comment</TableHead>
                  <TableHead>AI Reply</TableHead>
                  <TableHead className="w-16 text-center">Tone</TableHead>
                  <TableHead className="w-24">Status</TableHead>
                  <TableHead className="w-24">Time</TableHead>
                  <TableHead className="w-12"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {comments.map((c) => (
                  <TableRow key={c.id}>
                    <TableCell className="text-sm font-medium">{c.post}</TableCell>
                    <TableCell className="text-sm text-muted-foreground">{c.author}</TableCell>
                    <TableCell className="max-w-48 truncate text-sm">{c.comment}</TableCell>
                    <TableCell className="max-w-48 truncate text-sm text-muted-foreground">
                      {c.aiReply || <span className="italic">No reply</span>}
                    </TableCell>
                    <TableCell className="text-center">
                      <SentimentIcon sentiment={c.sentiment} />
                    </TableCell>
                    <TableCell>
                      <StatusBadge status={c.status} />
                    </TableCell>
                    <TableCell className="text-xs text-muted-foreground">{c.time}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="icon" className="h-8 w-8">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </AppLayout>
  );
}
