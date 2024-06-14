"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import aleaCoin from "@/public/aleatory-white.png";

const ProgressBar = () => {
  //Esta variable indica el porcentaje de progreso de la barra
  const progress = 50;

  //De aca para abajo es logica para la animacion de la barra de progreso
  const ref = useRef();
  const isVisible = useIsVisible(ref);

  return (
    <div className="w-full max-w-[1000px] bg-[#262626] overflow-hidden px-4 py-2 h-[40px] flex items-center">
      <div
        ref={ref}
        className={`h-[5px] bg-[#D101D5] relative flex items-center ${
          isVisible ? "opacity-100" : "opacity-0"
        } transition-opacity ease-in duration-1000`}
        style={{ width: `${progress}%` }}
      >
        <div className="w-[20px] h-[20px] bg-[#D101D5] rounded-full absolute right-0" />
      </div>
    </div>
  );
};

export default ProgressBar;

//Funcion para saber en que momento el usuario arranca a ver un elemento en el dom
function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    observer.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}
