import Image from "next/image";
import aleatoryLogo from "@/public/aleatory-white.png";
import { FaArrowDown } from "react-icons/fa6";

const InfoCompra = ({ selectedCurrency, currencyLogo }) => {
  return (
    <div className="w-full max-w-[1000px] flex flex-col items-center gap-[20px]">
      <div className="w-full bg-[#262626] h-[150px] px-4 md:px-8 py-2 md:py-4 flex flex-col gap-[20px] ">
        <div className="flex items-center gap-[10px]">
          <Image
            src={currencyLogo}
            alt="Aleatory logo"
            className="object-cover max-w-[25px]"
          />
          <p>{selectedCurrency}</p>
        </div>
        {/* EN ESTE input VA LA CANTIDAD DE LA CRYPTO ALEATORY A COMPRAR */}
        <input
          type="number"
          className="bg-[#444444] px-8 py-4 max-w-[300px]"
          placeholder="0"
        ></input>
      </div>
      <div className="w-[60px] md:w-[90px] h-[60px] md:h-[90px] bg-[#424242] rounded-full flex justify-center items-center -mt-[30px] md:-mt-[50px] -mb-[30px] md:-mb-[50px] z-0">
        <FaArrowDown className="text-3xl" />
      </div>
      <div className="w-full bg-[#262626] h-[150px] px-4 md:px-8 py-2 md:py-4 flex flex-col gap-[20px] ">
        <div className="flex items-center gap-[10px]">
          <Image
            src={aleatoryLogo}
            alt="Aleatory logo"
            className="object-cover max-w-[30px]"
          />
          <p>Aleatory</p>
        </div>
        {/* EN ESTE P TAG VA LA CANTIDAD DE ALEATORY A COMPRAR */}
        <input
          type="number"
          className="bg-[#444444] px-8 py-4 max-w-[300px]"
          placeholder="0"
        ></input>
      </div>
    </div>
  );
};

export default InfoCompra;
