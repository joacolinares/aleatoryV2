import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import socialX from "@/public/socialX.png";

const Footer = () => {
  return (
    <footer className="w-full flex justify-center bg-black text-white">
      <div className="max-w-maxSectionWidth px-mobile sm:px-tablet lg:px-desktop w-full flex flex-col items-center py-12 gap-12 max-md:text-center">
        <div className="w-full max-w-[1440px] flex justify-between items-center max-md:flex-col max-md:gap-12">
          <div>
            <Image src={logo} alt="logo" className="object-cover" />
          </div>
          <div>
            <h3 className="font-semibold text-2xl">Quick Link</h3>
            <ul className="mt-4 flex flex-col gap-2">
              {links.map((link, i) => (
                <li key={i}>
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="">
            <Link href="#" className="flex flex-col items-center gap-2">
              <p href="#">Follow us on our socials</p>
              <Image src={socialX} alt="X logo" />
            </Link>
          </div>
        </div>
        <div className="">
          ©2024 <span className="text-accentLight">ALEATORY</span>. All rights
          reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;

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
