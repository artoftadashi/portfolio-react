export default function ArtBody({ content, onSelectPrev, onSelectNext }) {
  let containerClass = ` w-full h-[100vh] bg-no-repeat overflow-hidden bg-cover bg-center `;
  let centerImageClass = `lg:w-[26rem] lg:h-[32rem] w-[14rem] h-[18rem] sm:w-[20rem] h-[24rem] rounded-3xl absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rotate-[5deg] -z-[2] bg-no-repeat overflow-hidden bg-cover bg-center animate-fade animate-delay-[.15s]  `;
  return (
    <>
      <div
        className={containerClass}
        style={{ backgroundImage: `url(${content.image})` }}
        key={content.index}
      >
        <div className="lg:py-8 lg:px-16 px-8 py-4 h-[100vh] w-[100vw] backdrop-blur-md bg-[#020202]/40 relative">
          {/* my logo */}
          <div className="flex items-center py-1 px-4 bg-white rounded-3xl w-fit">
            <p className="font-bold font-innerTight text-md lg:text-xl sm:text-lg italic text-center ">
              {"</s>"}
            </p>
          </div>
          {/* center image */}
          <div
            className={centerImageClass}
            style={{ backgroundImage: `url(${content.image})` }}
          ></div>
          {/* text and buttons */}
          <div className="flex flex-col md:flex-row items-center justify-between py-28 md:py-0 md:justify-evenly m-auto w-full h-full ">
            <h1 className="uppercase xl:text-[8rem] lg:text-[6rem] sm:text-[3rem] text-[2.4rem] font-[Thunder] xl:leading-[7rem] lg:leading-[5rem] sm:leading-[3rem] leading-[2rem] text-white tracking-wide md:w-[30%] w-fit drop-shadow-xl animate-fade-right ">
              {content.caption}
            </h1>
            <div className="inline-flex gap-12 md:gap-6 pb-8 md:pb-0">
              <button
                className="border-2 rounded-full md:p-6 p-5 !h-fit !w-fit"
                onClick={onSelectPrev}
              >
                <img src="./arrow-left.png" />
              </button>
              <button
                className="border-2 rounded-full md:p-6 p-5 !h-fit !w-fit"
                onClick={onSelectNext}
              >
                <img src="./arrow-right.png" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
