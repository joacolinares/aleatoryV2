import { useState } from "react";

const ComingSoon = ({ loggedWallet, loggedX }) => {
  const [okPressed, setOkpressed] = useState(false);

  return (
    <div
      className={`${
        loggedWallet & loggedX & !okPressed ? "block" : "hidden"
      } bg-black absolute bg-opacity-80 top-0 left-0 w-full h-full flex justify-center items-center`}
    >
      <div className="w-full max-w-[500px] bg-black bg-opacity-70 border border-[#D101D5] flex flex-col items-center gap-[25px] px-4 py-3 text-center">
        <p className="text-2xl">
          You are logged in, but the swap is coming soon...
        </p>
        <button
          onClick={() => {
            setOkpressed(true);
          }}
          className="min-w-[200px] bg-[#262626] px-6 py-3 border border-[#D101D5] hover:scale-105 hover:border-accentLight transition-all duration-300 font-semibold"
        >
          OK
        </button>
      </div>
    </div>
  );
};

export default ComingSoon;
