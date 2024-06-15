"use client";
import Image from "next/image";
import grafico from "@/public/grafico.png";
import { motion } from "framer-motion";

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

const imageVariants = {
  offscreen: {
    x: 2000,
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

const textVariants = {
  offscreen: {
    y: 2000,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
};

const How = () => {
  return (
    <section
      id="how-it-works"
      className="w-full flex flex-col items-center justify-center scroll-mt-[130px]"
    >
      <div className="flex flex-col w-full relative paddings min-h-screen">
        <motion.div
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.8 }}
          className="mt-[20px] md:mt-[100px] flex flex-col gap-[70px] md:ml-[50px]"
        >
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            className=" "
          >
            <motion.h1
              variants={titleVariants}
              className="text-white text-4xl sm:text-5xl max-md:text-center "
            >
              HOW IT <br></br>WORKS
            </motion.h1>
          </motion.div>
          <div className="flex flex-wrap justify-around items-center gap-12">
            <motion.div
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.8 }}
            >
              <motion.div
                variants={textVariants}
                className=" text-white bg-white bg-opacity-10 p-2 sm:p-6 md:text-xl max-md:text-center"
              >
                <p>
                  <span className="text-accentLight">Aleatory</span> is a
                  single-asset bond platform, namely{" "}
                  <span className="text-accentLight">$ALEA</span>, our native
                  token. <span className="text-accentLight">$ALEA</span> is
                  native to and tradable on Ethereum but bonds are deployed on
                  Avalanche. <span className="text-accentLight">$ALEA</span> has
                  officially adopted LayerZero technology to support the
                  cross-chain transfer of our token, so as to achieve maximum
                  cross-chain operability. This enables the token to have access
                  to both the deep liquidity on Ethereum and the low gas fees
                  and GameFi/GambleFi communities on Avalanche.
                </p>
              </motion.div>
            </motion.div>
            <motion.div variants={imageVariants}>
              <Image src={grafico} alt="Grafico" className="" />
            </motion.div>
          </div>
        </motion.div>
        <div className="w-full h-full absolute left-0 top-0 z-[-1] flex justify-center">
          <div className="tech1 absolute w-full h-full"></div>
          <div className="tech2 absolute w-full h-full"></div>
          <div className="w-screen h-[200px] bg-gradient-to-b from-[#0e0d10] from-20% to-transparent to-[100%] absolute -top-[10px]" />
          <div className="w-screen h-[200px] bg-gradient-to-b from-transparent from-0% to-[#0e0d10] to-[70%] absolute bottom-0" />
          <video
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            className="h-full w-full object-cover"
          >
            <source src="/backgrounds/how-dark.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
};

export default How;
