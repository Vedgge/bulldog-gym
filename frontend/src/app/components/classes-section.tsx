"use client";

import Image from "next/image";
import React from "react";
import ClassSectionImg from "../../../public/top-b-dark-bg.webp";
import { Anton } from "next/font/google";
import { classesGym } from "../../../lib/data";
import { motion } from "framer-motion";
import Link from "next/link";

const anton = Anton({ subsets: ["latin"], weight: ["400"] });

const fadeInVariantesAnimacion = {
  initial: {
    opacity: 0,
    x: -100,
  },
  animate: (title: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.05 * title,
    },
  }),
};

export default function Classes() {
  return (
    <section className="p-[100px] sm:h-[60rem] relative">
      <Image
        src={ClassSectionImg}
        alt="BullDog logo"
        quality={95}
        priority={true}
        className="w-full h-full object-cover filter brightness-50 z-[-1]"
        layout="fill"
      />
      <div className="flex flex-col gap-3 w-[37.5rem] mx-[12rem] items-start text-left relative">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          whileInView="animate"
          viewport={{
              once: true,
          }}
        >
          <h2
            className={`${anton.className} uppercase text-[#ffb114] text-[100px] leading-tight`}
          >
            Bulldog Gym
          </h2>
          <p>
            Con más de 10 años forjando leyendas y transformando vidas, nos
            enorgullecemos de ser más que un gimnasio: somos una comunidad, una
            familia que crece junta, motivada por la pasión y el deseo de
            superación.
          </p>
        </motion.div>
        <div className="w-full">
          <ul className="flex flex-col gap-3 mt-[3rem]">
            {classesGym.map((link, title) => (
              <motion.li
                key={link.title}
                variants={fadeInVariantesAnimacion}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={title}
              >
                <Link
                  href={link.path}
                  className="flex gap-5 items-center mb-[1rem]"
                >
                  <div className="w-[2.7rem] h-[2.7rem] border border-[#ffb114] text-[#ffb114] rounded-full flex justify-center items-center">
                    {link.number}
                  </div>
                  {link.title}
                </Link>
              </motion.li>
            ))}{" "}
          </ul>
          <div className="bg-gray-200/20 w-full h-[1px] rounded-full hidden sm:block mt-[2rem] mb-[3rem]"></div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileInView="animate"
            viewport={{
                once: true,
            }}
          >
            <a
              href=""
              className="font-medium py-[15px] px-[30px] rounded-xl border border-[#ffb114] hover:bg-[#ffb114] hover:text-black duration-200 transition-all"
            >
              Ver todas las clases
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
