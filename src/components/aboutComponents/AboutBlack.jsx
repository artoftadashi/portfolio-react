import { useState, useEffect } from "react";
import images from "./MyImages"; // Image array

export default function AboutBlack() {
  const [currentIndexes, setCurrentIndexes] = useState([0, 1, 2]);
  const [animationKeys, setAnimationKeys] = useState([0, 0, 0]); // Keys to re-trigger animation

  // Logic to update image indexes every second
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndexes((prevIndexes) => {
        const newIndexes = prevIndexes.map(
          (index) => (index + 1) % images.length
        );
        // Update animation keys to force re-render
        setAnimationKeys((prevKeys) => prevKeys.map((key, i) => key + 1));
        return newIndexes;
      });
    }, 3000);

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <section className="p-12 md:p-16 lg:p-24 xl:p-32 bg-[#050505] rounded-t-[50px] mx-auto relative">
      <div className="flex justify-center relative xl:h-[60vh] lg:h-[50vh] sm:h-[30vh] h-[20vh]">
        {/* Dynamically rendered images */}
        <img
          key={animationKeys[0]} // Re-trigger animation when the key changes
          src={images[currentIndexes[0]]}
          alt="First rotating image"
          className="w-[80vw] md:w-[70vw] lg:w-[60vw] absolute z-30 xl:-top-[15rem] sm:-top-[7rem] md:-top-[8rem] lg:-top-[10rem] -top-[6rem] animate-fade-up animate-ease-out"
        />
        <img
          key={animationKeys[1]} // Re-trigger animation when the key changes
          src={images[currentIndexes[1]]}
          alt="Second rotating image"
          className="w-[74vw] md:w-[68vw] lg:w-[56vw] absolute z-20 xl:-top-[11rem] sm:-top-[5.5rem] md:-top-[6rem] lg:-top-[7rem] -top-[4.8rem] animate-fade-up animate-ease-out"
        />
        <img
          key={animationKeys[2]} // Re-trigger animation when the key changes
          src={images[currentIndexes[2]]}
          alt="Third rotating image"
          className="w-[70vw] md:w-[66vw] lg:w-[52vw] absolute z-10 xl:-top-[7.8rem] sm:-top-[4.2rem] md:-top-[4.5rem] lg:-top-[4.5rem] -top-[3.8rem] animate-fade-down animate-ease-out"
        />
      </div>
      <h3 className="uppercase text-[2rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[6rem] font-[Thunder] leading-[2.5rem] md:leading-[4rem] xl:leading-[7rem] text-white">
        I use storytelling and design to build high-impact pitch decks for{" "}
        <span className="border-b-4 border-[#87FF65] text-[#87FF65]">
          leading brands and startups.
        </span>
      </h3>
      <div className="flex flex-col md:flex-row justify-between mt-14">
        <p className="md:w-[47%] text-sm md:text-lg lg:text-xl font-innerTight leading-7 lg:leading-9 text-white">
          I'm a web developer skilled in JavaScript, React.js, Next.js, Tailwind
          CSS, Express.js, and MongoDB, building dynamic, responsive web apps.
          I'm also a digital artist, proficient in Procreate and Photoshop,
          creating unique designs. I love problem-solving, especially fixing
          tricky bugs, and optimizing user experiences. I have a strong balance
          between front-end development and back-end solutions, with a keen eye
          for design
        </p>
        <p className="md:w-[47%] text-sm md:text-lg lg:text-xl font-innerTight leading-7 lg:leading-9 text-white">
          Freelance web developer by day, digital artist by night, and a world
          traveler in spirit (even if two countries are all I've got). Grumpy
          when hungry, but nothing beats the thrill of fixing a bug at 3am. If
          I’m not hunting bugs, I’m dropping into Apex Legends, chasing wins and
          perfecting my aim—sleep can wait!
        </p>
      </div>
      <div className="flex justify-start m-auto gap-2  md:gap-4 my-8">
        <img className="w-5 sm:w-8 lg:w-10" src="./node-16-wt.svg" />
        <img className="w-5 sm:w-8 lg:w-10" src="./react-wt.svg" />
        <img className="w-5 sm:w-8 lg:w-10" src="./nextjs-wt.svg" />
        <img className="w-5 sm:w-8 lg:w-10" src="./tailwindcss-wt.svg" />
        <img className="w-5 sm:w-8 lg:w-10" src="./photoshop-wt.svg" />
      </div>
    </section>
  );
}
