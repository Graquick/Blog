import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const Logo = () => {
    return (
        <div className="w-fit flex justify-center gap-2 cursor-pointer transition-all duration-150 ease-in-out group">
            <div className="text-[1.5rem] font-bold uppercase bg-black text-white w-16 h-16 flex items-end justify-end py-0 px-1 ease-in-out dark:bg-zinc-500 dark:text-zinc-400">bf</div><div className="text-[1.5rem] flex items-end justify-end font-bold uppercase text-black ease-in-out dark:text-zinc-500">
                blog
            </div>
        </div>
    )
}

const links = [
    { id: 1, title: 'About', href: '/'},
    { id: 2, title: 'Photos', href: '/photos'},
    { id: 3, title: 'Posts', href: '/posts'}
]

function Header() {
    const router = useRouter();
  return (
    <>
        <main className="absolute left-0 m-auto right-0 p-8 bg-violet-300 w-[964px] mb-8 h-[8rem] flex justify-between items-center">
            <div >
                <Logo />
            </div>

            <nav className="h-fit">
                <ul className="flex w-[230px] justify-between">
                    {links.map((links, i) => (
                        <div key={i}>
                            <li className={router.pathname === links.href ? "underline-offset-4 underline" : ""}>
                                <Link href={links.href}>
                                    {links.title}
                                </Link>
                            </li>
                        </div>
                    ))}
                </ul>
            </nav>
        </main>
    </>
  )
}

export default Header