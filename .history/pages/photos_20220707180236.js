import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';

import savannah from '../public/savannah.jpg'
import australia from '../public/australia.jpg'

import Footer from "../components/Footer";
import Header from "../components/Header";

const photos = [
    { id: 1, src: savannah, title: 'Savannah', info: "Roadtrip to Kenya", date: "2nd of June, 2022", text: "This blog site is built with Next.js and designed by Figma. This website includes photos and posts related to my work.", text2: "This blog site is built with Next.js and designed by Figma. This website includes photos and posts related to my work.",},
    { id: 2, src: australia, title: 'Ocean Blue', info: "Travel to Australia", date: "2nd of June, 2022", text: "This blog site is built with Next.js and designed by Figma. This website includes photos and posts related to my work.", footer: <Footer /> }
]

const desc = [
    { id: 1, title: 'Savannah', info: "Roadtrip to Kenya", date: "2nd of June, 2022", text: "This blog site is built with Next.js and designed by Figma. This website includes photos and posts related to my work.", text2: "This blog site is built with Next.js and designed by Figma. This website includes photos and posts related to my work.", },
    { id: 2, title: 'Ocean Blue', info: "Travel to Australia", date: "2nd of June, 2022", text: "This blog site is built with Next.js and designed by Figma. This website includes photos and posts related to my work.", footer: <Footer />}
]

const layInfo = {
    fixed: "absolute bottom-[4rem] right-0 m-auto flex flex w-[230px] justify-between"
}

export default function Photos() {
  return (
    <>
      <motion.main className="min-h-screen">
          <div className="absolute top-0 left-0 right-0 m-auto w-fit h-fit">
            <Header />
            <div className="w-[900px] h-fit flex justify-between xl:w-[350px] xl:flex-col xl:gap-8">
              <div>
                {photos.map((img, i) => (
                  <div key={i} className="mb-32">
                      <div>
                        <Image src={img.src} 
                          alt="Img"
                          width={608}
                          height={427}
                          blurDataURL={img.src}
                          placeholder="blur"
                          priority    
                        />
                      </div>
                      
                      <div className="w-[230px] h-[430px] flex flex-col justify-between mb-32 xl:w-full xl:text-center xl:h-[350px]">
                            <div>
                              <h1 className="text-[2rem] font-bold w-fit cursor-default xl:w-full">{img.title}</h1>
                              <p className="font-medium text-[1.2rem] cursor-default">{img.info}</p>
                              <span className="font-medium cursor-default text-neutral-400">{img.date}</span>
                            </div>
                            <div className="h-[240px] flex flex-col justify-between xl:h-[170px] xl:w-[90%] xl:self-center">
                              <p className="text-[1rem] cursor-default text-justify">{img.text}</p>
                              <p className="text-[1rem] cursor-default text-justify">{img.text2}</p>
                            </div>
                            <div className="xl:w-[200px] xl:self-center">{img.footer}</div>
                      </div>
                  </div>
                ))}             
              </div>

              <div>
                {desc.map((desc, i) => (
                  <div key={i} className="w-[230px] h-[430px] flex flex-col justify-between mb-32 xl:w-full xl:text-center xl:h-[350px]">
                    <div>
                      <h1 className="text-[2rem] font-bold w-fit cursor-default xl:w-full">{desc.title}</h1>
                      <p className="font-medium text-[1.2rem] cursor-default">{desc.info}</p>
                      <span className="font-medium cursor-default text-neutral-400">{desc.date}</span>
                    </div>
                    <div className="h-[240px] flex flex-col justify-between xl:h-[170px] xl:w-[90%] xl:self-center">
                      <p className="text-[1rem] cursor-default text-justify">{desc.text}</p>
                      <p className="text-[1rem] cursor-default text-justify">{desc.text2}</p>
                    </div>
                    <div className="xl:w-[200px] xl:self-center">{desc.footer}</div>
                  </div>
                ))}
              </div>

              {/* <div className="w-[230px] h-full flex flex-col justify-between">
                <h1 className="text-[2.25rem] font-bold leading-10">Brima Freeman</h1>
                <div className="h-[215px] flex flex-col justify-between">
                  <p className="text-[.9rem]">Hey, I&apos;m a Frontend Developer based in Finland. I enjoy working with Next.js and crafting beautiful front-end experiences.
                  </p>
                  <p className="text-[.9rem]">
                  This blog site is built with Next.js and designed by Figma. This website includes photos and posts related to my work.
                  </p>
                </div>
                <Footer />
              </div> */}
            </div>
          </div>
      </motion.main>
    </>
  )
}
