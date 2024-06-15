"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const titleVariants = {
  offscreen: {
    x: -2000,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
};

const Tokenomics = () => {
  return (
    <section
      id="tokenomics"
      className="w-full flex flex-col items-center justify-center scroll-mt-[120px]"
    >
      <div className="flex flex-col w-full relative paddings pb-12 min-h-screen">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="mt-[20px] md:mt-[100px] flex flex-col gap-[70px] md:ml-[50px]"
        >
          <motion.h1
            variants={titleVariants}
            className="text-white text-4xl sm:text-5xl max-md:text-center "
          >
            TOKENOMICS
          </motion.h1>

          <div className=" text-white bg-white bg-opacity-10 p-3 max-w-[1000px] md:text-xl lg:text-2xl max-md:text-center">
            <motion.p variants={titleVariants}>
              The Aleatory token model has been designed to provide the returns
              of a Lottery Bond whilst still keeping a constant supply.<br></br>
              <br></br> -Initial supply:{" "}
              <span className="text-accentLight">1,000,000</span> <br></br>
              <br></br>
              -Staking emissions rate:{" "}
              <span className="text-accentLight">10000</span> per week
              Transaction Fee Burn Mechanism:{" "}
              <span className="text-accentLight">1.5%</span> of each transaction
              Fjord Foundry <br></br>
              <br></br>-LBP: <span className="text-accentLight">400,000</span>{" "}
              Treasury- DEX Liquidity Provision, CEX Market Makers, <br></br>
              <br></br>-Protocol Growth:
              <span className="text-accentLight">
                400,000{" "}
                <span className="text-[#65BEDA] font-semibold underline">
                  $STOCH
                </span>
              </span>{" "}
              <br></br>
              <br></br>
              -Team Tokens: <span className="text-accentLight">200,000</span>
              <br></br>
              (6 month cliff, 18 month vest) .
            </motion.p>
          </div>
        </motion.div>
        <div className="w-full h-full absolute left-0 top-0 z-[-1] flex justify-center">
          {/* <div className="token absolute w-full h-full"></div> */}
          <div className="bg-black bg-opacity-50 absolute w-full h-full"></div>
          <div className="w-screen h-[200px] bg-gradient-to-b from-[#0e0d10] from-20% to-transparent to-[100%] absolute -top-[10px]" />
          <div className="w-screen h-[200px] bg-gradient-to-b from-transparent from-0% to-[#0e0d10] to-[70%] absolute bottom-0" />

          <video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            className="h-full w-full object-cover tech1 tech2"
          >
            <source src="/backgrounds/tokenomics-dark.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
