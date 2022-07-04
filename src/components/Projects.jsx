import React from "react";

export default function Projects() {
  return (
    <section className="relative w-full py-10 bg-gray-900 bg-opacity-95 sm:py-16">
   <div class="max-w-6xl pt-24 lg:pt-32 pb-16 lg:pb-24 xl:px-5 px-12 relative z-20 justify-center mx-auto flex lg:flex-row flex-col items-center sm:text-center lg:text-left">
        <div class="lg:w-1/2 w-full">
        <div className="relative overflow-hidden ">
        <div className="px-3 text-sm font-medium py-1.5 rounded-md bg-gray-700 opacity-100 mb-10 text-gray-400" />
            <p class=""></p>
            <h1 className=" text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-50 to-gray-400">
              Projects!
            </h1>
         <br />
        </div>
        <div className="flex items-center py-5 border-b border-gray-900 ">
          <a className="w-1/3 h-40 overflow-hidden" href="_#">
            <img className="w-full h-auto transition duration-300 ease-out transform scale-100 bg-cover hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-img-5.jpg" alt="" />
          </a>
          <div className="w-2/3 pl-5">
            <h2 className="relative mb-3 text-xl font-bold leading-tight text-white"><a href="#_" className>Consoles We Could Have Done Without</a></h2>
            <p className="text-sm text-white opacity-50">It's no doubt that in an industry of so much competition, there are going to be some failures. Here are the top failed consoles.</p>
            <span className="relative flex mt-3 text-xs text-white opacity-90">
              <span className="mr-1 font-semibold">Bob Jenkins</span>·<span className="ml-1">October 29, 2021</span>
            </span>
          </div>
        </div>
        <div className="flex items-center py-5 border-b border-gray-900">
          <a className="w-1/3 h-40 overflow-hidden" href="_#">
            <img className="w-full h-auto transition duration-300 ease-out transform scale-100 bg-cover hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-img-6.jpg" alt="" />
          </a>
          <div className="w-2/3 pl-5">
            <h2 className="relative mb-3 text-xl font-bold leading-tight text-white"><a href="#_">VR Gaming That We Love</a></h2>
            <p className="text-sm text-white opacity-50">VR has come a long way and there are a few leaders in the industry. In this article we'll talk about those elites.</p>
            <span className="relative flex mt-3 text-xs text-white opacity-90">
              <span className="mr-1 font-semibold">Bob Jenkins</span>·<span className="ml-1">October 29, 2021</span>
            </span>
          </div>
        </div>
        <div className="flex items-center py-5 border-b border-gray-900">
          <a className="w-1/3 h-40 overflow-hidden" href="_#">
            <img className="w-full h-auto transition duration-300 ease-out transform scale-100 bg-cover hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-img-7.jpg" alt=""/>
          </a>
          <div className="w-2/3 pl-5">
            <h2 className="relative mb-3 text-xl font-bold leading-tight text-white"><a href="#_">Must-have Games for Xbox</a></h2>
            <p className="text-sm text-white opacity-50">We've gathered up a list of the top games ever released for the Xbox. There are some amazing games that have passed throughout the years. See if your favorite are in the list.</p>
            <span className="relative flex mt-3 text-xs text-white opacity-90">
              <span className="mr-1 font-semibold">Bob Jenkins</span>·<span className="ml-1">October 29, 2021</span>
            </span>
          </div>
        </div>
        <div className="flex items-center py-5 border-b border-gray-900">
          <a className="w-1/3 h-40 overflow-hidden" href="_#">
            <img className="w-full h-auto transition duration-300 ease-out transform scale-100 bg-cover hover:scale-105" src="https://cdn.devdojo.com/images/may2021/blog-img-8.jpg" alt=""/>
          </a>
          <div className="w-2/3 pl-5">
            <h2 className="relative mb-3 text-xl font-bold leading-tight text-white"><a href="#_">The Arcade Industry Making a Comeback</a></h2>
            <p className="text-sm text-white opacity-50">The arcade industry may be making a huge comeback soon. As trends have been showing the desire for community based gaming is on the rise.</p>
            <span className="relative flex mt-3 text-xs text-white opacity-90">
              <span className="mr-1 font-semibold">Carl Roberts</span>·<span className="ml-1">October 29, 2021</span>
            </span>
          </div>
        </div>
      </div>
        <div className="flex items-center mt-7">
          <a href="#_" className="text-white transition duration-300 ease-out opacity-40 hover:opacity-80">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
          </a>
          <a href="#_" className="text-white transition duration-300 ease-out opacity-40 hover:opacity-80">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
</section>

  );
}
