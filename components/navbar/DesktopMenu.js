import Image from "next/image";
import Link from "next/link";
import socialX from "@/public/socialX.png";

const DesktopMenu = ({ links }) => {
  return (
    <ul className="hidden exc:flex items-center gap-4 xl:gap-6 text-sm xl:text-base text-center">
      {links.map((link, i) => (
        <li
          key={i}
          className="hover:text-accentLight transition-all duration-300"
        >
          <Link href={link.href}>{link.title}</Link>
        </li>
      ))}
      <Link
        href="#"
        className="text-xs xl:text-base flex items-center gap-[2px] xl:ml-[10px] hover:text-accentLight transition-all duration-300"
      >
        <p href="#">Stay in touch</p>
        <Image src={socialX} alt="X logo" className="w-[30px]" />
      </Link>
    </ul>
  );
};

export default DesktopMenu;
