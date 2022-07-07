import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

const Logo = () => {
    return (
        <Link href="/">
            <div className="flex justify-center gap-2 transition-all duration-150 ease-in-out cursor-pointer w-fit group">
                <div className="text-[1.5rem] font-bold uppercase bg-black text-white w-16 h-16 flex items-end justify-end py-0 px-1 ease-in-out dark:bg-zinc-500 dark:text-zinc-400">bf</div><div className="text-[1.5rem] flex items-end justify-end font-bold uppercase text-black ease-in-out dark:text-zinc-500">
                    blog
                </div>
            </div>
        </Link>
    )
}

const links = [
    { id: 1, title: 'About', href: '/'},
    { id: 2, title: 'Photos', href: '/photos'},
    { id: 3, title: 'Posts', href: '/posts'}
]

const linksMobile = [
    { id: 1, title: 'About', href: '/'},
    { id: 2, title: 'Photos', href: '/photos'},
    { id: 3, title: 'Posts', href: '/posts'}
]

const iconAnim = {
    opened: {
        rotate: 180
    },
    closed: {
        rotate: 0
    }
}

function Header() {
    const [open, setOpen] = useState(false)
    const router = useRouter();
  return (
    <>
        <main className="left-0 m-auto right-0 py-8 w-full mb-8 h-[8rem] flex justify-between items-center">
            <div >
                <Logo />
            </div>

            <nav className="h-fit">
                <ul className="flex w-[230px] justify-between xl:hidden xl:invisible">
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
                <ul className="hidden invisible flex-col gap-2 xl:flex xl:visible">
                    {linksMobile.map((linksM, i) => (
                        <div key={i}>
                            <li className={router.pathname === linksM.href ? "underline-offset-4 underline visible" : {open ? "" : ""}} >
                                <Link href={linksM.href}>
                                    <div className="flex gap-1 items-center cursor-pointer" onClick={() => setOpen(!open)}>   
                                       {linksM.title}{router.pathname === linksM.href && <motion.div variants={iconAnim} animate={open ? "opened" : "closed"}><Icon icon="dashicons:arrow-down-alt2" /></motion.div>}
                                    </div>
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