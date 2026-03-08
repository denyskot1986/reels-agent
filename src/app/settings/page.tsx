"use client";

import { useState } from "react";
import { AppLayout } from "@/components/app-layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Save, Plus, X, MessageSquare, Shield, Sparkles } from "lucide-react";

export default function SettingsPage() {
  const [bannedTopics, setBannedTopics] = useState([
    "politics",
    "religion",
    "competitors",
    "pricing complaints",
  ]);
  const [newTopic, setNewTopic] = useState("");

  const addTopic = () => {
    if (newTopic.trim() && !bannedTopics.includes(newTopic.trim().toLowerCase())) {
      setBannedTopics([...bannedTopics, newTopic.trim().toLowerCase()]);
      setNewTopic("");
    }
  };

  const removeTopic = (topic: string) => {
    setBannedTopics(bannedTopics.filter((t) => t !== topic));
  };

  return (
    <AppLayout>
      <div className="mx-auto max-w-3xl space-y-8">
        <div>
          <h1 className="text-3xl font-bold">Voice Settings</h1>
          <p className="text-muted-foreground">Configure how AI responds to your audience.</p>
        </div>

        {/* Tone & Personality */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Sparkles className="h-5 w-5 text-primary" />
              <CardTitle>Tone & Personality</CardTitle>
            </div>
            <CardDescription>Define the voice and style of AI replies.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Primary Tone</Label>
                <Select defaultValue="friendly">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="friendly">Friendly & Warm</SelectItem>
                    <SelectItem value="professional">Professional</SelectItem>
                    <SelectItem value="casual">Casual & Fun</SelectItem>
                    <SelectItem value="provocative">Provocative & Edgy</SelectItem>
                    <SelectItem value="inspirational">Inspirational</SelectItem>
                    <SelectItem value="humorous">Humorous & Witty</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Energy Level</Label>
                <Select defaultValue="medium">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Low-key & Chill</SelectItem>
                    <SelectItem value="medium">Balanced</SelectItem>
                    <SelectItem value="high">High Energy & Excited</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Custom Instructions</Label>
              <Textarea
                placeholder="Add specific instructions for the AI. Example: 'Always mention our website link', 'Use emojis sparingly', 'Refer to followers as fam'..."
                className="min-h-24"
                defaultValue="Always be encouraging. Use 1-2 emojis per reply. Mention 'link in bio' when asked about products. Call followers 'fam'."
              />
              <p className="text-xs text-muted-foreground">
                These instructions guide every AI reply. Be specific.
              </p>
            </div>

            <div className="space-y-2">
              <Label>Example Reply Style</Label>
              <Textarea
                placeholder="Paste 3-5 example replies you've written manually so AI can learn your voice..."
                className="min-h-20"
                defaultValue={`"Omg thank you!! You're so kind 🥹"\n"Haha yesss this is the vibe! Try it and let me know 💪"\n"Great question! I actually covered this in my last post — check it out!"`}
              />
            </div>
          </CardContent>
        </Card>

        {/* Reply Behavior */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <MessageSquare className="h-5 w-5 text-primary" />
              <CardTitle>Reply Behavior</CardTitle>
            </div>
            <CardDescription>Control when and how AI responds.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Auto-reply to all comments</p>
                <p className="text-xs text-muted-foreground">AI responds to every new comment automatically</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Skip spam comments</p>
                <p className="text-xs text-muted-foreground">Auto-detect and ignore spam, bots, and link drops</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Escalate brand inquiries</p>
                <p className="text-xs text-muted-foreground">Flag verified accounts and collab requests for manual review</p>
              </div>
              <Switch defaultChecked />
            </div>
            <Separator />
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium">Reply to negative comments</p>
                <p className="text-xs text-muted-foreground">AI will respond to criticism with empathy (or skip them)</p>
              </div>
              <Switch />
            </div>
            <Separator />
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label>Max reply length</Label>
                <Select defaultValue="medium">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="short">Short (1-2 sentences)</SelectItem>
                    <SelectItem value="medium">Medium (2-3 sentences)</SelectItem>
                    <SelectItem value="long">Long (3-5 sentences)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Reply delay</Label>
                <Select defaultValue="instant">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="instant">Instant (1-5s)</SelectItem>
                    <SelectItem value="natural">Natural (30s-2min)</SelectItem>
                    <SelectItem value="slow">Slow (5-15min)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Banned Topics */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <CardTitle>Banned Topics</CardTitle>
            </div>
            <CardDescription>
              AI will never engage with comments about these topics. It will skip them silently.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Input
                placeholder="Add banned topic..."
                value={newTopic}
                onChange={(e) => setNewTopic(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addTopic()}
              />
              <Button onClick={addTopic} size="icon">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-2">
              {bannedTopics.map((topic) => (
                <Badge key={topic} variant="secondary" className="gap-1 px-3 py-1">
                  {topic}
                  <button onClick={() => removeTopic(topic)}>
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Save */}
        <div className="flex justify-end">
          <Button size="lg" className="gap-2">
            <Save className="h-4 w-4" />
            Save Settings
          </Button>
        </div>
      </div>
    </AppLayout>
  );
}
