import ExperienceItem from "./ExperienceItem";

export default function Experience() {
  return (
    <section className="p-32 mx-auto">
      <h3 className="uppercase font-bold text-[7rem] font-[Thunder] leading-[8rem] ">
        I BUILD COOL WEBSITES THAT CAN{" "}
        <span className="border-b-4 border-[#050505]">
          LEVEL UP YOUR ONLINE PRESENCE.
        </span>
      </h3>
      <div className="border-b-4 border-[#050505] w-full mt-32"></div>
      <ExperienceItem
        date="jan 2020 - present"
        work="crew member - mcdonalds"
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
      <div className="border-b-4 border-[#050505] w-full mb-32"></div>
      <a href="#" className="flex items-center gap-4 mt-20 group w-fit m-auto">
        <p className="text-3xl font-innerTight group-hover:underline">
          Learn more
        </p>
        <img
          src="./src/assets/arrow3.png"
          className="w-12 group-hover:animate-bounce"
        />
      </a>
    </section>
  );
}
