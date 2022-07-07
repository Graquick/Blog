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

const post = {
    {id: 1, title: "Markdown Examples", author: "Brima Freeman", date: "Fri Mar 19 2022", tag: "web development", main: <div>
        <div>
            <h2>h2 Heading</h2>
            <h3>h3 Heading</h3>
            <h4>h4 Heading</h4>
            <h5>h5 Heading</h5>
            <h6>h6 Heading</h6>
        </div>
        <div>
            <h2>Emphasis</h2>
            <strong>This is bold text</strong>
            <i>This is bold text</i>
            <s>Strikethrough</s>
        </div>
        <div>
            <h2>Blockquotes</h2>
        </div>
    </div>}
}

export default function Markdown() {
  return (
    <>

      <Head>

      </Head>

      <motion.main className="min-h-screen">
          <div className="absolute top-0 bottom-0 left-0 right-0 m-auto w-fit h-fit">
            <div className="w-[900px] h-[430px] flex justify-between">


              <div className="w-[230px] h-full flex flex-col justify-between">
                <Footer />
              </div>
            </div>
        </div>
      </motion.main>
    </>
  )
}
