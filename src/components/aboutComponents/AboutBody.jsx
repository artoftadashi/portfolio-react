import Header from "../Header";
import AboutBlack from "./AboutBlack";
import Marquee from "../Marquee";
import AboutExperience from "./AboutExperience";
import Contact from "../Contact";

export default function ArtBody() {
  return (
    <>
      <Header />
      <div className="w-full h-[20vh] md:h-[40vh] lg:h-[50vh] justify-center flex items-center mb-24 mx-auto ">
        <h1 className="text-[3.5rem] sm:text-[4.5rem] md:text-[7rem] lg:text-[8rem] xl:text-[9.5rem] 2xl:text-[10rem]  uppercase  text-center font-[Thunder] lg:leading-[10rem] md:leading-[8rem] leading-none animate-fade-right animate-duration-2000">
          About me
        </h1>
      </div>
      <AboutBlack />
      <Marquee />
      <div className="bg-[#87FF65]">
        <AboutExperience />
        <Contact />
      </div>
    </>
  );
}
