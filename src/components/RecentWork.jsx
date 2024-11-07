import RecentWorksCard from "./RecentWorksCard";
import recentWorkContent from "./RecentWorkContent";

export default function RecentWork() {
  return (
    <section className="bg-[#050505] px-12 md:px-16 py-16 lg:py-32 h-auto">
      <h1 className="text-[3.5rem] sm:text-[4.5rem] md:text-[7rem] lg:text-[8rem] xl:text-[9.5rem] 2xl:text-[10rem] text-[#fafaff] font-bold uppercase  text-center font-[Thunder]">
        Recent work
      </h1>
      <ul className="flex flex-wrap justify-center gap-16 mt-16 lg:mt-32 ">
        {recentWorkContent.map((content) => (
          <li key={content.id}>
            <RecentWorksCard
              image={content.image}
              title={content.title}
              description={content.description}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
