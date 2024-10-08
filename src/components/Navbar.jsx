// remember to add function to change the style of the link clicked

import { useState } from "react";
import NavbarLink from "./NavbarLink";

export default function Navbar({ selectedLink, onSelect }) {
  return (
    <nav className="flex gap-2 fixed bottom-0 right-[25vw] mb-8">
      <ol className="flex items-center bg-[#050505] px-4 py-4 rounded-full">
        <NavbarLink
          title="home"
          onSelect={() => onSelect("home")}
          isSelected={selectedLink === "home"}
        />
        <NavbarLink
          title="about"
          onSelect={() => onSelect("about")}
          isSelected={selectedLink === "about"}
        />
        <NavbarLink
          title="work"
          onSelect={() => onSelect("work")}
          isSelected={selectedLink === "work"}
        />
        <NavbarLink
          title="resume"
          onSelect={() => onSelect("resume")}
          isSelected={selectedLink === "resume"}
        />
        <NavbarLink
          title="my art"
          onSelect={() => onSelect("my art")}
          isSelected={selectedLink === "my art"}
        />
      </ol>
      <button className="flex items-center gap-2 text-[#FAFAFF] text-sm bg-[#050505] px-6 py-1 rounded-full double-border">
        CONTACT ME <img src="./src/assets/arrow.png" />
      </button>
    </nav>
  );
}
