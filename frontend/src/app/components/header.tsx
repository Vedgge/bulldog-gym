"use client";

import Image from "next/image";
import React from "react";
import bulldogGymLogo from "../../../public/bulldoggym.png";
import Link from "next/link";
import { links } from "../../../lib/data";
import { motion } from "framer-motion";
import { FaUserAlt } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";

export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 w-full bg-black px-5 sm:px-[5rem] flex items-center justify-between"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          type: "spring",
          stiffness: 380,
          damping: 30,
        }}
      >
        <div className="sm:w-[14.5rem] sm:h-[4.5rem] relative sm:my-3">
          <Image
            src={bulldogGymLogo}
            alt="BullDog logo"
            fill={true}
            quality={95}
            priority={true}
          ></Image>
        </div>
        <nav>
          <ul className="flex flex-wrap items-center justify-center text-[0.9rem] uppercase sm:w-[initial] sm:flex-nowrap sm:gap-5 font-medium">
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
            <li className="p-3">
              <a href="">
                <FaCircleUser className="text-[#ffb114] text-3xl hover:text-[#ffd277] transition" />
              </a>
            </li>
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
