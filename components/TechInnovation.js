"use client";
import Image from "next/image";
import React from "react";
import icon1 from "@/public/icon1.png";
import icon2 from "@/public/icon2.png";
import icon3 from "@/public/icon3.png";
import arbitrum from "@/public/arbitrum.svg";
import { motion } from "framer-motion";
import fallbackImg from "@/public/backgrounds/fallback-bg/techinnovation.png";

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

const contentVariants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};

const TechInnovation = () => {
  return (
    <section
      id="technical-innovation"
      className="w-full flex flex-col items-center justify-center scroll-mt-[120px]"
    >
      <div className="flex flex-col w-full relative paddings min-h-screen pb-12">
        <div className="mt-[20px] md:mt-[100px] flex flex-col gap-[70px] md:ml-[50px]">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className="text-white text-4xl sm:text-5xl max-md:text-center "
          >
            <motion.h1
              variants={titleVariants}
              className="text-white text-4xl sm:text-5xl max-md:text-center "
            >
              FAIRNESS AND <br></br>SECURITY
            </motion.h1>
          </motion.div>
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className="flex flex-wrap justify-around items-center gap-12"
          >
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              className=" text-white bg-white bg-opacity-10 p-2 sm:p-6 text-xl md:text-2xl text-center max-w-[1500px]"
            >
              <motion.p variants={contentVariants}>
                Aleatory finance has officially adopted LayerZero technology to
                support the cross-chain transfer of our token, so as to achieve
                maximum cross-chain operability.
              </motion.p>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-[20px]">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={contentVariants}
                className=" text-white bg-white bg-opacity-30 px-2 py-4 md:text-xl text-center flex flex-col items-center max-w-[350px] rounded-[10px] gap-[15px]"
              >
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
              </motion.div>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={contentVariants}
                className=" text-white bg-white bg-opacity-30 p-2 sm:p-6 md:text-xl text-center flex flex-col items-center max-w-[350px] rounded-[10px] gap-[15px]"
              >
                <Image src={icon2} alt="Icon" />
                <p className="text-center">
                  Scalable network architecture
                  <br></br>
                  <br></br>
                  LayerZero’s network architecture can adapt to network load and
                  transaction volume to ensure network scalability and stability
                </p>
              </motion.div>
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
                variants={contentVariants}
                className=" text-white bg-white bg-opacity-30 p-2 sm:p-6 md:text-xl text-center flex flex-col items-center max-w-[350px] rounded-[10px] gap-[15px]"
              >
                <Image src={icon3} alt="Icon" />
                <p className="text-center">
                  Secure transaction processing
                  <br></br>
                  <br></br>
                  LayerZero uses a proof-of-stake (PoS)-based consensus
                  mechanism to increase transaction processing speed and network
                  security.
                </p>
              </motion.div>
            </div>
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
              variants={contentVariants}
              className=" text-white bg-white bg-opacity-10 p-2 sm:p-6 text-xl md:text-2xl text-center max-w-[1500px] flex flex-col items-center"
            >
              <p>
                By using LayerZero, we are able to benefit from both the deep
                liquidity provided on Ethereum with the low gas and
                gamefi/gamblefi communities on
              </p>
              <Image
                src={arbitrum}
                alt="Avalanche"
                width={250}
                className="object-cover mt-[10px] bg-white p-2 rounded-[15px]"
              />
            </motion.div>
          </motion.div>
        </div>
        <div className="w-full h-full absolute left-0 top-0 z-[-1] flex justify-center">
          {/* <div className="tech1 absolute w-full h-full"></div>
          <div className="tech2 absolute w-full h-full"></div> */}
          <div className="w-screen h-[200px] bg-gradient-to-b from-[#0e0d10] from-20% to-transparent to-[100%] absolute -top-[10px]" />

          <video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            className="h-full w-full object-cover"
          >
            <source
              src="/backgrounds/techinnovation-dark.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="h-screen object-cover z-[-2] absolute top-0 left-0 flex justify-center">
          <Image
            src={fallbackImg}
            alt="Background image"
            className="h-screen w-screen object-cover z-[-2]"
          />
        </div>
      </div>
    </section>
  );
};

export default TechInnovation;
