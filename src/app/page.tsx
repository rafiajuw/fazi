'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div>

      <section id="home" className="h-screen flex items-center justify-center bg-gradient-to-r from-pink-500 to-purple-600">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">Crafting Unforgettable Moments</h1>
          <p className="text-lg md:text-xl mb-6 drop-shadow-md max-w-2xl mx-auto">
            HR Hashmi Events transforms your vision into reality with elegance, creativity, and precision.
          </p>
          <Link
            href="/services"
            className="inline-block bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold hover:bg-pink-500 transition-all duration-300"
          >
            Plan Your Event
          </Link>
        </motion.div>
      </section>
      
    </div>
  );
}