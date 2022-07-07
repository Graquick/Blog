import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

import profile from '../public/profile.png'
import photo1 from '../public/photo-1.png'
import photo2 from '../public/photo-2.png'

import Footer from "../components/Footer";
import Header from "../components/Header";

const photos = [
    { id: 1, title: 'About', src: photo1, desc: "This blog site is built with Next.js and designed by Figma. This website includes photos and posts related to my work.", desc2: "This blog site is built with Next.js and designed by Figma. This website includes photos and posts related to my work."  },
    { id: 2, title: 'Photos', src: photo2, desc: "This blog site is built with Next.js and designed by Figma. This website includes photos and posts related to my work.", desc2: "This blog site is built with Next.js and designed by Figma. This website includes photos and posts related to my work." }
]

const layInfo = {
    fixed: "absolute bottom-[4rem] right-0 m-auto flex flex w-[230px] justify-between"
}

export default function Photos() {
  return (
    <>
      <motion.main className="min-h-screen flex flex-col items-center justify-center">
        <Header />
        <div className="w-[900px] h-fit flex flex-col relative">
            <div className="self-start">
                {photos.map((img, i) => (
                    <div key={i} className="mb-8 relative">
                        <Image src={img.src}
                        alt="Image"
                        width={608}
                        height={427}
                        blurDataURL={img.src}
                        placeholder="blur"
                        priority
                        />
                        <div className="absolute top-0 -right-[18rem] w-[230px] flex flex-col gap-12 text-justify text-[1rem]">
                            <p>{img.desc}</p>
                            <p>{img.desc2}</p>
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
