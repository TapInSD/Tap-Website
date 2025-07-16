
import { motion } from 'framer-motion';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <div>
      <Head>
        <title>About TAP | The Artist Playground</title>
      </Head>
      <Navbar />
      <main className="px-6 py-20 bg-white text-black">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>
          <p className="text-lg leading-relaxed">
            TAP (The Artist Playground) is a mobile-first creative media company rooted in culture, innovation, and purpose. We amplify real voices and help clients tell their stories in compelling ways — whether it’s through a multi-cam livestream, a polished podcast, or a fully interactive 360° tour.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Founded by Tyrone and Tay, TAP brings together vision and versatility. Our mission is simple: make high-quality media accessible, empowering artists, entrepreneurs, and organizations to connect with their audience authentically. Whether you're launching a show, hosting an event, or building your brand — TAP has the tools, talent, and tech to elevate your message.
          </p>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
