import { FaWallet } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

const LoginLogic = () => {
  return (
    <div className="absolute bg-black bg-opacity-90 w-full h-full top-0 left-0 flex justify-center items-center">
      <div className="w-full max-w-[500px] bg-[#000000] bg-opacity-70 border border-[#D101D5] flex flex-col items-center justify-center gap-[20px] py-12">
        <button className="flex items-center gap-[20px] border border-white px-4 py-2">
          <FaWallet className="text-3xl" />
          <p>Log-in Wallet </p>
        </button>
        <button className="flex items-center gap-[20px] border border-white px-4 py-2">
          <FaSquareXTwitter className="text-3xl" />
          <p>Log-in with X</p>
        </button>
      </div>
    </div>
  );
};

export default LoginLogic;
