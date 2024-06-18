import Image from "next/image";
import trust from "@/public/crypto-logos/trust.png";
import metamask from "@/public/crypto-logos/metamask.png";
import coinbase from "@/public/crypto-logos/coinbase.png";
import ethereum from "@/public/crypto-logos/ethereum.png";
import alea from "@/public/aleatory-white.png";
import { FaSquareXTwitter } from "react-icons/fa6";
import { SiFireship } from "react-icons/si";

const WalletInfo = () => {
  return (
    <div className="flex flex-wrap justify-center gap-[10px]">
      <div className="bg-[#262626] px-6 py-4 min-w-[200px] flex flex-col gap-[10px]">
        <div className="flex items-center gap-[10px]">
          <p>Wallet:</p>
          <Image src={metamask} alt="Metamask Logo" />
        </div>

        <div className="flex items-center gap-[10px]">
          <p>Balance:</p>
          <Image
            src={ethereum}
            alt="Ethereum Logo"
            className="object-cover max-w-[20px]"
          />
          <p>1.00024</p>
        </div>
      </div>
      <div className="bg-[#262626] px-6 py-4 min-w-[200px] flex flex-col gap-[10px]">
        <div className="flex items-center gap-[10px]">
          <p>ALEA Balance:</p>
          <Image
            src={alea}
            alt="Aleatory Logo"
            className="object-cover max-w-[20px]"
          />
          <p>5.00024</p>
        </div>
        <div className="flex items-center gap-[10px]">
          <p>Twitter</p>
          <FaSquareXTwitter className="text-3xl" />
        </div>
        <div className="flex items-center gap-[10px]">
          <p>FEEs ALEA: </p>
          <SiFireship className="text-xl text-orange-500" />
        </div>
      </div>
    </div>
  );
};

export default WalletInfo;
