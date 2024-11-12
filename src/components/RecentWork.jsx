import RecentWorksCard from "./RecentWorksCard";
import recentWorkContent from "./RecentWorkContent";
import ProjectModal from "./ProjectModal";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

export default function RecentWork() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCardClick = (project) => {
    setSelectedProject(project); // Set the clicked project as selected
    setIsModalOpen(true); // Open the modal
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedProject(null); // Clear the selected project
  };

  return (
    <section className="bg-[#050505] px-12 md:px-16 py-16 lg:py-32 h-auto">
      <h1 className="text-[3.5rem] sm:text-[4.5rem] md:text-[7rem] lg:text-[8rem] xl:text-[9.5rem] 2xl:text-[10rem] text-[#fafaff]  uppercase  text-center font-[Thunder]">
        Recent work
      </h1>
      <ul className="flex flex-wrap justify-center gap-16 mt-16 lg:mt-32 ">
        {recentWorkContent.map((content) => (
          <li key={content.id}>
            <RecentWorksCard
              image={content.image}
              title={content.title}
              description={content.description}
              gitHubLink={content.link}
              onClick={() => handleCardClick(content)}
            />
          </li>
        ))}
        <AnimatePresence>
          {isModalOpen && (
            <ProjectModal
              project={selectedProject}
              onClose={handleCloseModal}
            />
          )}
        </AnimatePresence>
      </ul>
    </section>
  );
}
