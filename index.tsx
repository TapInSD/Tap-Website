import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>TAP | The Artist Playground</title>
      </Head>
      <Navbar />
      <main className="text-center px-6 py-20 bg-black text-white">
        <motion.h1 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          We Bring the Studio to You
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ delay: 0.5 }}
          className="text-xl max-w-2xl mx-auto mb-8"
        >
          Mobile live streaming, podcast production, artist development & immersive media — from San Diego to the world.
        </motion.p>
        <motion.a 
          href="/contact" 
          className="bg-purple-600 hover:bg-purple-800 text-white font-bold py-3 px-6 rounded-full"
          whileHover={{ scale: 1.05 }}
        >
          Book Now
        </motion.a>
      </main>
      <Footer />
    </div>
  );
}