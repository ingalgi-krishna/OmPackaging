import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Om India - Innovative Technology Solutions",
  description: "Professional technology solutions and services for modern businesses. Expert consulting, development, and system integration.",
  keywords: "technology solutions, IT consulting, system integration, software development",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.variable}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}