import { useState } from "react";
import About from "../components/About";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Marquee from "../components/Marquee";
import RecentWork from "../components/RecentWork";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

export default function Home() {
  const [selectedLink, setSelectedLink] = useState("home");
  function handleSelect(link) {
    setSelectedLink(link);
  }

  return (
    <>
      <Header />
      <div className="w-[70vw] flex items-center mb-16 mx-auto">
        <h1 className="text-[10rem] font-bold uppercase  text-center font-[Thunder] leading-[10rem]">
          Hi, i'm samuel. Creative Software Developer
        </h1>
      </div>
      <About />
      <Marquee />
      <RecentWork />
      <Marquee />
      <Experience />
      <Contact />

      <Navbar selectedLink={selectedLink} onSelect={handleSelect} />
    </>
  );
}
