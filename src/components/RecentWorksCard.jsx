export default function RecentWorksCard({
  image,
  title,
  description,
  onClick,
}) {
  let imgStyle = "rounded-3xl lg:h-[35rem] h-[25rem]";

  return (
    <div
      className="flex flex-col mb-8 lg:mb-16 hover:scale-[1.07] duration-150 hover:cursor-pointer"
      onClick={onClick}
    >
      <img src={image} className={imgStyle} />
      <h3 className="text-[#fafaff] font-innerTight font-light text-xl md:text-2xl mt-8">
        {title}
      </h3>
      <p className="uppercase text-[#fafaff] font-innerTight font-extralight text-xs md:text-sm mt-2">
        {description}
      </p>
    </div>
  );
}
