import trust from "@/public/crypto-logos/trust.png";
import metamask from "@/public/crypto-logos/metamask.png";
import coinbase from "@/public/crypto-logos/coinbase.png";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";

const WalletOptions = ({ setWalletOrX }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-[20px]">
      {/* Boton para ir para atras */}
      <button
        onClick={() => {
          setWalletOrX(false);
        }}
        className="flex gap-[10px] items-center"
      >
        <FaArrowLeftLong className="text-xl" />
        Back
      </button>
      {/* Botones para conectar las distintas wallets */}
      <button className="flex items-center gap-[20px] border border-white px-4 py-2 w-full">
        <Image src={metamask} alt="Metamask Logo" />
        <p>Log-in with Metamask </p>
      </button>
      <button className="flex items-center gap-[20px] border border-white px-4 py-2 w-full">
        <Image src={trust} alt="Trust Logo" />
        <p>Log-in with Trust </p>
      </button>
      <button className="flex items-center gap-[20px] border border-white px-4 py-2 w-full">
        <Image src={coinbase} alt="Coinbase Logo" />
        <p>Log-in with Coinbase </p>
      </button>
    </div>
  );
};

export default WalletOptions;
