"use client";
import Image from "next/image";
import React from "react";
import HeroBg1 from "../../../public/hero-bg.jpg";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function Hero() {
  return (
    <div className="sm:h-[55rem] relative mt-[5rem]">
      <Image
        src={HeroBg1}
        alt="BullDog logo"
        quality={95}
        priority={true}
        className="w-full h-full object-cover filter grayscale z-[-1]"
        layout="fill"
      />
      <div className="absolute top-0 left-0 h-full flex flex-col justify-center w-fit mx-[20rem]">
        <div>
          <h1>Centro de fitness/Gimnasio en Córdoba Capital</h1>
        </div>
        <div>
          <h2>Sumate a entrenar a Bulldog!</h2>
        </div>
        <div>
          <h3>¡Te esperamos!</h3>
          <Link href="#" target="_blank" className="flex items-center gap-2">
            Contacto
            <BsArrowRight
              className="opacity-70 group-hover:translate-x-1 transition"
            ></BsArrowRight>{" "}
          </Link>
        </div>
      </div>
    </div>
  );
}
