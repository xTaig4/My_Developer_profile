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
        <div className="hidden fixed border-text lg:flex flex-col items-center border-r-1 h-screen w-29 bg-sidebar">
          <nav
            className="flex flex-col items-start text-center mt-25 text-font"
            style={{ fontFamily: "pixelFont" }}
          >
            <Link
              href="/"
              className="w-29 h-15 flex items-center justify-center border-1 text-text hover:underline border-text"
            >
              Home
            </Link>
            <Link
              href="/pages/Contact"
              className="w-29 h-15 flex items-center justify-center border-1 text-text hover:underline border-text"
            >
              Contact
            </Link>
            <div className="flex flex-row p-4 ">
              <Link
                href="https://www.linkedin.com/in/tai-nguyen-452753235/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex justify-center w-12"
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
