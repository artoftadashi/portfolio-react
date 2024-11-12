import { useState, useEffect } from "react";

export default function ArtBody() {
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    // Set a timer to hide the text after the animation
    const timer = setTimeout(() => {
      setShowText(false);
    }, 6000); // Animation duration in milliseconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="hidden lg:block">
        {showText ? (
          <div className="w-screen h-screen flex justify-center items-center m-auto overflow-hidden">
            <h1 className="video-text-2 animate-scale-fade uppercase font-[Thunder] font-bold">
              Samuel
            </h1>
          </div>
        ) : (
          <div className=" animate-fade ">
            {/* actual content */}
            <h2>About Section</h2>
            <p>This is where my about section content goes.</p>
          </div>
        )}
      </div>
      <div className="block lg:hidden">
        <div className=" animate-fade ">
          {/* actual content */}
          <h2>About Section</h2>
          <p>This is where my about section content goes.</p>
        </div>
      </div>
    </>
  );
}
