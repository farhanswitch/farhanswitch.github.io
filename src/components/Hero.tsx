import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex flex-row-reverse md:bg-herogray flex-wrap md:flex-column w-full min-h-[80vh]">
      <div className="flex-1 h-[25vh] md:h-[80vh] w-[100vw] md:w-auto flex md:bg-herogray">
        <p className="block m-auto">
          <span className="text_1 font-semibold bg-gradient-to-r from-bluestart to-violetend bg-clip-text text-transparent">
            Hi, my name is Muhammad Farhan
          </span>
          <span className="text_2 font-semibold bg-gradient-to-r from-bluestart to-violetend bg-clip-text text-transparent">
            I am a Front-end Web Developer
          </span>
        </p>
      </div>
      <div className="pict bg-herogray h-full w-[100vw] md:w-[65%] flex items-center justify-center ">
        <img src="/hero2.webp" alt="illustration web programmer" />
      </div>
    </section>
  );
};

export default Hero;
