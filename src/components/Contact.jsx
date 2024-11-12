import { useState } from "react";
import ContactSocials from "./ContactSocials";
// remember to make the modal for copying the email address
export default function Contact() {
  const [showMessage, setShowMessage] = useState(false);

  async function handleCopyLink() {
    if ("clipboard" in navigator) {
      return await navigator.clipboard
        .writeText("Samuelolanrewaju2004@gmail.com")
        .then(() => {
          setShowMessage(true);
          setTimeout(() => {
            setShowMessage(false);
          }, 1200);
        });
    } else {
      return document.execCommand(
        "copy",
        true,
        "Samuelolanrewaju2004@gmail.com"
      );
    }
  }

  return (
    <section className="xl:p-32 p-16 lg:p24~ bg-[#050505] rounded-t-[50px] mx-auto">
      <h3 className=" xl:flex flex-wrap gap-3 uppercase text-[#fafaff]  text-[3.5rem] sm:text-[4.5rem] md:text-[7rem] lg:text-[8rem] xl:text-[9.5rem] 2xl:text-[10rem] font-[Thunder] lg:leading-[10rem] md:leading-[8rem] leading-none w-[80%] ">
        Let’s talk more about your{" "}
        <span className="border-b-4 border-[#87FF65] text-[#87FF65] mr-8">
          project{"   "}
        </span>
        <p className="relative w-fit">
          <button
            onClick={handleCopyLink}
            className="mt-8 xl:mt-2 flex items-center lg:gap-4 gap-2 text-[#050505] lg:text-2xl text-xs md:text-lg font-semibold font-innerTight bg-[#87FF65] uppercase lg:p-4 p-2 rounded-full double-border2 h-fit w-fit my-auto hover:scale-[1.05] duration-300"
          >
            copy email address{" "}
            <img src="./copy.png" className="lg:w-12 w-8 md:w-10" />
          </button>
          {showMessage && (
            <span className="bg-[#87FF65] text-[#050505] font-medium font-innerTight text-[8px] md:text-xs rounded-bl-none rounded-2xl p-4 absolute md:-top-[64px] md:-right-[92px] -top-[52px] -right-[64px]  animate-fade-right">
              Link copied!
            </span>
          )}
        </p>
      </h3>
      <div className="w-full border-b border-[#909098] mt-12"></div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 m-auto md:gap-0 md:justify-evenly my-20 z-[2]">
        <ul className="flex items-center lg:gap-5 gap-2 ">
          <ContactSocials
            link="https://github.com/artoftadashi"
            image="./github.svg"
          />
          <ContactSocials
            link="https://www.linkedin.com/in/samuel-olanrewaju-00a8ba283/"
            image="./linkedin.svg"
          />
          <ContactSocials
            link="mailto: samuelolanrewaju2004@gmail.com"
            image="./Mail.svg"
          />
          <ContactSocials
            link="https://www.instagram.com/artoftadashi/"
            image="./instagram.svg"
          />
        </ul>
        <p className="text-[#fafaff] font-innerTight md:text-md text-[10px]">
          © SAMUEL OLANREWAJU
        </p>
      </div>
    </section>
  );
}
