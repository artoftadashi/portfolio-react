export default function RecentWorksCard({
  image,
  title,
  description,
  isLarge,
}) {
  let imgStyle = "rounded-3xl h-[35rem]";

  return (
    <div className="flex flex-col mb-16">
      <img src={image} className={imgStyle} />
      <h3 className="text-[#fafaff] font-innerTight font-light text-2xl mt-8">
        {title}
      </h3>
      <p className="uppercase text-[#fafaff] font-innerTight font-extralight text-sm mt-2">
        {description}
      </p>
    </div>
  );
}
