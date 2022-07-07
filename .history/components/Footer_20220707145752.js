import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { motion, AnimatePresence } from 'framer-motion';
import { Icon } from '@iconify/react';


const icons = [
    { id: 1, href: '/', icon: 'akar-icons:github-fill'},
    { id: 2, href: '/', icon: 'akar-icons:instagram-fill'},
    { id: 3, href: '/', icon: 'uil:envelopes'},
    { id: 4, href: '/', icon: 'uil:dribbble'},
]

function Footer(props) {
    const router = useRouter();
  return (
    <>
            <div className="h-[24px] flex justify-between">
                {icons.map((ic, i) => (
                    <motion.div key={i} whileHover={{ scale: 1.5 }} whileTap={{ scale: 0.5 }}>
                        <Link href={ic.href}>
                            <Icon icon={ic.icon} className="text-[24px] cursor-pointer"/>
                        </Link>
                    </motion.div>
                ))}
            </div>
                    
            {router.pathname === '/posts' && 
                
            }
    </>
  )
}

export default Footer