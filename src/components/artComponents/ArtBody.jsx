import { useState } from "react";
import Images from "./Images";

export default function ArtBody({ content, onSelectPrev, onSelectNext }) {
  let containerClass = ` w-full h-[100vh] bg-[url('${content.image}')] bg-no-repeat overflow-hidden bg-cover bg-center `;
  let centerImageClass = `w-[26rem] h-[32rem] rounded-3xl absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] rotate-[5deg] -z-[2] bg-[url('${content.image}')] bg-no-repeat overflow-hidden bg-cover bg-center  `;
  return (
    <>
      <div className={containerClass}>
        <div className="py-8 px-16 h-[100vh] w-[100vw] backdrop-blur-md bg-[#020202]/30 relative">
          {/* my logo */}
          <div className="flex items-center py-1 px-4 bg-white rounded-3xl w-fit">
            <p className="font-bold font-innerTight text-xl italic text-center ">
              {"</s>"}
            </p>
          </div>
          {/* center image */}
          <div className={centerImageClass}></div>
          {/* text and buttons */}
          <div className="flex items-center justify-evenly m-auto w-full h-full ">
            <h1 className="uppercase text-[8rem] font-[Thunder] leading-[7rem] text-white tracking-wide w-[40%] drop-shadow-lg ">
              {content.caption}
            </h1>
            <div className="inline-flex gap-6">
              <button
                className="border-2 rounded-full p-6 !h-fit !w-fit"
                onClick={onSelectPrev}
              >
                <img src="../src/assets/arrow-left.png" className="!w-full" />
              </button>
              <button
                className="border-2 rounded-full p-6 !h-fit !w-fit"
                onClick={onSelectNext}
              >
                <img src="../src/assets/arrow-right.png" className="!w-full" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
