import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <section className="lg:p-32 p-12 sm:p-16 mx-auto">
      <h3 className="uppercase xl:font-bold text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[7rem] font-[Thunder] leading-[3rem] lg:leading-[6rem] xl:leading-[8rem] ">
        I BUILD COOL WEBSITES THAT CAN{" "}
        <span className="border-b-4 border-[#050505]">
          LEVEL UP YOUR ONLINE PRESENCE.
        </span>
      </h3>
      <div className="border-b-4 border-[#050505] w-full mt-16 lg:mt-24 xl:mt-32"></div>
      <ExperienceItem
        date="jan 2020 - present"
        work="Freelance Web Developer"
      />
      <div className="border-b-4 border-[#050505] w-full "></div>
      <ExperienceItem
        date="jul 2023 - nov 2023"
        work="Digital artist - the plain shop"
      />
      <div className="border-b-4 border-[#050505] w-full "></div>
      <ExperienceItem
        date="jul 2022 - nov 2022"
        work="Airfreight operations assistant"
      />
      <div className="border-b-4 border-[#050505] w-full xl:mb-32 mb-16 lg:mb-24"></div>
      <a
        href="./cv/Samuel_Olanrwaju_CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-4 mt-20 group w-fit m-auto"
      >
        <p className="lg:text-3xl text-xl sm:text-2xl font-innerTight group-hover:underline">
          Learn more
        </p>
        <img
          src="./arrow3.png"
          className="lg:w-12 w-8 group-hover:animate-bounce"
        />
      </a>
    </section>
  );
}
