"use client";
import React from "react";
import ContactCard from "@/app/components/ContactCard";
import EscapeButton from "@/app/components/EscapeButton";
import { useState } from "react";

const ContactPage = () => {
  const [showCard, setShowCard] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-background text-text p-4 ml-40">
      <p className="text-4xl mb-6">
        Hope you enjoyed my profile! If you did you are very welcome to click
        the like button
      </p>
      <div className="flex flex-row gap-30">
        <button
          className="bg-button text-button-text hover:bg-emerald-600 font-bold py-2 px-4 rounded mb-6"
          onClick={() => setShowCard(!showCard)}
        >
          <img
            src="/thumbs-up.svg"
            alt="Like Button"
            className="w-10 h-8 -scale-x-100"
          />
        </button>
        <EscapeButton text="" />
      </div>
      {showCard && (
        <div className="flex flex-col items-center justify-center">
          <p className="text-2xl mb-4 text-center">
            Thank you for your Like! Feel free to contact me if you have any
            <br />
            questions, feedback or interersted in hiring me.
          </p>
          <ContactCard
            name="Tai Nguyen"
            email="dummyMail@gmail.com"
            phone="(+45) 00 00 00 00"
          />
        </div>
      )}
    </div>
  );
};

export default ContactPage;
