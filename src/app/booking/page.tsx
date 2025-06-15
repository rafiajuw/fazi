'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaWhatsapp } from 'react-icons/fa';

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  message: string;
}

export default function Booking() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitMessage, setSubmitMessage] = useState<string>('');

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage('Your booking request has been sent successfully!');
        setFormData({ name: '', email: '', phone: '', eventType: '', message: '' });
      } else {
        setSubmitMessage('Failed to send your request. Please try again.');
      }
    } catch {
      setSubmitMessage('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-pink-200 to-purple-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-3xl md:text-4xl font-bold text-center text-purple-800 mb-12"
        >
          Get in Touch
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            onSubmit={handleSubmit}
            className="space-y-4 bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg"
          >
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Name"
              className="w-full p-3 border border-b-fuchsia-300 bg-transparent text-fuchsia-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Your Email"
              className="w-full p-3 border border-fuchsia-300 bg-transparent text-fuchsia-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Your Phone"
              className="w-full p-3 border border-fuchsia-300 bg-transparent text-fuchsia-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleInputChange}
              className="w-full p-3 border border-fuchsia-300 bg-transparent text-fuchsia-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            >
              <option value="" className="text-gray-400">
                Select Event Type
              </option>
              <option value="Wedding" className="text-black">
                Wedding
              </option>
              <option value="Corporate" className="text-black">
                Corporate
              </option>
              <option value="Party" className="text-black">
                Party
              </option>
            </select>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              placeholder="Your Message"
              className="w-full p-3 border border-fuchsia-300 bg-transparent text-fuchsia-950 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              rows={4}
              required
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-pink-500 text-fuchsia-950 p-3 rounded-lg font-semibold hover:bg-purple-600 transition-colors duration-300"
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
            {submitMessage && (
              <p
                className={`text-center ${
                  submitMessage.includes('successfully') ? 'text-green-400' : 'text-red-400'
                }`}
              >
                {submitMessage}
              </p>
            )}
          </motion.form>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-4 bg-white/10 backdrop-blur-md p-6 rounded-lg shadow-lg"
          >
            <div className="flex items-center space-x-3">
              <FaPhone className="text-pink-500" />
              <span className="text-fuchsia-950">+92 3002119814</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-pink-500" />
              <span className="text-fuchsia-950">info@hashmievents.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <FaWhatsapp className="text-pink-500" />
              <a href="https://wa.me/03002119814" className="text-fuchsia-950 hover:text-pink-300">
                Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}