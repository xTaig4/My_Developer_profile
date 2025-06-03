'use client';
import React from 'react';

const ContactPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-800 text-white p-4">
      <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
      <p className="text-lg mb-6">Feel free to reach out for any inquiries or collaborations!</p>
      <form className="w-full max-w-md">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <textarea
          placeholder="Your Message"
          className="w-full p-2 mb-4 border border-gray-300 rounded h-32"
        ></textarea>
        <button
          type="submit"
          className="w-20 bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;