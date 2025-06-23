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
        <div className="fixed border-text flex flex-col items-center border-r-1 h-screen w-54 bg-sidebar">
          <div>
            <img
              className="border-1 border-text mt-10 object-cover w-54 -scale-x-100"
              src="/profile_image.jpg"
            ></img>
          </div>
          <nav className="flex flex-col items-start text-center ">
            <Link
              href="/"
              className="w-54 h-15 flex items-center justify-center border-1 text-text hover:underline border-text"
            >
              Home
            </Link>
            <Link
              href="/pages/Profile"
              className="w-54 h-15 flex items-center justify-center border-1 text-text hover:underline border-text"
            >
              Profil
            </Link>
            <Link
              href="/pages/Skills"
              className="w-54 h-15 flex items-center justify-center border-1 text-text hover:underline border-text"
            >
              Skills
            </Link>
            <Link
              href="/pages/Projects"
              className="w-54 h-15 flex items-center justify-center border-1 text-text hover:underline border-text"
            >
              Projects
            </Link>
            <Link
              href="/pages/Contact"
              className="w-54 h-15 flex items-center justify-center border-1 text-text hover:underline border-text"
            >
              Contact
            </Link>
            <div className="flex flex-row p-4 ml-6">
              <Link
                href="https://www.linkedin.com/in/tai-nguyen-452753235/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center w-20"
              >
                <img src="/linkedin.svg" alt="LinkedIn" />
              </Link>
              <Link
                href="https://github.com/xTaig4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center"
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
