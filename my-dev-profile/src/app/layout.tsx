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
        <div className="fixed top-0 bottom-0 flex h-screen w-auto bg-emerald-400">
          <nav className="flex flex-col items-start text-center space-y-4 space-x-4 mt-4">
            <Link
              href="/"
              className="w-full border-b-1 text-gray-800 hover:underline border-gray-800"
            >
              Home
            </Link>
            <Link
              href="/pages/Profile"
              className="w-full border-b-1 text-gray-800 hover:underline border-gray-800"
            >
              Profil
            </Link>
            <Link
              href="/pages/Skills"
              className="w-full border-b-1 text-gray-800 hover:underline border-gray-800"
            >
              Kompentencer
            </Link>
            <Link
              href="/pages/Projects"
              className="w-full border-b-1 text-gray-800 hover:underline border-gray-800"
            >
              Projekter
            </Link>
            <Link
              href="/pages/Contact"
              className="w-full border-b-1 text-gray-800 hover:underline border-gray-800"
            >
              Kontakt
            </Link>
            <Link
              href="/pages/Test"
              className="w-full border-b-1 text-gray-800 hover:underline border-gray-800"
            >
              Test
            </Link>
          </nav>
        </div>
        {children}
        <nav></nav>
      </body>
    </html>
  );
}
