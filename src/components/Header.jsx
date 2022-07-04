import React from "react";


export default function Header() {
    return (  
<section className="relative w-full overflow-hidden bg-gray-900">
  <div className="relative px-8 pt-10 mx-auto max-w-7xl">
    <div className="absolute top-0 right-0 hidden w-full h-full -ml-32 transform scale-100 translate-x-1/2 translate-y-20 bg-gray-800 md:block -rotate-12 opacity-90" />
    <div className="flex flex-col items-center justify-between w-full md:flex-row">
      <div className="">
        <div className="px-3 text-sm font-medium py-1.5 rounded-md bg-gray-800 opacity-100 mb-10 text-gray-400" />
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-50 to-gray-400">Hi!<br />I'm Antonio<br /></h1>
        <p className="text-lg text-blue-300 my-7">An aspiring Junior Frontend Developer.</p>
      </div>
      <div class="relative flex items-center justify-center w-full md:w-1/2 md:pt-0">
                <div class="absolute w-full p-12 opacity-100">
                    <img src="https://cdn.devdojo.com/images/august2021/background-patterns.png" class="" alt="" />
                </div>
                <img src="https://ik.imagekit.io/9l66xy6vz/WhatsApp_Image_2022-06-30_at_12.28.07_sfG8Wemnc.jpeg?ik-sdk-version=javascript-1.4.3&updatedAt=1656585141447" class="w-full md:w-auto w-72 max-w-md max-w-sm ml-4 md:ml-20 lg:ml-0 xl:max-w-xl relative" alt="" />
            </div>
      </div>
    </div>
  
</section>

    )
};