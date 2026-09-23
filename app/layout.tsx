import type { Metadata } from "next";
import { Geist, Geist_Mono, Urbanist, Inter, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import FloatingChatbot from "@/components/FloatingChatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Mialo - The Intelligence Layer for Enterprise Operations",
  description: "Every enterprise generates thousands of operational moments every day. Mialo continuously transforms those moments into intelligent actions and measurable business outcomes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${urbanist.variable} ${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-black">
        <Header />
        <main className="flex-1">{children}</main>
        <FloatingChatbot />
      </body>
    </html>
  );
}
