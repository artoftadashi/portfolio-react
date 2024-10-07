// remember to add function to change the style of the link clicked

export default function Navbar({ isSelected }) {
  let linkStyle =
    "text-[#FAFAFF] text-sm px-6 py-2 rounded-full hover:bg-[#1E1E1E] duration-300 ";
  return (
    <nav className="flex gap-2 fixed bottom-0 right-[25vw] mb-8">
      <ol className="flex items-center bg-[#050505] px-4 py-4 rounded-full">
        <li>
          <a href="" className={linkStyle + "bg-[#1E1E1E]"}>
            HOME
          </a>
        </li>
        <li>
          <a href="" className={linkStyle}>
            ABOUT
          </a>
        </li>
        <li>
          <a href="" className={linkStyle}>
            WORK
          </a>
        </li>
        <li>
          <a href="" className={linkStyle}>
            RESUME
          </a>
        </li>
        <li>
          <a href="" className={linkStyle}>
            MY ART
          </a>
        </li>
      </ol>
      <button className="flex items-center gap-2 text-[#FAFAFF] text-sm bg-[#050505] px-6 py-1 rounded-full double-border">
        CONTACT ME <img src="./src/assets/arrow.png" />
      </button>
    </nav>
  );
}
