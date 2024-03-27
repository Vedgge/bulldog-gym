"use client";
import Image from "next/image";
import React from "react";
import bulldogGymLogo from "../../../public/bulldoggym.png";
import { TbWorld } from "react-icons/tb";
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

export default function Footer() {
  return (
    <footer className="mb-5 text-neutral-300">
      <div className="sm:mx-[10%] border-b sm:pt-[1.875rem] sm:pb-[1.25rem] flex justify-between">
        <div className=" sm:my-3 flex flex-col gap-[2px] text-[#939fa3]">
          <a
            href="/"
            className="sm:h-[10rem] flex relative mb-2"
          >
            <Image
              src={bulldogGymLogo}
              alt="BullDog logo"
              fill={true}
              quality={95}
              priority={true}
            ></Image>
          </a>
          <a
            href="/"
            className="hover:text-[#ffd277] transition-all flex gap-2 items-center pt-[1.875rem]"
          >
            <TbWorld />
            www.bulldoggym.com.ar
          </a>
          <a
            href="/"
            className="hover:text-[#ffd277] transition-all flex gap-2 items-center"
          >
            <FaLocationDot />
            Bv Pte. Umberto Arturo Illia 555, Córdoba Capital
          </a>
          <a
            href="/"
            className="hover:text-[#ffd277] transition-all flex gap-2 items-center"
          >
            <BsFillTelephoneFill />
            +54 351 4334 5943 (Whatsapp)
          </a>
        </div>
        <div>
          <h5 className="text-xl uppercase mb-3">Page Navigation</h5>
          <ul className="text-base text-white/50 flex flex-col gap-1">
            <a href="/" className="hover:text-[#ffd277] transition-all">
              <li>Home</li>
            </a>
            <a href="/about" className="hover:text-[#ffd277] transition-all">
              <li>About</li>
            </a>
            <a href="/coaches" className="hover:text-[#ffd277] transition-all">
              <li>Coaches/Trainers</li>
            </a>
            <a href="/classes" className="hover:text-[#ffd277] transition-all">
              <li>Classes</li>
            </a>
            <a href="/contact" className="hover:text-[#ffd277] transition-all">
              <li>Contact</li>
            </a>
          </ul>
        </div>
        <div>
          <h5 className="text-xl uppercase mb-3">Help</h5>
          <ul className="text-base text-white/50 flex flex-col gap-1">
            <a href="/faq" className="hover:text-[#ffd277] transition-all">
              <li>Frequently Asked Questions (FAQ)</li>
            </a>
            <a href="/privacy-policy" className="hover:text-[#ffd277] transition-all">
              <li>Privacy Policy</li>
            </a>
            <a href="/terms-conditions" className="hover:text-[#ffd277] transition-all">
              <li>Terms and Conditions</li>
            </a>
            <a href="/support" className="hover:text-[#ffd277] transition-all">
              <li>Support</li>
            </a>
          </ul>
        </div>
        <div>
          <h5 className="text-xl uppercase mb-3">Bulldog Gym</h5>
          <ul className="text-base text-white/50 flex flex-col gap-1">
            <a href="/about" className="hover:text-[#ffd277] transition-all">
              <li>About us</li>
            </a>
            <a href="/contact" className="hover:text-[#ffd277] transition-all">
              <li>Contact us</li>
            </a>
            <a href="/blog" className="hover:text-[#ffd277] transition-all">
              <li>Blog</li>
            </a>
            <a href="/careers" className="hover:text-[#ffd277] transition-all">
              <li>Work with us!</li>
            </a>
          </ul>
        </div>
      </div>
      <small className="sm:mx-[10%] mb-2 block text-xs sm:py-1">
        &copy; 2064 Facundo. All rights reserved.
        {/* <p className="text-xs">
          <span className="font-semibold">About this website:</span>{" "}
          programmed with React and Next.Js (App Router and Server Actions),
          TypeScript, Tailwind, Framer Motion, React Email & Toaster, Resend,
          Vercel.
        </p> */}
      </small>
    </footer>
  );
}
