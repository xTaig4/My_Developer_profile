"use client";
import React from "react";
import ContactCard from "@/app/components/ContactCard";
import EscapeButton from "@/app/components/EscapeButton";
import { useState } from "react";

const ContactPage = () => {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-text p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg mb-6">
        So now that you seen my profile, are you interest in hiring me?
      </p>
      <div className="flex flex-row gap-38">
        <button
          className="bg-button text-button-text hover:bg-emerald-600 font-bold py-2 px-4 rounded mb-6"
          onClick={() => setShowCard(!showCard)}
        >
          Yes
        </button>
        <EscapeButton text="No" />
      </div>
      {showCard && (
        <ContactCard
          name="Tai Nguyen"
          email="dummyMail@gmail.com"
          phone="(+45) 00 00 00 00"
        />
      )}
    </div>
  );
};

export default ContactPage;
