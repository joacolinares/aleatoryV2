import ethereum from "@/public/crypto-logos/ethereum.png";
import USDT from "@/public/crypto-logos/USDT.png";
import USDC from "@/public/crypto-logos/USDC.png";
import AVAX from "@/public/crypto-logos/AVAX.png";
import arbitrum from "@/public/crypto-logos/arbitrum.png";
import LINK from "@/public/crypto-logos/LINK.png";
import Cardano from "@/public/crypto-logos/Cardano.png";
import BNB from "@/public/crypto-logos/BNB.png";
import Image from "next/image";

const Currency = ({
  selectedCurrency,
  setSelectedCurrency,
  setCurrencyLogo,
}) => {
  return (
    <div className="flex flex-wrap gap-[20px] justify-center p-4 border border-white">
      {currencies.map((currency) => (
        <button
          key={currency.name}
          className={`bg-[#262626] px-4 py-2 min-w-[120px] border ${
            selectedCurrency === currency.name
              ? "border-[#D101D5]"
              : "border-white"
          } hover:scale-105 transition-all duration-300 flex gap-[10px] items-center justify-center`}
          onClick={() => {
            setSelectedCurrency(currency.name);
            setCurrencyLogo(currency.logo);
          }}
        >
          <span>
            <Image src={currency.logo} alt="logo" className="max-w-[20px]" />
          </span>
          {currency.name}
        </button>
      ))}
    </div>
  );
};

export default Currency;

const currencies = [
  {
    name: "ETH",
    logo: ethereum,
  },
  {
    name: "USDT",
    logo: USDT,
  },
  {
    name: "BNB",
    logo: BNB,
  },
  {
    name: "AVAX",
    logo: AVAX,
  },
  {
    name: "USDC",
    logo: USDC,
  },
  {
    name: "LINK",
    logo: LINK,
  },
  {
    name: "ARB",
    logo: arbitrum,
  },
  {
    name: "Cardano",
    logo: Cardano,
  },
];
