import { Modal } from "@mui/base/Modal";
// remember to make the modal for copying the email address
export default function Contact() {
  async function handleCopyLink() {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(
        "Samuelolanrewaju2004@gmail.com"
      );
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
      <h3 className=" xl:flex flex-wrap gap-3 uppercase text-[#fafaff] font-bold text-[3.5rem] sm:text-[4.5rem] md:text-[7rem] lg:text-[8rem] xl:text-[9.5rem] 2xl:text-[10rem] font-[Thunder] lg:leading-[10rem] md:leading-[8rem] leading-none w-[80%] ">
        Let’s talk more about your{" "}
        <span className="border-b-4 border-[#87FF65] text-[#87FF65] mr-8">
          project{"   "}
        </span>
        <button
          onClick={handleCopyLink}
          className="mt-8 xl:mt-2 flex items-center lg:gap-4 gap-2 text-[#050505] lg:text-2xl text-sm md:text-lg font-semibold font-innerTight bg-[#87FF65] uppercase lg:p-4 p-2 rounded-full double-border2 h-fit w-fit my-auto"
        >
          copy email address{" "}
          <img src="./copy.png" className="lg:w-12 w-8 md:w-10" />
        </button>
      </h3>
      <div className="w-full border-b border-[#909098] mt-12"></div>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4 m-auto md:gap-0 md:justify-evenly my-20 z-[2]">
        <ul className="flex items-center lg:gap-5 gap-2 ">
          <li>
            <a href="#">
              <img src="./github.svg" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./linkedin.svg" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./Mail.svg" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./instagram.svg" />
            </a>
          </li>
        </ul>
        <p className="text-[#fafaff] font-innerTight md:text-md text-[10px]">
          © SAMUEL OLANREWAJU
        </p>
      </div>
    </section>
  );
}
