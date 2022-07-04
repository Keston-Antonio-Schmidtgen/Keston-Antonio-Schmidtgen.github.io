import React from "react";

export default function Experience() {
  return (
    <section class="h-auto bg-gray-900 overflow-hidden">
    <div class="max-w-6xl pt-24 lg:pt-32 pb-16 lg:pb-24 xl:px-5 px-12 relative z-20 justify-center mx-auto flex lg:flex-row flex-col items-center sm:text-center ">
        <div class="lg:w-1/2 w-full">
        <div className="px-3 text-sm font-medium py-1.5 rounded-md bg-gray-800 opacity-100 mb-10 text-gray-400" />
            <p class=""></p>
            <h1 className=" text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-50 to-gray-400">
              Experience!
            </h1>
            <p className="text-lg text-blue-300 my-7">Here is a copy of my CV</p>
        </div>
        <div class="lg:w-1/2 w-full lg:max-w-none max-w-md lg:pt-0 pt-20 mx-auto lg:pl-20">
            <img src="https://ik.imagekit.io/9l66xy6vz/CV_Image_F8kXWAnhT?ik-sdk-version=javascript-1.4.3&updatedAt=1656600197793" class="w-full h-auto" alt="" />
        </div>
    </div>
</section>
  );
}
