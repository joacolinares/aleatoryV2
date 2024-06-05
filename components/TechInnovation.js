import Image from "next/image";
import React from "react";
import icon1 from "@/public/icon1.png";
import icon2 from "@/public/icon2.png";
import icon3 from "@/public/icon3.png";
import avalanche from "@/public/avalanche.png";

const TechInnovation = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center">
      <div className="flex flex-col w-full relative paddings min-h-screen pb-12">
        <div className="mt-[20px] md:mt-[100px] flex flex-col gap-[70px] md:ml-[50px]">
          <h1 className="text-white text-4xl sm:text-5xl max-md:text-center ">
            FAIRNESS AND <br></br>SECURITY
          </h1>
          <div className="flex flex-wrap justify-around items-center gap-12">
            <div className=" text-white bg-white bg-opacity-10 p-2 sm:p-6 text-xl md:text-2xl text-center max-w-[1500px]">
              <p>
                Aleatory finance has oficially adopted LayerZero technology to
                support the cross-chain transfer of our token, so as to achieve
                maximum cross-chain operability.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-[20px]">
              <div className=" text-white bg-white bg-opacity-30 px-2 py-4 md:text-xl text-center flex flex-col items-center max-w-[350px] rounded-[10px] gap-[15px]">
                <Image src={icon1} alt="Icon" />
                <p className="text-center">
                  Efficient cross-chain transfer
                  <br></br>
                  <br></br>
                  LayerZero provides an efficient cross-chain transfer mechanism
                  that can quickly and safely transfer our token from one
                  blockchain to another without complex operations and
                  procedures.
                </p>
              </div>
              <div className=" text-white bg-white bg-opacity-30 p-2 sm:p-6 md:text-xl text-center flex flex-col items-center max-w-[350px] rounded-[10px] gap-[15px]">
                <Image src={icon2} alt="Icon" />
                <p className="text-center">
                  Scalable network architecture
                  <br></br>
                  <br></br>
                  LayerZero’s network architecture can adapt to network load and
                  transaction volume to ensure network scalability and stability
                </p>
              </div>
              <div className=" text-white bg-white bg-opacity-30 p-2 sm:p-6 md:text-xl text-center flex flex-col items-center max-w-[350px] rounded-[10px] gap-[15px]">
                <Image src={icon3} alt="Icon" />
                <p className="text-center">
                  Secure transaction processing
                  <br></br>
                  <br></br>
                  LayerZero uses a proof-of-stake (PoS)-based consensus
                  mechanism to increase transaction processing speed and network
                  security.
                </p>
              </div>
            </div>
            <div className=" text-white bg-white bg-opacity-10 p-2 sm:p-6 text-xl md:text-2xl text-center max-w-[1500px] flex flex-col items-center">
              <p>
                By using LayerZero, we are able to benefit from both the deep
                liquidity provided on Ethereum with the low gas and
                gamefi/gamblefi communities on
              </p>
              <Image src={avalanche} alt="Avalanche" />
            </div>
          </div>
        </div>
        <div className="w-full h-full absolute left-0 top-0 z-[-1] flex justify-center">
          <div className="tech1 absolute w-full h-full"></div>
          <div className="absolute left-0 top-0 w-full h-full tech2 z-10"></div>
          <video autoPlay loop muted className="h-full w-full object-cover">
            <source src="/backgrounds/techinnovation-bg.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default TechInnovation;
