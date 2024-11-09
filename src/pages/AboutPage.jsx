import Navbar from "../components/Navbar";
import AboutBody from "../components/aboutComponents/AboutBody";
import { useState } from "react";

export default function AboutPage() {
  const [selectedLink, setSelectedLink] = useState("about");
  function handleSelect(link) {
    setSelectedLink(link);
  }
  return (
    <>
      <AboutBody />
      <Navbar selectedLink={selectedLink} onSelect={handleSelect} />
    </>
  );
}
