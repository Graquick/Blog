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

const post = [
    {id: 1, title: "Markdown Examples", author: "Brima Freeman,", date: "Fri Mar 19 2022", tag: "web development", main: <div>
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
            <blockquote cite="http://www.worldwildlife.org/who/index.html">
            For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
            </blockquote>
        </div>
        <div>
            <h2>Lists</h2>
            <ul>
                Unordered
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
            </ul>
            <ol>
                Ordered
                <li>Lorem ipsum dolor sit amet</li>
                <li>Consectetur adipiscing elit</li>
                <li>Integer molestie lorem at massa</li>
            </ol>
        </div>
        <div>
            <h2>Tables</h2>
            <table>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                </tr>
                <tr>
                    <td>Centro comercial Moctezuma</td>
                    <td>Francisco Chang</td>
                    <td>Mexico</td>
                </tr>
                <tr>
                    <td>Ernst Handel</td>
                    <td>Roland Mendel</td>
                    <td>Austria</td>
                </tr>
                <tr>
                    <td>Island Trading</td>
                    <td>Helen Bennett</td>
                    <td>UK</td>
                </tr>
                <tr>
                    <td>Laughing Bacchus Winecellars</td>
                    <td>Yoshi Tannamuri</td>
                    <td>Canada</td>
                </tr>
                <tr>
                    <td>Magazzini Alimentari Riuniti</td>
                    <td>Giovanni Rovelli</td>
                    <td>Italy</td>
                </tr>
            </table>
        </div>
    </div>}
]

export default function Markdown() {
  return (
    <>

      <Head>

      </Head>

      <motion.main className="min-h-screen">
          <div className="absolute top-32 left-0 right-0 m-auto w-fit h-fit">
            <div className="w-[900px] h-[430px] flex justify-between">
                {post.map((pos, i) => (
                    <div key={i}>
                        <div className="flex flex-col gap-8">
                            <h1 className="text-[3rem] font-[700]">{pos.title}</h1>
                            <div className="flex justify-between w-[900px] font-medium text-neutral-500">
                                <div className="flex gap-4 font-medium text-neutral-500">   
                                <span>{pos.author}</span>
                                <span>{pos.date}</span>
                                <span className="ml-4 px-2 bg-slate-300 rounded-full relative before:content-[''] before:absolute before:-left-3 before:top-2 before:w-2 before:h-2 before:bg-slate-400 before:rounded-full">{pos.tag}</span>
                                </div>
                                <Link href="/">
                                    <span className="underline cursor-pointer underline-offset-4">Back</span>
                                </Link>
                            </div>
                        </div>
                        {pos.main}
                    </div>
                ))}

              <div className="w-[230px] h-full flex flex-col justify-between">
                <Footer />
              </div>
            </div>
        </div>
      </motion.main>
    </>
  )
}
