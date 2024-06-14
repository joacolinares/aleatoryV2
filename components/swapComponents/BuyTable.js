"use client";
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import LastTransactions from "./LastTransactions";
import WalletInfo from "./WalletInfo";
import AleatoryPrice from "./AleatoryPrice";
import LoginLogic from "./LoginLogic";

const BuyTable = () => {
  const [logged, setLogged] = useState(false);

  return (
    <div className="w-full relative">
      <div className="w-full flex flex-col gap-[20px] items-center p-4">
        <ProgressBar />
        <AleatoryPrice />
        <WalletInfo />
        <LastTransactions />
        {/* Boton de compra */}
        <button className="min-w-[200px] bg-[#262626] px-6 py-3 border border-[#D101D5] hover:scale-105 hover:border-accentLight transition-all duration-300">
          BUY
        </button>
      </div>
      {/* Si no conectaron la wallet o no se loguearon, se muestra esto */}
      {logged ? <></> : <LoginLogic />}
    </div>
  );
};

export default BuyTable;
