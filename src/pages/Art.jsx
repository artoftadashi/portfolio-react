import ArtBody from "../components/artComponents/ArtBody";
import Navbar from "../components/Navbar";
import Images from "../components/artComponents/Images";
import { useState, useEffect } from "react";

export default function Art() {
  const captions = [
    "first caption",
    "second caption",
    "third caption",
    "fourth caption",
    "fifth caption",
    "sixth caption",
    "seventh caption",
    "eighth caption",
    "nineth caption",
    "tenth caption",
    "eleventh caption",
    "twelfth caption",
    "thirteenth caption",
    "fourteenth caption",
    "fifteenth caption",
    "sixteenth caption",
    "seventeenth caption",
    "eighteenth caption",
  ];
  const [count, setCount] = useState(0);
  const [content, setContent] = useState({
    index: 0,
    caption: captions[0],
    image: Images[0],
  });

  function handlePrevious() {
    if (count > 0) {
      setCount((prevCount) => prevCount - 1);
    }
  }

  function handleNext() {
    if (count < captions.length - 1) {
      setCount((prevCount) => prevCount + 1);
    }
  }
  useEffect(() => {
    setContent({
      index: count,
      caption: captions[count],
      image: Images[count],
    });
  }, [count]);

  const [selectedLink, setSelectedLink] = useState("my art");
  function handleSelect(link) {
    setSelectedLink(link);
  }
  return (
    <>
      <ArtBody
        content={content}
        onSelectNext={handleNext}
        onSelectPrev={handlePrevious}
      />
      <Navbar selectedLink={selectedLink} onSelect={handleSelect} />
    </>
  );
}
