export default function About() {
  return (
    <section className="p-12 m:p-16 lg:p-24 xl:p-32 bg-[#87FF65] rounded-t-[50px] mx-auto">
      <h3 className="uppercase font-bold text-[2rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[6rem] font-[Thunder] leading-[2.5rem] md:leading-[4rem] xl:leading-[7rem]  ">
        I use storytelling and design to build high impact pitch decks for
        leading{" "}
        <span className="border-b-4 border-[#050505]">
          brands and startups.
        </span>
      </h3>
      <p className="lg:w-[75%] mt-10 text-xl lg:text-2xl font-innerTight leading-7 lg:leading-9">
        I’m currently working with the fine folks @ Shopify, but have limited
        availibility for freelance. When I’m not designing, you can catch me
        outside exploring, hiking Colorado’s famous peaks, searching for the
        best Hefeweizens, or complaining about Domino’s pizza. That’s what being
        born and raised in Lagos, Nigeria will do to you.
      </p>
      <a
        href="#"
        className="flex items-center gap-4 mt-20 group w-fit z-[1000] "
      >
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
