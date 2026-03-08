import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Reels Agent — AI Auto-Responder for Instagram",
  description:
    "Automate Instagram comment replies with AI. Boost engagement, save time, grow your audience on autopilot.",
  keywords: ["instagram", "ai", "auto-reply", "comments", "reels", "engagement"],
  metadataBase: new URL("https://finekot.ai/reels-agent"),
  openGraph: {
    title: "Reels Agent — AI Auto-Responder for Instagram",
    description:
      "Auto-reply to every Instagram comment. Sounds like you. Works 24/7. Boosts engagement by up to 3x.",
    url: "https://finekot.ai/reels-agent",
    siteName: "Reels Agent",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reels Agent — AI Auto-Responder for Instagram",
    description:
      "Auto-reply to every Instagram comment. Sounds like you. Works 24/7. Boosts engagement by up to 3x.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          defer
          data-domain="finekot.ai"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
