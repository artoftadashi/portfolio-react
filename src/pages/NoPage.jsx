export default function NoPage() {
  return (
    <section className="bg-[#050505] flex flex-col justify-center items-center w-[100vw] h-[100vh] p-auto ">
      <h1 className="text-[3.5rem] sm:text-[4.5rem] md:text-[7rem] lg:text-[8rem] xl:text-[9.5rem] 2xl:text-[10rem] text-[#fafaff]  uppercase  text-center font-[Thunder] lg:leading-[10rem] md:leading-[8rem] leading-none animate-fade-right animate-duration-2000">
        Error 404: <span className="text-[#66ed41]">Page Not Found</span>
      </h1>
      <a
        href="/home"
        className="flex items-center gap-4 mt-20 group w-fit h-fit"
      >
        <p className="text-[#fafaff] lg:text-3xl text-xl sm:text-2xl font-innerTight group-hover:underline">
          Home Page
        </p>
        <img
          src="./arrow3.png"
          className="lg:w-12 w-8 group-hover:animate-bounce"
        />
      </a>
    </section>
  );
}
