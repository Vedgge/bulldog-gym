import React from "react";
import { CiCalendarDate, CiMedal } from "react-icons/ci";
import { GoPerson, GoPlay, GoPlus } from "react-icons/go";

export default function Sections() {
  return (
    <section className="p-[6.25rem] bg-black">
      <div className="sm:w-[82.5rem] mx-auto text-white/80 flex justify-between gap-[2.188rem]">
        {/* REFACTORIZAR ESTO PORQUE ES ALGO QUE PUEDE REPETIRSE EN OTRO COMPONENTE */}
        <a
          href="/ejercicios"
          className="group relative bg-blackborder border border-[#ffb11483] pt-[2.5rem] pb-[3.375rem] px-[1.25rem] flex flex-col text-center items-center justify-between"
        >
          <CiCalendarDate className="text-7xl group-hover:translate-y-1 group-hover:opacity-0 duration-200 ease-in-out transition-all" />
          <h2 className="group-hover:translate-y-1 group-hover:opacity-0 duration-200 ease-in-out transition-all mt-[0.625rem] mb-[1.563rem] text-2xl">
            Horarios
          </h2>
          <div className="group-hover:opacity-0 duration-100 ease-in-out transition-all bg-[#ffb1147e] w-20 h-0.5 rounded-full hidden sm:block"></div>
          <p className="group-hover:-translate-y-24 duration-200 transition-all  mt-[1.25rem] text-sm">
            Acá vas a poder los horarios semanales de todas nuestras clases y
            actividades
          </p>
          <div className="group-hover:w-[10rem] duration-200 ease-in-out transition-all rounded-full bg-black border border-[#ffb1147e] w-[2.5rem] h-[2.5rem] flex items-center justify-center absolute bottom-[-1.25rem]">
          <span className="group-hover:opacity-100 opacity-0 absolute z-[1] text-[#ffb114] duration-200 text-nowrap">Ver horarios</span>
          <GoPlus className="text-[#ffb114] group-hover:opacity-0"/>
          </div>
        </a>
        <a
          href="/ejercicios"
          className="group relative bg-blackborder border border-[#ffb11483] pt-[2.5rem] pb-[3.375rem] px-[1.25rem] flex flex-col text-center items-center justify-between"
        >
          <CiMedal className="text-7xl group-hover:translate-y-1 group-hover:opacity-0 duration-200 ease-in-out transition-all" />
          <h2 className="group-hover:translate-y-1 group-hover:opacity-0 duration-200 ease-in-out transition-all mt-[0.625rem] mb-[1.563rem] text-2xl">
            Membresias
          </h2>
          <div className="group-hover:opacity-0 duration-200 ease-in-out transition-all bg-[#ffb1147e] w-20 h-0.5 rounded-full hidden sm:block"></div>
          <p className="group-hover:-translate-y-24 duration-200 transition-all  mt-[1.25rem] text-sm">
            Acá vas a poder los horarios semanales de todas nuestras clases y
            actividades
          </p>
          <div className="group-hover:w-[12rem] duration-200 ease-in-out transition-all rounded-full bg-black border border-[#ffb1147e] w-[2.5rem] h-[2.5rem] flex items-center justify-center absolute bottom-[-1.25rem]">
          <span className="group-hover:opacity-100 opacity-0 absolute z-[1] text-[#ffb114] duration-200 text-nowrap">Ver membresias</span>
          <GoPlus className="text-[#ffb114] group-hover:opacity-0"/>
          </div>
        </a>
        <a
          href="/ejercicios"
          className="group relative bg-blackborder border border-[#ffb11483] pt-[2.5rem] pb-[3.375rem] px-[1.25rem] flex flex-col text-center items-center justify-between"
        >
          <GoPerson className="text-7xl group-hover:translate-y-1 group-hover:opacity-0 duration-200 ease-in-out transition-all" />
          <h2 className="group-hover:translate-y-1 group-hover:opacity-0 duration-200 ease-in-out transition-all mt-[0.625rem] mb-[1.563rem] text-2xl">
            Entrenamiento Personal
          </h2>
          <div className="group-hover:opacity-0 duration-200 ease-in-out transition-all bg-[#ffb1147e] w-20 h-0.5 rounded-full hidden sm:block"></div>
          <p className="group-hover:-translate-y-24 duration-200 transition-all  mt-[1.25rem] text-sm">
            Acá vas a poder los horarios semanales de todas nuestras clases y
            actividades
          </p>
          <div className="group-hover:w-[13.5rem] duration-200 ease-in-out transition-all rounded-full bg-black border border-[#ffb1147e] w-[2.5rem] h-[2.5rem] flex items-center justify-center absolute bottom-[-1.25rem]">
          <span className="group-hover:opacity-100 opacity-0 absolute z-[1] text-[#ffb114] duration-200 text-nowrap">Ver entrenamientos</span>
          <GoPlus className="text-[#ffb114] group-hover:opacity-0"/>
          </div>
        </a>
        <a
          href="/ejercicios"
          className="group relative bg-blackborder border border-[#ffb11483] pt-[2.5rem] pb-[3.375rem] px-[1.25rem] flex flex-col text-center items-center justify-between"
        >
          <GoPlay className="text-7xl group-hover:translate-y-1 group-hover:opacity-0 duration-200 ease-in-out transition-all" />
          <h2 className="group-hover:translate-y-1 group-hover:opacity-0 duration-200 ease-in-out transition-all mt-[0.625rem] mb-[1.563rem] text-2xl">
            Ejercicios
          </h2>
          <div className="group-hover:opacity-0 duration-200 ease-in-out transition-all bg-[#ffb1147e] w-20 h-0.5 rounded-full hidden sm:block"></div>
          <p className="group-hover:-translate-y-24 duration-200 transition-all  mt-[1.25rem] text-sm">
            Acá vas a poder los horarios semanales de todas nuestras clases y
            actividades
          </p>
          <div className="group-hover:w-[10rem] duration-200 ease-in-out transition-all rounded-full bg-black border border-[#ffb1147e] w-[2.5rem] h-[2.5rem] flex items-center justify-center absolute bottom-[-1.25rem]">
          <span className="group-hover:opacity-100 opacity-0 absolute z-[1] text-[#ffb114] duration-200 text-nowrap">Ver ejercicios</span>
          <GoPlus className="text-[#ffb114] group-hover:opacity-0"/>
          </div>
        </a>
      </div>
    </section>
  );
}
