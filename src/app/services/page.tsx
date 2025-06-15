'use client';
import { motion } from 'framer-motion';

export default function Services() {
  return (
    <div>
    
      <section id="services" className="py-20 bg-gradient-to-b from-purple-200 to-pink-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-12"
          >
            Our Services
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Weddings', desc: 'Create your dream wedding with our bespoke planning and stunning decor.' },
              { title: 'Corporate Events', desc: 'Professional events that leave a lasting impression on your guests.' },
              { title: 'Parties', desc: 'From birthdays to anniversaries, we make every moment unforgettable.' },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-pink-500 mb-2">{service.title}</h3>
                <p className="text-white">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    
    </div>
  );
}