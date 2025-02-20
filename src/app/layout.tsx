import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { cn }from "@/utils/functions/cn";
import Navbar from "@/components/home/navbar";
import Footer from "@/components/home/footer";
import { Toaster } from "@/components/ui/sonner"
import { ClerkProvider, SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "WApprentice",
  description: "All the tools, you need to secure an Apprenticeship",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
          <link rel="icon" href="./favicon.ico" />
        </head>
        <body
          className={cn(
						"!font-default min-h-screen overflow-x-hidden bg-background text-foreground antialiased",
						geistSans.variable,
						geistMono.variable,
					)}
        >
          <Navbar />
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] bg-neutral-950" />
					<main className="relative z-0 mx-auto mt-20 w-full">{children}</main>
					<Toaster richColors position="top-right" />
					<Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
