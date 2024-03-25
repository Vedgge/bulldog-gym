"use client";

import Image from "next/image";
import React from "react";
import ReadyBgImg from "../../../public/ready-bg (2).png";
import { sendEmail } from "../../../actions/sendEmail";
import { motion } from "framer-motion"
import toast from "react-hot-toast";
import BtnSend from "./btn-send";

export default function Ready() {
  return (
    <motion.section className="relative sm:h-[60rem] w-full">
      <Image
        src={ReadyBgImg}
        alt="Ready"
        quality={95}
        priority={true}
        className="w-full h-full object-cover filter brightness-50 z-[-1]"
        layout="fill"
      ></Image>
      <div className="flex justify-center items-center">
        <div>
        <p>Podemos ponernos en contacto mediante este formulario o visitando nuestra sucursal física</p>
        {/* <Map></Map> */}
        </div>
        <div>
          <form className="flex flex-col mt-10 text-black" action={async (formData) => {
            const { data, error } = await sendEmail(formData);
            if (error) {
              console.log(error);
              return;
            } toast.success('Email enviado correctamente')
          }}>
            <input type="email" className="h-14 px-4 rounded-lg border border-black/40 bg-white/80 focus:bg-white/100 transition-all outline-none" placeholder="Tu email" name="senderEmail" required maxLength={500} />
            <textarea className="h-52 my-3 rounded-lg border border-black/40 p-4 bg-white/80 focus:bg-white/100 transition-all outline-none" name="message" placeholder="Tu mensaje" required maxLength={5000}></textarea>
            <BtnSend></BtnSend>
          </form>
        </div>
      </div>
    </motion.section>
  );
}
