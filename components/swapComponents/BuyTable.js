"use client";
import React, { useState } from "react";
import ProgressBar from "./ProgressBar";
import LastTransactions from "./LastTransactions";
import WalletInfo from "./WalletInfo";
import AleatoryPrice from "./AleatoryPrice";
import LoginLogic from "./LoginLogic";
import InfoCompra from "./InfoCompra";
import ConfirmBuy from "./ConfirmBuy";
import TweetPurchase from "./TweetPurchase";

const BuyTable = () => {
  const [logged, setLogged] = useState(false);
  const [buyClicked, setBuyClicked] = useState(false);
  const [bought, setBought] = useState(false);

  return (
    <div className="w-full relative">
      <div className="w-full flex flex-col gap-[20px] items-center p-4">
        <ProgressBar />
        <AleatoryPrice />
        <WalletInfo />
        <LastTransactions />
        <InfoCompra />
        {/* Boton de compra */}
        <button
          onClick={() => {
            setBuyClicked(true);
          }}
          className="min-w-[200px] bg-[#262626] px-6 py-3 border border-[#D101D5] hover:scale-105 hover:border-accentLight transition-all duration-300"
        >
          BUY
        </button>
        <ConfirmBuy
          buyClicked={buyClicked}
          setBuyClicked={setBuyClicked}
          setBought={setBought}
        />
        <TweetPurchase bought={bought} setBought={setBought} />
      </div>
      {/* Si no conectaron la wallet o no se loguearon, se muestra esto */}
      {logged ? <></> : <LoginLogic />}
    </div>
  );
};

export default BuyTable;
