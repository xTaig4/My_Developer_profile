"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Sidebar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1536) {
        setIsVisible(true); // Show sidebar on 2xl and larger screens
      } else {
        setIsVisible(false); // Hide sidebar on smaller screens
      }
    };

    // Set initial state based on current screen width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`border-text bg-sidebar fixed h-screen w-29 transform flex-col items-center border-r-1 transition-all duration-500 ${
        isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <nav
        className="text-font mt-25 flex flex-col items-start text-center"
        style={{ fontFamily: "pixelFont" }}
      >
        <Link
          href="/"
          className="text-text border-text flex h-15 w-29 items-center justify-center border-1 hover:underline"
        >
          Home
        </Link>
        <Link
          href="/pages/Contact"
          className="text-text border-text flex h-15 w-29 items-center justify-center border-1 hover:underline"
        >
          Contact
        </Link>
        <div className="flex flex-row p-4">
          <Link
            href="https://www.linkedin.com/in/tai-nguyen-452753235/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-12 justify-center"
          >
            <Image src="/linkedin.svg" alt="LinkedIn" width={40} height={32} />
          </Link>
          <Link
            href="https://github.com/xTaig4"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center"
          >
            <Image src="/github.svg" alt="Github" width={40} height={32} />
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
