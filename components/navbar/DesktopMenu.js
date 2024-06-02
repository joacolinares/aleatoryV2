import Image from "next/image";
import Link from "next/link";
import socialX from "@/public/socialX.png";

const DesktopMenu = ({ links }) => {
  return (
    <ul className="hidden md:flex items-center gap-4 text-sm text-center">
      {links.map((link, i) => (
        <li key={i}>
          <Link href={link.href}>{link.title}</Link>
        </li>
      ))}
      <Link href="#" className="text-xs flex items-center gap-[5px]">
        <p href="#">Stay in touch</p>
        <Image src={socialX} alt="X logo" className="w-[30px]" />
      </Link>
    </ul>
  );
};

export default DesktopMenu;
