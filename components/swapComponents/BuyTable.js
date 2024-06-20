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
import Currency from "./Currency";
//Estos logos son para mostrar condicionalmente cual de las monedas esta seleccionada
import USDT from "@/public/crypto-logos/USDT.png";
import USDC from "@/public/crypto-logos/USDC.png";
import AVAX from "@/public/crypto-logos/AVAX.png";
import arbitrum from "@/public/crypto-logos/arbitrum.png";
import LINK from "@/public/crypto-logos/LINK.png";
import Cardano from "@/public/crypto-logos/Cardano.png";
import BNB from "@/public/crypto-logos/BNB.png";
import ethereum from "@/public/crypto-logos/ethereum.png";
import ComingSoon from "./ComingSoon";

const BuyTable = () => {
  //loggedWallet y loggedX indica si esta logueado con cada uno para poner el borde verde si ya esta logueado con cada uno
  const [loggedWallet, setLoggedWallet] = useState(true);
  const [loggedX, setLoggedX] = useState(true);
  //Selected Currency es para saber con cual moneda elige comprar el usuario (En el componente Currency estan los botones para elegir)
  const [selectedCurrency, setSelectedCurrency] = useState("ETH");
  //Este useState es para saber cual logo tiene que aparecer
  const [currencyLogo, setCurrencyLogo] = useState(ethereum);
  const [buyClicked, setBuyClicked] = useState(false);
  const [bought, setBought] = useState(false);

  return (
    <div className="w-full relative">
      <div className="w-full flex flex-col gap-[20px] items-center p-2 sm:p-4">
        {/* Tabla de informacion sobre aleatory */}
        <ProgressBar />
        <AleatoryPrice />
        <Currency
          selectedCurrency={selectedCurrency}
          setSelectedCurrency={setSelectedCurrency}
          setCurrencyLogo={setCurrencyLogo}
        />
        <WalletInfo currencyLogo={currencyLogo} />
        <LastTransactions />
        <InfoCompra
          selectedCurrency={selectedCurrency}
          currencyLogo={currencyLogo}
        />
        {/* Boton de compra (Por ahora deshabilitado), si queres habilitarlo, borra la prop disabled del <button> */}
        <button
          disabled
          onClick={() => {
            setBuyClicked(true);
          }}
          className="min-w-[200px] bg-[#262626] px-6 py-3 border border-[#D101D5] hover:scale-105 hover:border-accentLight transition-all duration-300 disabled:opacity-50"
        >
          BUY
        </button>
        {/* Solo aparece cuando se aprieta el boton BUY */}
        <ConfirmBuy
          buyClicked={buyClicked}
          setBuyClicked={setBuyClicked}
          setBought={setBought}
        />
        {/* Una vez confirmada la compra, aparece este componente */}
        <TweetPurchase bought={bought} setBought={setBought} />
      </div>
      {/* Si no se loguearon, se muestra LoginLogic, cuando se logueen, aparece ComingSoon */}
      {loggedWallet & loggedX ? (
        <ComingSoon loggedWallet={loggedWallet} loggedX={loggedX} />
      ) : (
        <LoginLogic loggedWallet={loggedWallet} loggedX={loggedX} />
      )}
    </div>
  );
};

export default BuyTable;
