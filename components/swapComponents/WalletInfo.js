import React from "react";

const WalletInfo = () => {
  return (
    <div className="flex flex-wrap justify-center gap-[10px]">
      <div className="bg-[#262626] px-6 py-4 min-w-[200px]">
        <p>Wallet:</p>
        <p>Saldo:</p>
      </div>
      <div className="bg-[#262626] px-6 py-4 min-w-[200px]">
        <p>Saldo Aleatory:</p>
        <p>Twitter (X):</p>
      </div>
    </div>
  );
};

export default WalletInfo;
