import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";
import socialX from "@/public/socialX.png";
import socialgh from "@/public/socialgh.png";
import socialgb from "@/public/socialgb.png";

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
                <li
                  key={i}
                  className="hover:text-accentDark transition-all duration-300"
                >
                  <Link href={link.href}>{link.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center gap-4">
            <p
              href="#"
              className="hover:text-accentDark transition-all duration-300"
            >
              Follow us on our socials
            </p>
            <Link
              href="https://x.com/aleatory_io?t=jXfHpRlWeid08tZoxlVbfg&s=08"
              target="_blank"
              className="flex flex-col items-center gap-2"
            >
              <Image
                src={socialX}
                alt="X logo"
                className="w-[40px] object-cover"
              />
            </Link>
            <Link
              href="https://github.com/ivan-barrios/aleatory.git"
              target="_blank"
              className="flex flex-col items-center gap-2"
            >
              <Image
                src={socialgh}
                alt="github logo"
                className="w-[40px] object-cover"
              />
            </Link>
            <Link
              href="https://aleatory.gitbook.io/aleatory/"
              target="_blank"
              className="flex flex-col items-center gap-2"
            >
              <Image
                src={socialgb}
                alt="github logo"
                className="w-[40px] object-cover"
              />
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
