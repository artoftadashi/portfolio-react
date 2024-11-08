// remember to add function to change the style of the link clicked
import NavbarLink from "./NavbarLink";

export default function Navbar({ selectedLink, onSelect }) {
  return (
    <div className="flex fixed bottom-0 right-[50%] translate-x-[50%] mb-8  w-fit duration-700">
      <ol className="flex items-center bg-[#050505]/75 backdrop-blur-md border border-[#1E1E1E] lg:p-4 p-2 rounded-full ">
        <NavbarLink
          title="home"
          onSelect={() => onSelect("home")}
          isSelected={selectedLink === "home"}
          link="/home"
        />
        <NavbarLink
          title="about"
          onSelect={() => onSelect("about")}
          isSelected={selectedLink === "about"}
          link="/about"
        />
        <NavbarLink
          title="work"
          onSelect={() => onSelect("work")}
          isSelected={selectedLink === "work"}
          link="https://github.com/artoftadashi"
        />
        <NavbarLink
          title="resume"
          onSelect={() => onSelect("resume")}
          isSelected={selectedLink === "resume"}
          link="./cv/Samuel_Olanrwaju_CV.pdf"
        />
        <NavbarLink
          title="my art"
          onSelect={() => onSelect("my art")}
          isSelected={selectedLink === "my art"}
          link="/art"
        />
      </ol>
    </div>
  );
}
