import Image from "next/image";
import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import logo from "@/public/logo.png";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="h-[100px] text-white w-full flex justify-center fixed top-0 lg:top-[20px]">
      <div className="lg:w-[95%] w-full px-mobile sm:px-tablet lg:px-desktop bg-black bg-opacity-70 max-w-maxSectionWidth flex justify-between items-center sectionPaddings">
        <Link href="/">
          <Image
            src={logo}
            alt="Logo"
            className="object-cover max-lg:max-w-[150px] max-md:max-w-[70%]"
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
    href: "/",
  },
  {
    title: "How it works",
    href: "/",
  },
  {
    title: "Tokenomics",
    href: "/",
  },
  {
    title: "Technical innovation",
    href: "/",
  },
];
