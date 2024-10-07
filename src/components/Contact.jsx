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
    <section className="p-32 bg-[#050505] rounded-t-[50px] mx-auto">
      <h3 className="flex flex-wrap gap-3 uppercase text-[#fafaff] font-bold text-[10rem] font-[Thunder] leading-[10rem] w-[80%] ">
        Let’s talk more about your{" "}
        <span className="border-b-4 border-[#87FF65] text-[#87FF65] mr-8">
          project{"   "}
        </span>
        <button
          onClick={handleCopyLink}
          className="flex items-center gap-4 text-[#050505] text-2xl font-semibold font-innerTight bg-[#87FF65] uppercase p-4 rounded-full double-border2 h-fit my-auto"
        >
          copy email address{" "}
          <img src="./src/assets/copy.png" className="w-12" />
        </button>
      </h3>
    </section>
  );
}
