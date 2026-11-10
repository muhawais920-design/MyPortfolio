import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Awais Sattar | 3D Developer Portfolio",
  description:
    "Premium 3D animated developer portfolio of Muhammad Awais Sattar, Software Engineering student and aspiring software developer.",
  keywords: [
    "Muhammad Awais Sattar",
    "Software Engineer",
    "Portfolio",
    "Next.js",
    "Three.js",
    "React Three Fiber",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
