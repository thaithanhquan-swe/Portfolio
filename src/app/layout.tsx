import type { Metadata } from "next";

import "@/styles/globals.css";

import AppMotion from "@/components/motion/AppMotion";
import Background from "@/layouts/Background/Background";
import Navbar from "@/layouts/Navbar/Navbar";

export const metadata: Metadata = {
  title: {
    default: "Thái Thanh Quân | Portfolio",
    template: "%s | Thái Thanh Quân",
  },
  description:
    "Portfolio của Thái Thanh Quân — Full-stack Developer tập trung vào React, Next.js, Java và Spring Boot.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className="h-full antialiased"
    >
      <body className="relative min-h-screen overflow-x-hidden bg-black font-sans text-white">
        <Background />

        <div className="relative z-10">
          <Navbar />

          <main className="container relative">
            <AppMotion>{children}</AppMotion>
          </main>
        </div>
      </body>
    </html>
  );
}
