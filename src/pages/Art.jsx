import ArtBody from "../components/artComponents/ArtBody";
import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Art() {
  const [selectedLink, setSelectedLink] = useState("my art");
  function handleSelect(link) {
    setSelectedLink(link);
  }
  return (
    <>
      <ArtBody />
      <Navbar selectedLink={selectedLink} onSelect={handleSelect} />
    </>
  );
}
