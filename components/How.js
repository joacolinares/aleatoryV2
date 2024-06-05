import Image from "next/image";
import React from "react";
import grafico from "@/public/grafico.png";

const How = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="max-w-maxSectionWidth flex flex-col w-full relative paddings min-h-screen">
        <div className="mt-[20px] md:mt-[100px] flex flex-col gap-[20px] md:ml-[50px]">
          <h1 className="text-white text-4xl sm:text-5xl max-md:text-center ">
            HOW IT <br></br>WORKS
          </h1>
          <div className="flex flex-wrap justify-around items-center gap-12">
            <div className=" text-white bg-white bg-opacity-10 p-2 sm:p-6 md:text-xl max-md:text-center">
              <p>
                <span className="text-accentLight">Aleatory</span> is a
                single-asset bond platform, namely{" "}
                <span className="text-accentLight">$ALEA</span>, our native
                token. <span className="text-accentLight">$ALEA</span> is native
                to and tradable on Ethereum but bonds are deployed on Avalanche.{" "}
                <span className="text-accentLight">$ALEA</span> has officially
                adopted LayerZero technology to support the cross-chain transfer
                of our token, so as to achieve maximum cross-chain operability.
                This enables the token to have access to both the deep liquidity
                on Ethereum and the low gas fees and GameFi/GambleFi communities
                on Avalanche.
              </p>
            </div>
          </div>
          <Image src={grafico} alt="Grafico" />
        </div>
        <div className="w-full h-full absolute left-0 top-0 z-[-1] flex justify-center">
          <div className="bg-black bg-opacity-50 absolute w-full h-full"></div>
          <div className="absolute left-0 top-0 w-full h-full bg-[#D101D5] bg-opacity-[0.1] z-10"></div>
          <video loop muted className="h-full object-cover">
            <source src="/backgrounds/how-bg.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default How;
