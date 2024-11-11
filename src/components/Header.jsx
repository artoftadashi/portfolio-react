export default function Header() {
  return (
    <header className="flex items-center justify-between mt-8 mx-7 md:mx-10 lg:mx-14 mb-16 z-50 animate-flip-down animate-delay-1000 ">
      <div className="flex items-center py-1 px-4 bg-[#87FF65] rounded-3xl w-fit">
        <p className="font-bold font-innerTight text-md lg:text-xl sm:text-lg italic text-center">
          {"</s>"}
        </p>
      </div>
      <p className="uppercase flex items-center gap-2 text-[12px] sm:text-sm md:gap-3 md:text-lg">
        <span className="w-[8px] h-[8px] md:w-[15px] md:h-[15px] rounded-full bg-[rgb(254,93,38)] animate-pulse delay-300 "></span>{" "}
        Available for work
      </p>
    </header>
  );
}
