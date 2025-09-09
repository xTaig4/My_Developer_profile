"use client";

import React from "react";

interface ContactCardProps {
  name: string;
  email: string;
  phone: string;
}
const ContactCard: React.FC<ContactCardProps> = ({ name, email, phone }) => {
  return (
    <div className="bg-gray-700 text-white p-6 rounded-lg shadow-md w-80">
      <h1 className="text-xl font-bold mb-2">{name}</h1>
      <p className="text-gray-400 mb-1">Email: {email}</p>
      <p className="text-gray-400">Phone: {phone}</p>
    </div>
  );
};

export default ContactCard;
