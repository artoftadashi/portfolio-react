export default function ContactSocials({ link, image }) {
  return (
    <li className="hover:scale-[1.2] duration-300">
      <a href={link} rel="noopener noreferer" target="_blank">
        <img src={image} />
      </a>
    </li>
  );
}
