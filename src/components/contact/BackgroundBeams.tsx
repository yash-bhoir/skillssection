import React, { useState } from "react";
import { BackgroundBeams } from "../../utils/background-beams";

const BackgroundBeamsDemo: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    message: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmittedData({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen w-full bg-black relative p-6 flex flex-col items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-black p-8 rounded-lg shadow-lg mb-8 z-10"
      >
        <h1 className="text-lg md:text-3xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          Get in Touch
        </h1>{" "}
        <div className="mb-4">
          <label
            htmlFor="name"
            className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-2 rounded-lg border border-neutral-700 bg-[#1d1c20] text-neutral-100 placeholder:text-neutral-600 focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded-lg border border-neutral-700 bg-[#1d1c20] text-neutral-100 placeholder:text-neutral-600 focus:ring-2 focus:ring-teal-500"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="message"
            className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold"
          >
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 rounded-lg border border-neutral-700 bg-[#1d1c20] text-neutral-100 placeholder:text-neutral-600 focus:ring-2 focus:ring-teal-500"
            rows={4}
            required
          ></textarea>
        </div>
        <div className="text-center">
          <div className="flex justify-center">
            <button className="p-[3px] relative" type="submit">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                Send
              </div>
            </button>
          </div>
        </div>
      </form>
      <BackgroundBeams />

      {submittedData && (
        <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Submitted Information
          </h2>
          <p>
            <strong>Name:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Email:</strong> {submittedData.email}
          </p>
          <p>
            <strong>Message:</strong> {submittedData.message}
          </p>
        </div>
      )}
      
    </div>
    
  );
};

export default BackgroundBeamsDemo;

