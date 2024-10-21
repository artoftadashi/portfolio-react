import RecentWorksCard from "./RecentWorksCard";

export default function RecentWork() {
  return (
    <section className="bg-[#050505] px-12 md:px-16 py-16 lg:py-32 h-auto">
      <h1 className="text-[3.5rem] sm:text-[4.5rem] md:text-[7rem] lg:text-[8rem] xl:text-[9.5rem] 2xl:text-[10rem] text-[#fafaff] font-bold uppercase  text-center font-[Thunder]">
        Recent work
      </h1>
      <div className="flex flex-wrap justify-center gap-16 mt-16 lg:mt-32 ">
        <RecentWorksCard
          image="./simonSays.png"
          isLarge={true}
          title="Simon Says"
          description="ui development, Front-End engineering"
        />
        <RecentWorksCard
          image="./keeper.png"
          title="Keeper App"
          description="ui development, backend engineering"
        />
        <RecentWorksCard
          image="./check-it.png"
          title="Check-It App"
          description="ui development, backend engineering"
        />
        <RecentWorksCard
          image="./journal.png"
          title="Journal App"
          description="ui development, backend engineering"
        />
        <RecentWorksCard
          image="./secrets.png"
          title="Secrets App"
          description="ui development, backend engineering"
        />
      </div>
    </section>
  );
}
