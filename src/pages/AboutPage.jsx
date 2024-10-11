import Navbar from "../components/Navbar";
import { useState } from "react";

export default function AboutPage() {
  const [selectedLink, setSelectedLink] = useState("about");
  function handleSelect(link) {
    setSelectedLink(link);
  }
  return (
    <>
      <h3>About</h3>
      <Navbar selectedLink={selectedLink} onSelect={handleSelect} />
    </>
  );
}
