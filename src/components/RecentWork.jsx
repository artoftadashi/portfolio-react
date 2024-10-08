import RecentWorksCard from "./RecentWorksCard";

export default function RecentWork() {
  return (
    <section className="bg-[#050505] px-16 py-32 h-auto">
      <h1 className="text-[10rem] text-[#fafaff] font-bold uppercase  text-center font-[Thunder] leading-[10rem]">
        Recent work
      </h1>
      <div className="flex flex-wrap justify-center gap-16 mt-32 ">
        <RecentWorksCard
          image="./src/assets/simonSays.png"
          isLarge={true}
          title="Simon Says"
          description="ui development, Front-End engineering"
        />
        <RecentWorksCard
          image="./src/assets/keeper.png"
          title="Keeper App"
          description="ui development, backend engineering"
        />
        <RecentWorksCard
          image="./src/assets/check-it.png"
          title="Check-It App"
          description="ui development, backend engineering"
        />
        <RecentWorksCard
          image="./src/assets/journal.png"
          title="Journal App"
          description="ui development, backend engineering"
        />
        <RecentWorksCard
          image="./src/assets/secrets.png"
          title="Secrets App"
          description="ui development, backend engineering"
        />
      </div>
    </section>
  );
}
