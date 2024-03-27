"use client";
import Image from "next/image";
import React from "react";
import HeroBg1 from "../../../public/hero-bg.jpg";
import HeroBg2 from "../../../public/hero-bg-2.jpg";
import HeroBg3 from "../../../public/hero-bg-3.jpg";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import { Anton } from "next/font/google";
import { motion } from "framer-motion";
import {HeroBgCarousel} from "./hero-bg-carousel";

const heroBgImages = [HeroBg1.src, HeroBg2.src, HeroBg3.src];

const anton = Anton({ subsets: ['latin'], weight: ['400'] });

export default function Hero() {
  return (
    <section className="sm:h-[55rem] relative mt-[5rem]">
      {/* <Image
        src={HeroBg1}
        alt="BullDog logo"
        quality={95}
        priority={true}
        className="w-full h-full object-cover filter brightness-50 z-[-1]"
        layout="fill"
      /> */}
      <HeroBgCarousel bgUrls={heroBgImages}></HeroBgCarousel>
      <motion.div className="absolute top-0 left-0 h-full flex flex-col justify-center w-[50rem] mx-[17.5rem]"
            initial={{ opacity: 0, x: -100}}
            animate={{ opacity:1, x: 0}}
            transition={{ delay: 0.25}}>
        <div className="bg-[rgba(196,196,196,.15)] px-[0.625rem] py-[0.5rem] w-fit font-medium rounded-sm">
          <h1>Centro de fitness/Gimnasio en Córdoba Capital</h1>
        </div>
        <div>
        <h2 className={`${anton.className} text-[#ffb114] uppercase text-[6.25rem] leading-tight`}>
            Sumate a entrenar a Bulldog Fitness!
          </h2>
        </div>
        <div className="font-medium">
          <h3>¡Te esperamos!</h3>
          <Link href="#" target="_blank" className="flex items-center justify-center gap-2 px-[0.625rem] py-[0.5rem] bg-[#ffb114] w-[12.5rem] h-[3.125rem] mt-5 rounded-xl text-black">
            Sumate
            <BsArrowRight
              className="opacity-70 group-hover:translate-x-1 transition"
            ></BsArrowRight>{" "}
          </Link>
        </div>
      </motion.div>
    </section>
  );
}