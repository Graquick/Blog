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

export default function Markdown() {
  return (
    <>

      <Head>

      </Head>

      <motion.main className="min-h-screen">
          <div className="absolute top-0 bottom-0 left-0 right-0 m-auto w-fit h-fit">
            <div className="w-[900px] h-[430px] flex justify-between">
                
                <Footer />
            </div>
        </div>
      </motion.main>
    </>
  )
}
