"use client";

import Image from "next/image";
import Link from "next/link";
import socialX from "@/public/socialX.png";
import { Connector, useAccount, useConnect, useDisconnect } from "wagmi";

const DesktopMenu = ({ links }) => {

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
    <ul className="hidden exc:flex items-center gap-4 xl:gap-6 text-sm xl:text-base text-center">
      {links.map((link, i) => (
        <li
          key={i}
          className="hover:text-accentLight transition-all duration-300"
        >
          <Link href={link.href}>{link.title}</Link>
        </li>
      ))}
      {/* <Link
        href="#"
        className="text-xs xl:text-base flex items-center gap-[2px] xl:ml-[10px] hover:text-accentLight transition-all duration-300 border-2 px-2 py-1 hover:border-accentLight"
      >
        <p href="#">Login</p>
      </Link> */}

      {!isConnected ? (
        <button
          className="text-xs xl:text-base flex items-center gap-[2px] xl:ml-[10px] hover:text-accentLight transition-all duration-300 border-2 px-2 py-1 hover:border-accentLight"
          onClick={() => handleConnect(connectors[0])}
        >
          <p>Login</p>
        </button>
      ) : (
        <button
          className="text-xs xl:text-base flex items-center gap-[2px] xl:ml-[10px] hover:text-accentLight transition-all duration-300 border-2 px-2 py-1 hover:border-accentLight"
          onClick={() => handleDisconnect()}
        >
          <p>{`${address.slice(0, 6)}...${address.slice(-6)}`}</p>
        </button>
      )}

    </ul>
  );
};

export default DesktopMenu;
