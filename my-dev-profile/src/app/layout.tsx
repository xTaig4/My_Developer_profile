import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tai's Profile",
  description: "Explore Tai's professional profile, skills, and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* side navigation bar*/}
        <div className="fixed top-0 bottom-0 border-text flex border-r-1 h-screen w-auto bg-sidebar">
          <nav className="flex flex-col items-start text-center space-x-4 mt-4">
            <Link
              href="/"
              className="w-full border-1 text-text hover:underline border-text"
            >
              Home
            </Link>
            <Link
              href="/pages/Profile"
              className="w-full border-1 text-text hover:underline border-text"
            >
              Profil
            </Link>
            <Link
              href="/pages/Skills"
              className="w-full border-1 text-text hover:underline border-text"
            >
              Kompentencer
            </Link>
            <Link
              href="/pages/Projects"
              className="w-full border-1 text-text hover:underline border-text"
            >
              Projekter
            </Link>
            <Link
              href="/pages/Contact"
              className="w-full border-1 text-text hover:underline border-text"
            >
              Kontakt
            </Link>
          </nav>
        </div>
        {children}
        <nav></nav>
      </body>
    </html>
  );
}
