import React from 'react'
import BulldogGym from '../public/bulldoggym.png'

export const contact = [
    {
        title: 'Address',
        text: '123 Main Street, Anytown, CA 12345',
    },

]
export const links = [
    {
        name: 'Home',
        path: '/',
    },
    {
        name: 'About',
        path: '/about',
    },
    {
        name: 'Coaches',
        path: '/coaches',
    },
    {
        name: 'Classes',
        path: '/classes',
    },
    {
        name: 'Contact',
        path: '/contact',
    },
] as const

// dataImg.ts

export const dataImg = [
    {
        title: "Bulldog Gym",
        imgUrl: BulldogGym,
    },
] as const
