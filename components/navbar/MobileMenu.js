"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import socialX from "@/public/socialX.png";

const MobileMenu = ({ links }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      {open ? (
        <IoClose onClick={() => setOpen(!open)} className="text-4xl" />
      ) : (
        <FiMenu onClick={() => setOpen(!open)} className="text-3xl" />
      )}

      <ul
        className={`fixed top-[100px] h-[calc(100vh-100px)] w-[100vw] bg-black ${
          open ? "right-0" : "-right-full"
        } transition-all duration-300 flex flex-col items-center pt-12 gap-4`}
      >
        {links.map((link, i) => (
          <li key={i} className="text-2xl w-[90%] flex justify-center">
            <Link
              onClick={() => setOpen(false)}
              href={link.href}
              className="w-full text-center py-2 bg-[#4C4C4C] bg-opacity-25 rounded-lg hover:bg-accentDark"
            >
              {link.title}
            </Link>
          </li>
        ))}
        <Link
          href="#"
          className="text-2xl flex items-center gap-[5px] absolute bottom-12"
        >
          <p>Stay in touch</p>
          <Image src={socialX} alt="X logo" className="w-[40px]" />
        </Link>
      </ul>
    </div>
  );
};

export default MobileMenu;
