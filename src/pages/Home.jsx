import { useState } from "react";
import About from "../components/About";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Marquee from "../components/Marquee";
import RecentWork from "../components/RecentWork";
import Experience from "../components/Experience";
import Contact from "../components/Contact";
import { gsap } from "gsap";

export default function Home() {
  const [selectedLink, setSelectedLink] = useState("home");
  const [mousePosition, setMousePositon] = useState({
    left: 0,
    top: 0,
  });

  function handleSelect(link) {
    setSelectedLink(link);
  }

  function handleMouseMove(ev) {
    setTimeout(() => {
      setMousePositon({
        left: (ev.pageX -= 45),
        top: (ev.pageY -= 75),
      });
    }, 150);
  }

  return (
    <>
      <main onMouseMove={(ev) => handleMouseMove(ev)} className="relative">
        <Header />
        <div className="xl:w-[70vw] md:w-[85vw] w-[90vw] h-[40vh] md:h-[50vh] lg:h-[70vh] flex items-center mb-16 mx-auto ">
          <h1 className="text-[3.5rem] sm:text-[4.5rem] md:text-[7rem] lg:text-[8rem] xl:text-[9.5rem] 2xl:text-[10rem] xl:font-bold uppercase  text-center font-[Thunder] lg:leading-[10rem] md:leading-[8rem] leading-none animate-fade-right duration-700">
            Hi, i'm <span className="text-[#66ed41]">Samuel.</span>{" "}
            <span className="video-text bg-center bg-no-repeat">Creative</span>{" "}
            Software Developer
          </h1>
        </div>
        <About />
        <Marquee />
        <RecentWork />
        <Marquee />
        <Experience />
        <Contact />
        <Navbar selectedLink={selectedLink} onSelect={handleSelect} />
        <span
          className="absolute border-[#87FF65] border-2 w-[100px] h-[100px] rounded-full hidden xl:block bg-[#1e1e1e]/10 z-[-1] "
          style={{ left: mousePosition.left, top: mousePosition.top }}
        ></span>
      </main>
    </>
  );
}
