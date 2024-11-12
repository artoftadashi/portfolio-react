export default function About() {
  return (
    <section className="p-12 m:p-16 lg:p-24 xl:p-32 bg-[#87FF65] rounded-t-[50px] mx-auto">
      <h3 className="uppercase xl:font-bold text-[2rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[6rem] font-[Thunder] leading-[2.5rem] md:leading-[4rem] xl:leading-[7rem]  ">
        I use storytelling and design to build high impact pitch decks for
        leading{" "}
        <span className="border-b-4 border-[#050505]">
          brands and startups.
        </span>
      </h3>
      <p className="lg:w-[75%] mt-10 md:text-xl lg:text-2xl font-innerTight leading-7 lg:leading-9">
        Freelance web developer by day, digital artist by night, and a world
        traveler in spirit (even if two countries are all I've got). Grumpy when
        hungry, but there's nothing quite like the thrill of fixing a bug at
        3am. Just don't expect me to be awake long after—sleep is calling, but
        the bug must die first!
      </p>
      <a href="#" className="flex items-center gap-4 mt-20 group w-fit ">
        <p className="text-2xl lg:text-3xl font-innerTight group-hover:underline">
          Learn more
        </p>
        <img
          src="./arrow2.png"
          className="w-8 lg:w-12 group-hover:animate-bounce"
        />
      </a>
    </section>
  );
}
