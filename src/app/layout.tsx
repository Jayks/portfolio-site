import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import DigitalTwinChat from "@/components/DigitalTwinChat";
import AnalyticsTracker from "@/components/AnalyticsTracker";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jayakumar Sekar | Director - Data, AI & Analytics Strategy",
  description: "Portfolio of Jayakumar Sekar, 20+ years of experience integrating Data, AI & Analytics Strategy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen bg-background text-foreground selection:bg-sky-500/30 selection:text-sky-200`}
      >
        {children}
        <DigitalTwinChat />
        <AnalyticsTracker />
      </body>
    </html>
  );
}
