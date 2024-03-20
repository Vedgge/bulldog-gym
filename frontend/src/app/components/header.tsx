"use client";

import Image from "next/image";
import React from "react";
import bulldogGymLogo from "../../../public/bulldoggym.png";
import Link from "next/link";
import { links } from "../../../lib/data";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="z-[999] relative">
      <div className="fixed top-0 w-full bg-black sm:min-h px-5 sm:px-[5rem] flex items-center justify-between">
        <div className="sm:w-[17.5rem] sm:h-[5.5rem] h-full relative sm:my-5">
          <Image
            src={bulldogGymLogo}
            alt="BullDog logo"
            fill={true}
            quality={95}
            priority={true}
          ></Image>
        </div>
        <nav>
          <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <motion.li
                className="flex items-center justify-center relative"
                key={link.path}
              >
                <Link
                  className="text-[#ffb114] flex w-full items-center p-3 hover:text-[#ffd277] transition"
                  href={link.path}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
