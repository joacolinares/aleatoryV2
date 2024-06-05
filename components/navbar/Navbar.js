import Image from "next/image";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import logo from "@/public/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-[100px] text-white w-full flex justify-center fixed top-0 lg:top-[20px] z-50">
      <div className="lg:w-[95%] w-full paddings bg-black bg-opacity-70 max-w-maxSectionWidth flex justify-between items-center sectionPaddings">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            className="object-cover max-w-[200px] max-lg:max-w-[150px] max-md:max-w-[70%]"
          />
        </Link>
        <DesktopMenu links={links} />
        <MobileMenu links={links} />
      </div>
    </nav>
  );
};

export default Navbar;

const links = [
  {
    title: "Introduction",
    href: "/#introduction",
  },
  {
    title: "How it works",
    href: "/#how-it-works",
  },
  {
    title: "Tokenomics",
    href: "/#tokenomics",
  },
  {
    title: "Technical innovation",
    href: "/#technical-innovation",
  },
];
