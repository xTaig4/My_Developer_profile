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
      className={`fixed h-screen w-29 border-r-1 border-text bg-sidebar flex-col items-center 
      transition-all duration-500 transform ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
    >
      <nav
        className="text-font mt-25 flex flex-col items-start text-center"
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
        <div className="flex flex-row p-4">
          <Link
            href="https://www.linkedin.com/in/tai-nguyen-452753235/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex justify-center w-12"
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
