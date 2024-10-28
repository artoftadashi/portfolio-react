export default function NavbarLink({ link, title, isSelected, onSelect }) {
  let linkStyle =
    "flex text-[#FAFAFF] lg:text-sm text-[8px] md:text-[12px] lg:px-6 px-4 py-2 rounded-full hover:bg-[#1E1E1E] duration-300 uppercase whitespace-nowrap ";

  return (
    <li>
      <a
        href={link}
        className={isSelected ? (linkStyle += "bg-[#1E1E1E]") : linkStyle}
        onClick={onSelect}
        target="_blank"
        rel="noopener noreferrer"
      >
        {title}
      </a>
    </li>
  );
}
