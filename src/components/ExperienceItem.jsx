export default function ExperienceItem({ date, work }) {
  return (
    <div className="flex xl:gap-8 gap-5 my-8 items-center mx-auto justify-center">
      <p className="text-xs lg:text-md text-[#909098] font-innerTight uppercase w-fit h-fit">
        {date}
      </p>
      <h3 className="inline align-middle uppercase xl:text-[5rem] text-[1.7rem] md:text-[2.5rem] font-[Thunder] xl:leading-[8rem] w-fit h-fit">
        {work}
      </h3>
    </div>
  );
}
