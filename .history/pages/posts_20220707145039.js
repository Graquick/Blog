import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

import Footer from "../components/Footer";
import Header from "../components/Header";

const post = [
    {id: 1, title: "Markdown Examples", href: "/", desc: "View examples of all possible Markdown options.", date: "Fri Mar 19 2022"},
    {id: 2, title: "Next.js Pages", href: "/", desc: "Learn more about Next.js pages.", date: "Fri Mar 18 2022"},
]

const layInfo = {
    relaxed: " flex flex w-[230px] justify-between"
}

export default function Photos() {
  return (
    <>
      <motion.main className="min-h-screen">
          <div className="absolute top-0 left-0 bottom-0 right-0 m-auto w-fit h-fit">
            <Header />
            <div className="w-[900px] h-[430px] flex justify-between">
              <Image src={profile}
                alt="Photo of author"
                width={608}
                height={427}
                blurDataURL={profile}
                placeholder="blur"
                priority
              />

              <div className="w-[230px] h-full flex flex-col justify-between">
                <h1 className="text-[2.25rem] font-bold leading-10">Brima Freeman</h1>
                <div className="h-[215px] flex flex-col justify-between">
                  <p className="text-[.9rem]">Hey, I&apos;m a Frontend Developer based in Finland. I enjoy working with Next.js and crafting beautiful front-end experiences.
                  </p>
                  <p className="text-[.9rem]">
                  This blog site is built with Next.js and designed by Figma. This website includes photos and posts related to my work.
                  </p>
                </div>
                <Footer />
              </div>
            </div>
        </div>
      </motion.main>
      <motion.main className="min-h-screen flex flex-col items-center justify-center">
        <Header />
        <div className="w-[900px] h-[500px] flex flex-col items-start justify-between mb-12 relative">
            <div>
                {post.map((post, i) => (
                    <div key={i} className="mb-12">
                        <div className="flex flex-col gap-2">
                            <Link href={post.href}>
                                <motion.h2 className="font-bold text-[1.5rem] cursor-pointer w-fit" whileHover={{ scale: 1.125, color: "#0ea5e9", x: -10, y: -10 }} whileTap={{ scale: .5 }}>{post.title}</motion.h2>
                            </Link>
                            <p className="font-medium text-[1.2rem] cursor-default">{post.desc}</p>
                            <span className="font-medium text-neutral-400 cursor-default">{post.date}</span>
                        </div>
                    </div>
                ))}
            </div>
            <Footer lay={ layInfo } />
        </div>
      </motion.main>
    </>
  )
}
