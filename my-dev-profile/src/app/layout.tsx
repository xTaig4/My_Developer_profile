import type { Metadata } from "next";
import "./globals.css";
import { courier, departure } from "./fonts";
import Sidebar from "./components/Sidebar";
import ThemeToggle from "./components/ThemeToggle";

export const metadata: Metadata = {
  title: "Tai's Profile",
  description: "Explore Tai's professional profile, skills, and projects.",
};

// No-flash theme bootstrap: set data-theme on <html> before paint.
const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="moss"&&t!=="midnight"&&t!=="vellum"){t="moss";}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme="moss";}})();`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="moss"
      className={`${courier.variable} ${departure.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        {/* side navigation bar*/}
        <Sidebar />
        {children}
        <ThemeToggle />
        <nav></nav>
      </body>
    </html>
  );
}
