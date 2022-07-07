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
          <div className="absolute top-0 bottom-0 left-0 right-0 m-auto w-fit h-fit">
            <div className="w-[900px] h-[430px] flex justify-between">
                {post.map((pos, i) => (
                    <div key={i}>
                        <div>
                            <h1 className="text-[3rem] font-bold">{pos.title}</h1>
                            <div>
                                <p></p>
                            </div>
                        </div>
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
