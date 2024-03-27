import React from "react";

export const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
    dropdown: [
      {
        name: "Who we are",
        path: "/who-we-are",
      },
      {
        name: "Virtual tour",
        path: "/virtual-tour",
      },
    ],
  },
  {
    name: "Coaches",
    path: "/coaches",
    dropdown: [
      {
        name: "Personal Trainers",
        path: "/personal-trainers",
      },
      {
        name: "Group Classes",
        path: "/group-classes",
      },
      {
        name: "Nutrition",
        path: "/nutrition",
      },
      {
        name: "Wanna work with us?",
        path: "/wanna-work-with-us",
      },
    ],
  },
  {
    name: "Classes",
    path: "/classes",
    dropdown: [
      {
        name: "Classes Overview",
        path: "/classes-overview",
      },
      {
        name: "Schedule",
        path: "/schedule",
      },
    ],
  },
  {
    name: "Contact",
    path: "/contact",
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
