import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectModal({ project, onClose }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const spotlightRadius = 500;

  const handleMouseMove = (event) => {
    setMousePosition({
      x: event.clientX - spotlightRadius / 2,
      y: event.clientY - spotlightRadius / 2,
    });
  };

  if (!project) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.5)] backdrop-blur-sm flex flex-col justify-center items-center  gap-4 z-10 overflow-hidden ">
      <button onClick={onClose} className="animate-jump-in">
        <img
          src="./close-btn.svg"
          className="scale-[.7] hover:scale-[.8] duration-150"
        />
      </button>
      <motion.div
        className="bg-[#050505] p-8 md:p-16 w-4/5 lg:w-2/3 xl:w-1/2 rounded-2xl z-10 modal-content overflow-auto mb-24  "
        onMouseMove={handleMouseMove}
        style={{
          "--mouse-x": `${mousePosition.x}px`,
          "--mouse-y": `${mousePosition.y}px`,
        }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.7 }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        onClick={(e) => e.stopPropagation()} // Prevent click on modal from closing
      >
        <div className="lg:w-2/3 flex flex-col justify-center m-auto ">
          <p className="text-[#87FF65] uppercase text-center md:text-sm text-xs  font-innerTight">
            {project.description}
          </p>
          <h3 className="text-[#fafaff] uppercase text-center text-[2.5rem] md:text-[3.5rem] lg:text-[4.5rem] xl:text-[6rem] font-[Thunder] my-2 md:my-0">
            {project.title}
          </h3>
          <p className="text-white/60 font-innerTight text-center md:text-md text-xs lg:w-3/4 m-auto">
            {project.fullDescription}
          </p>
          <ul className="flex md:flex-nowrap flex-wrap md:gap-2 gap-1 justify-center mt-4">
            {project.bullets.map((content) => (
              <li className="bg-[#87FF65] py-1 md:py-2 px-2 md:px-4 rounded-3xl">
                <p className="text-[#050505] text-center md:text-sm text-xs  font-innerTight font-bold italic ">
                  {content}
                </p>
              </li>
            ))}
          </ul>
          <a
            href={project.link}
            className="flex items-center gap-4 my-6 group w-fit justify-center m-auto "
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-[#fafaff] text-lg lg:text-xl xl:text-2xl font-innerTight group-hover:underline">
              View Live Project
            </p>
            <img
              src="./btn-wt.svg"
              className="w-8 lg:w-12 group-hover:animate-bounce"
            />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
