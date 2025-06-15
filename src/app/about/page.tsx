'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';


export default function About() {
  return (
    <div>
      
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-12"
          >
            Who We Are
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image
                src="/about-image.jpg"
                alt="Event Planning"
                width={500}
                height={300}
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg"
            >
              <p className="text-white leading-relaxed">
                At HR Hashmi Events, we specialize in creating memorable experiences. From intimate gatherings to grand celebrations, our team brings creativity, passion, and meticulous planning to every event.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    
    </div>
  );
}