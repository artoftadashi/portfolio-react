import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Art() {
  const [selectedLink, setSelectedLink] = useState("my art");
  function handleSelect(link) {
    setSelectedLink(link);
  }
  return (
    <>
      <h3>Art</h3>
      <Navbar selectedLink={selectedLink} onSelect={handleSelect} />
    </>
  );
}
