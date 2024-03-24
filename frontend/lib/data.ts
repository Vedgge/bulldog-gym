import React from "react";
import BulldogGym from "../public/bulldoggym.png";
import HeroBgImageMA from "../public/hero-bg.jpg";
import HeroBgImageGymMen from "../public/hero-bg-2.jpg";
import HeroBgImageWoman from "../public/hero-bg-3.jpg";

export const contact = [
  {
    title: "Address",
    text: "123 Main Street, Anytown, CA 12345",
  },
];
export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Coaches",
    path: "/coaches",
  },
  {
    name: "Classes",
    path: "/classes",
  },
  {
    name: "Contact",
    path: "/contact",
  },
] as const;

// dataImg.ts

export const dataImg = [
  {
    title: "Bulldog Gym",
    imgUrl: BulldogGym,
  },
  {
    title: "Mohammed Ali",
    imageUrl: HeroBgImageMA,
  },
  {
    title: "Gym Men",
    imageUrl: HeroBgImageGymMen,
  },
  {
    title: "Gym Woman",
    imageUrl: HeroBgImageWoman,
  },
] as const;

export const classesGym = [
  {
    title: "Musculacion",
    path: "/musculacion",
    number: "1",
  },
  {
    title: "Crossfit",
    path: "/crossfit",
    number: "2",
  },
  {
    title: "Functional",
    path: "/functional",
    number: "3",
  },
  {
    title: "Cardiohit",
    path: "/cardiohit",
    number: "4",
  },
  {
    title: "Aerobox",
    path: "/aerobox",
    number: "5",
  },
//   {
//     title: "GAP",
//   },
//   {
//     title: "Yoga",
//   },
//   {
//     title: "Zumba",
//   },
//   {
//     title: "Pilates",
//   },
] as const;
