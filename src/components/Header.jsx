export default function Header() {
  return (
    <header className="flex items-center justify-between my-8 mx-14">
      <img src="./src/assets/logo.png" />
      <p className="uppercase flex items-center gap-3 text-lg">
        <span className="w-[15px] h-[15px] rounded-full bg-[rgb(254,93,38)] animate-pulse delay-300 "></span>{" "}
        Available for work
      </p>
    </header>
  );
}
