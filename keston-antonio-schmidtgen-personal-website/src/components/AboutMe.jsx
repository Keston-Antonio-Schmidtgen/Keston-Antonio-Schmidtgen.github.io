import React from "react";

export default function AboutMe() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-900">
      <div className="relative px-8 pt-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between w-full md:flex-row">
          <div className="">
            <div className="px-3 text-sm font-medium py-1.5 rounded-md bg-gray-800 opacity-100 mb-10 text-gray-400" />
            <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-50 to-gray-400">
              About Me!
            </h1>
            <p className="text-lg text-gray-400 my-7">
              👋🏽 Hi, I'm Keston preferably known as Antonio.
              <br />
              <br className="hidden xl:block" />
              🎓 *Graduate Digital Career Institute Berlin in Web Development.
              <br />
              <br className="hidden xl:block" />
              🌇 *Lives in Berlin, with a passion for Front-end dev.
              <br />
              <br className="hidden xl:block" />
              📚 *Previously worked in customer service.
              <br />
              <br className="hidden xl:block" />
              💻 * I hope to one day work as Front-end developer.
              <br />
              <br className="hidden xl:block" />
              🏔 *In my free time, you can find me hiking or exploring nature.
              <br />
              <br className="hidden xl:block" />
              💪🏽 *My Strengths are teamwork, organized, willing to learn.
              <br />
            </p>

            <section class="h-auto bg-white overflow-hidden">
              <div class="lg:w-1/2 w-full lg:max-w-none max-w-md lg:pt-0 pt-20 mx-auto lg:pl-20">
                <img
                  src="https://cdn.devdojo.com/images/march2022/character.png"
                  class="w-full h-auto"
                  alt=""
                />
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
