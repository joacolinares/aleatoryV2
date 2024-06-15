import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import ether from "@/public/crypto-logos/ethereum.png";
import { FaArrowDown } from "react-icons/fa";
import aleatoryLogo from "@/public/aleatory-white.png";

const ConfirmBuy = ({ buyClicked, setBuyClicked, setBought }) => {
  return (
    <div
      className={`${
        buyClicked ? "block" : "hidden"
      } bg-black absolute bg-opacity-80 top-0 left-0 w-full h-full flex justify-center items-center`}
    >
      <div className="w-full max-w-[500px] bg-black bg-opacity-70 border border-[#D101D5] flex flex-col items-center gap-[25px] px-4 py-3">
        <p className="text-2xl">Are you sure?</p>
        <div className="flex flex-col gap-[20px] items-center w-full">
          {/* Este div tiene la cantidad de la criptomoneda elegida a swapear */}
          <div className="bg-[#262626] flex flex-col items-center justify-center gap-[5px] px-4 py-3 w-full">
            <div className="flex items-center gap-[10px]">
              <Image
                src={ether}
                alt="Aleatory logo"
                className="object-cover max-w-[25px]"
              />
              <p>ETH</p>
            </div>
            <p>0</p>
          </div>
          <div className="w-[60px] md:w-[90px] h-[60px] md:h-[90px] bg-[#424242] rounded-full flex justify-center items-center z-0">
            <FaArrowDown className="text-2xl" />
          </div>
          {/* Este div tiene la cantidad de aleatory equivalente */}
          <div className="bg-[#262626] flex flex-col items-center justify-center gap-[5px] px-4 py-3 w-full">
            <div className="flex items-center gap-[10px]">
              <Image
                src={aleatoryLogo}
                alt="Aleatory logo"
                className="object-cover max-w-[25px]"
              />
              <p>Aleatory</p>
            </div>
            <p>0</p>
          </div>
        </div>
        <button
          onClick={() => {
            setBuyClicked(false);
            setBought(true);
          }}
          className="min-w-[200px] bg-[#262626] px-6 py-3 border border-[#D101D5] hover:scale-105 hover:border-accentLight transition-all duration-300"
        >
          Yes, buy
        </button>
      </div>
    </div>
  );
};

export default ConfirmBuy;
