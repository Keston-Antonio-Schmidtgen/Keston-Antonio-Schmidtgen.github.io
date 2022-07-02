import React from "react";

export default function ContactMe() {
  return (
    <div class="py-10 bg-white md:py-16 bg-gray-900">
    <div class="px-10 mx-auto max-w-7xl md:px-16">
        <div class="max-w-3xl mx-auto mb-10 md:mb-16">
        <div className="px-3 text-sm font-medium py-1.5 rounded-md bg-gray-800 opacity-100 mb-10 text-gray-400" />
            <p class=""></p>
            <h1 className=" text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-50 to-gray-400">
              Contact Me!
            </h1>
        </div>
        <form class="grid max-w-3xl gap-4 mx-auto sm:grid-cols-2">
            <div class="sm:col-span-2">
                <label for="email" class="inline-block mb-2 text-sm font-medium text-white sm:text-base">Email</label>
                <input name="email" class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300" />
            </div>

            <div class="sm:col-span-2">
                <label for="subject" class="inline-block mb-2 text-sm font-medium text-white sm:text-base">Subject</label>
                <input name="subject" class="w-full px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300" />
            </div>

            <div class="sm:col-span-2">
                <label for="message" class="inline-block mb-2 text-sm font-medium text-white sm:text-base">Message</label>
                <textarea name="message" class="w-full h-64 px-3 py-2 text-gray-800 transition duration-100 border rounded-md outline-none bg-gray-50 focus:ring ring-blue-300"></textarea>
            </div>

            <div class="flex items-center justify-between sm:col-span-2">
                <button class="inline-block px-8 py-3 text-sm font-semibold text-center text-white transition duration-100 bg-red-600 rounded-md outline-none hover:bg-blue-500 active:bg-blue-700 ring-blue-300 md:text-base">Send Me</button>
            </div>
        </form>
        <p class=""></p>
    </div>
</div>

  );
}
