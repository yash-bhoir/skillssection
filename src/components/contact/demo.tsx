import { BackgroundBeams } from '../../utils/background-beams';

export function BackgroundBeamsDemo() {
  return (
    <div className="min-h-screen w-full bg-black relative p-6 flex flex-col items-center">
      <div className="w-full max-w-lg p-4 bg-black rounded-lg shadow-lg">
        <h1 className="text-lg md:text-3xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold">
          Get in Touch
        </h1>
        <form className="space-y-4">
          <div>
            <label
              className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="w-full p-2 rounded-lg border border-neutral-700 bg-[#1d1c20] text-neutral-100 placeholder:text-neutral-600 focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label
              className="bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 font-sans font-bold"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="w-full p-2 rounded-lg border border-neutral-700 bg-[#1d1c20] text-neutral-100 placeholder:text-neutral-600 focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-neutral-400" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              placeholder="Your Message"
              className="w-full p-2 h-32 rounded-lg border border-neutral-700 bg-[#1d1c20] text-neutral-100 placeholder:text-neutral-600 focus:ring-2 focus:ring-teal-500"
            ></textarea>
          </div>
          <div className="flex justify-center">
            <button className="p-[3px] relative">
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
              <div className="px-8 py-2 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
                Send
              </div>
            </button>
          </div>
        </form>
      </div>
      <BackgroundBeams />
    </div>
  );
}