import Image from "next/image";
import BuyTable from "./BuyTable";
import fallbackImg from "@/public/backgrounds/fallback-bg/how.png";

const BuySection = () => {
  return (
    <section
      id="swap"
      className="w-full flex flex-col items-center justify-center scroll-mt-[130px]"
    >
      <div className="flex flex-col w-full relative paddings min-h-screen">
        <div className="mt-[20px] md:mt-[100px] flex flex-col items-center gap-[70px]">
          <div className=" ">
            <h1 className="text-white text-4xl sm:text-5xl text-center ">
              BUY YOUR <br></br>TOKENS
            </h1>
          </div>

          {/* A partir de este div esta todo el contenido de Swap */}
          <div className=" text-white bg-black bg-opacity-70 sm:p-6 md:text-xl w-full max-w-[1500px] border border-[#D101D5]">
            <BuyTable />
          </div>
        </div>

        {/* De aca para abajo es solo Background */}
        <div className="w-full h-full absolute left-0 top-0 z-[-1] flex justify-center">
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

export default BuySection;
