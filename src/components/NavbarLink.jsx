export default function NavbarLink({ link, title, isSelected, onSelect }) {
  let linkStyle =
    "text-[#FAFAFF] text-sm px-6 py-2 rounded-full hover:bg-[#1E1E1E] duration-300 uppercase ";

  return (
    <li>
      <a
        href={link}
        className={isSelected ? (linkStyle += "bg-[#1E1E1E]") : linkStyle}
        onClick={onSelect}
      >
        {title}
      </a>
    </li>
  );
}
