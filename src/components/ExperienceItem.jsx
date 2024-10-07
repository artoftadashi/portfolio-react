export default function ExperienceItem({ date, work }) {
  return (
    <div className="flex gap-8 my-8 items-center mx-auto justify-center">
      <p className="text-md text-[#909098] font-innerTight uppercase w-fit h-fit">
        {date}
      </p>
      <h3 className="inline align-middle uppercase text-[5rem] font-[Thunder] leading-[8rem] w-fit h-fit">
        {work}
      </h3>
    </div>
  );
}
