import React from "react";

export default function AboutMe() {
  return (
    <section className="relative w-full overflow-hidden bg-gray-900">
      <div className="relative px-8 pt-10 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between w-full md:flex-row">
          <div className="">
            <div className="px-3 text-sm font-medium py-1.5 rounded-md bg-gray-800 opacity-100 mb-10 text-gray-400" />
            <h1 className=" text-center text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-50 to-gray-400">
              About Me!
            </h1>
            <div className="text-center">
              <p className="text-lg text-gray-400 my-7">
                👋🏽 Hi, I'm Keston Antonio preferably known as Antonio.
                <br />
                <br className="hidden xl:block" />
                🎓 *Graduate at the Digital Career Institute Berlin in Web Development.
                <br />
                <br className="hidden xl:block" />
                🌇 *Lives currently in Berlin, with a passion for Frontend development.
                <br />
                <br className="hidden xl:block" />
                📚 *Previously worked in customer service as a call centre agent.
                <br />
                <br className="hidden xl:block" />
                💻 * I hope to one day work as Frontend developer.
                <br />
                <br className="hidden xl:block" />
                🏔 *In my free time, you can find me hiking, exploring nature hanging out with my friends.
                <br />
                <br className="hidden xl:block" />
                💪🏽 *My Strengths are teamwork, organized, willing to learn new skills and technologies.
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
