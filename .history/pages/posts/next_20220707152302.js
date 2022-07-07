import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

import savannah from '../../public/savannah.jpg'

import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Next() {
  return (
    <>

      <Head>
        
      </Head>

      <motion.main className="min-h-screen">
          <div className="absolute top-0 bottom-0 left-0 right-0 m-auto w-fit h-fit">
            <Header />
            <div className="w-[900px] h-[430px] flex justify-between">
              <Image src={savannah}
                alt="Photo of author"
                width={608}
                height={427}
                blurDataURL={savannah}
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
    </>
  )
}
