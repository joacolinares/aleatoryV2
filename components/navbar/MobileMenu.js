"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import socialX from "@/public/socialX.png";
import { Connector, useAccount, useConnect, useDisconnect } from "wagmi";

const MobileMenu = ({ links }) => {
  const [open, setOpen] = useState(false);

  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const { address, isConnected } = useAccount();

  const handleConnect = async (connector) => {
    try {
      connect({ connector });
    } catch (error) {
      console.log(error);
    }
  };

  const handleDisconnect = async () => {
    try {
      await disconnect();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="exc:hidden">
      {open ? (
        <IoClose onClick={() => setOpen(!open)} className="text-4xl" />
      ) : (
        <FiMenu onClick={() => setOpen(!open)} className="text-3xl" />
      )}

      <ul
        className={`fixed top-[100px] h-[calc(100vh-100px)] w-[100vw] bg-black ${open ? "right-0" : "-right-full"
          } transition-all duration-300 flex flex-col items-center pt-12 gap-4`}
      >
        {links.map((link, i) => (
          <li key={i} className="text-2xl w-[90%] flex justify-center">
            <Link
              onClick={() => setOpen(false)}
              href={link.href}
              className="w-full text-center py-2 bg-[#4C4C4C] bg-opacity-25 rounded-lg hover:bg-accentDark transition-all duration-300"
            >
              {link.title}
            </Link>
          </li>
        ))}

        {/* <Link
          href="#"
          className="w-[90%] text-center py-2 border-2 bg-opacity-25 hover:bg-accentDark transition-all duration-300"
        >
          Login
        </Link> */}

        {!isConnected ? (
          <button
            href="#"
            className="w-[90%] text-center py-2 border-2 bg-opacity-25 hover:bg-accentDark transition-all duration-300"
            onClick={() => handleConnect(connectors[0])}
          >
            Login
          </button>
        ) : (
          <button
            href="#"
            className="w-[90%] text-center py-2 border-2 bg-opacity-25 hover:bg-accentDark transition-all duration-300"
            onClick={() => handleDisconnect()}
          >
            <p>{`${address.slice(0, 6)}...${address.slice(-6)}`}</p>
          </button>
        )}

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
