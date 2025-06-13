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
        <div className="fixed border-text flex items-center pb-30 border-r-1 h-screen w-30 bg-sidebar">
          <nav className="flex flex-col items-start text-center space-x-4 mt-4">
            <Link
              href="/"
              className="w-30 h-15 flex items-center justify-center border-1 text-text hover:underline border-text"
            >
              Home
            </Link>
            <Link
              href="/pages/Profile"
              className="w-30 h-15 flex items-center justify-center border-1 text-text hover:underline border-text"
            >
              Profil
            </Link>
            <Link
              href="/pages/Skills"
              className="w-30 h-15 flex items-center justify-center border-1 text-text hover:underline border-text"
            >
              Kompentencer
            </Link>
            <Link
              href="/pages/Projects"
              className="w-30 h-15 flex items-center justify-center border-1 text-text hover:underline border-text"
            >
              Projekter
            </Link>
            <Link
              href="/pages/Contact"
              className="w-30 h-15 flex items-center justify-center border-1 text-text hover:underline border-text"
            >
              Kontakt
            </Link>
            <div className="flex flex-row w-30 p-4">
              <Link
                href="https://www.linkedin.com/in/tai-nguyen-452753235/"
                target="_blank"
                rel="noopener noreferrer"
                className=" w-30 flex justify-center"
              >
                <img src="/linkedin.svg" alt="LinkedIn" />
              </Link>
              <Link
                href="https://github.com/xTaig4"
                target="_blank"
                rel="noopener noreferrer"
                className="w-30 flex justify-center"
              >
                <img src="/github.svg" alt="Github" />
              </Link>
            </div>
          </nav>
        </div>
        {children}
        <nav></nav>
      </body>
    </html>
  );
}
