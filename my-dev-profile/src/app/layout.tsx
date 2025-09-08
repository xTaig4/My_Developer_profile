import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "./components/Sidebar";

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
      <body>
        {/* side navigation bar*/}
        <Sidebar />
        {children}
        <nav></nav>
      </body>
    </html>
  );
}
