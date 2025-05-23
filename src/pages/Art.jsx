import ArtBody from "../components/artComponents/ArtBody";
import Images from "../components/artComponents/Images";
import { useState, useEffect } from "react";

export default function Art() {
  const captions = [
    "study",
    "In the darkness",
    "Tijani: The plain shop",
    "Geisha",
    "light study",
    "cassidy: the plain shop",
    "ronin",
    "summer",
    "animal study",
    "my best friend",
    "char design",
    "photo study",
    "pose study",
    "sketch",
    "study",
    "photo study",
    "study",
    "sketch",
    "study",
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

  return (
    <>
      <ArtBody
        content={content}
        onSelectNext={handleNext}
        onSelectPrev={handlePrevious}
      />
    </>
  );
}
