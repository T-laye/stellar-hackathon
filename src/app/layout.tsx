import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const interSans = Inter({
  variable: "--font-inter-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stellar Hackathon",
  description: "Join the Stellar Hackathon and build the future of finance with us! Whether you're a developer, designer, or product manager, this is your chance to create innovative solutions on the Stellar blockchain. Apply now and be part of a vibrant community shaping the future of finance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${interSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
