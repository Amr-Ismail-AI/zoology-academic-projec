import React from 'react'
import Header from '../Header/Header'
import Introduction from './../Introduction/Introduction';
import FacePhylums from '../FacePhylams/FacePhylams';
import { motion } from 'motion/react';
import Footer from '../Footer/Footer';
import About from './../about/About';

export default function HomePage() {
  return (
    <motion.div
    initial={{opacity: 0}}
    animate={{opacity: 1}}
    >
      <Header />
      <Introduction id="introduction" />
      <FacePhylums id="phylums" />
      <About id="about" />
      <Footer id="contant" />
    </motion.div>
  )
}
