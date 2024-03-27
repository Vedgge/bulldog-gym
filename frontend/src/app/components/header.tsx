"use client";
import Image from "next/image";
import React, { useState } from "react";
import bulldogGymLogo from "../../../public/bulldoggym.png";
import Link from "next/link";
import { links } from "../../../lib/data";
import { motion } from "framer-motion";
import AccountBtn from "./btn-account";

export default function Header() {
  const [hoverLink, sethoverLink] = useState<number | null>(null);

  const handleLinkHoverStart = (linkIndex: number) => {
    sethoverLink(linkIndex);
  };

  const handleLinkHoverEnd = () => {
    sethoverLink(null);
  };

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 w-full bg-black px-5 sm:px-[5rem] flex items-center justify-between"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 380, damping: 30 }}
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
            {links.map((link, index) => (
              <motion.li
                className="flex items-center justify-center relative"
                key={link.path}
                onHoverStart={() => handleLinkHoverStart(index)}
                onHoverEnd={handleLinkHoverEnd}
              >
                <Link
                  className="text-[#ffb114] flex w-full items-center p-3 hover:text-[#ffd277] transition"
                  href={link.path}
                >
                  {link.name}
                </Link>
                {hoverLink === index && link.dropdown && (
                  <motion.div
                    className="absolute top-full left-0 bg-black p-4 text-white text-wrap w-max flex flex-col gap-2 rounded-xl"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.dropdown.map((dropdownItem, index: number) => (
                      <Link
                        key={index}
                        href={dropdownItem.path}
                        className="block hover:text-[#ffd277] transition"
                      >
                        {dropdownItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </motion.li>
            ))}
            <li className=" p-5 flex items-center justify-center relative">
              <AccountBtn></AccountBtn>
            </li>
          </ul>
        </nav>
      </motion.div>
    </header>
  );
}
