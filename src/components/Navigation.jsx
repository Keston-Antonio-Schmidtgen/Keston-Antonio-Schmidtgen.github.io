import React from "react";

export default function Navigation() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-900">
      <div className="flex items-center justify-between h-24 px-8 mx-auto max-w-7xl">
        <a
          href="#_"
          className="relative z-10 flex items-center w-auto text-2xl font-extrabold leading-none text-white select-none hover:text-green-200"
        >
          Keston Antonio Schmidtgen
        </a>
        <nav className="items-center justify-center hidden space-x-8 font-light text-gray-200 md:flex">
          <a
            href="#_"
            className="relative inline-block text-base text-gray-400 transition duration-150 ease hover:text-green-200"
          >
            <span className="block">About Me</span>
          </a>
          <a
            href="#_"
            className="relative inline-block text-base text-gray-400 transition duration-150 ease hover:text-green-200"
          >
            <span className="block">Experience</span>
          </a>
          <a
            href="#_"
            className="relative inline-block text-base text-gray-400 transition duration-150 ease hover:text-green-200"
          >
            <span className="block">Project</span>
          </a>
          <a
            href="#_"
            className="relative inline-block text-base text-gray-400 transition duration-150 ease hover:text-green-200"
          >
            <span className="block">Contact</span>
          </a>
        </nav>
      </div>
    </section>
  );
}
