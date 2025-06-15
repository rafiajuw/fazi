'use client';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaComment, FaArrowUp } from 'react-icons/fa';
import Link from 'next/link';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-r from-purple-600 to-pink-500 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Social Media Icons */}
        <div className="flex justify-center space-x-6 mb-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-300 transition-colors duration-300"
          >
            <FaFacebookF size={24} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-300 transition-colors duration-300"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-300 transition-colors duration-300"
          >
            <FaTwitter size={24} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-300 transition-colors duration-300"
          >
            <FaYoutube size={24} />
          </a>
        </div>

        {/* Copyright Notice */}
        <p className="text-center text-sm">
          HR Hashmi Events © 2025 – All Rights Reserved
        </p>
      </div>

      {/* Message Us Button */}
      <Link
        href="/booking"
        className="fixed bottom-6 left-6 bg-pink-500 text-white rounded-full p-4 shadow-lg hover:bg-purple-600 transition-colors duration-300 flex items-center space-x-2"
      >
        <FaComment size={20} />
        <span>Message Us</span>
      </Link>

      {/* Back to Top Button */}
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-6 right-6 bg-white text-purple-600 rounded-full p-3 shadow-lg hover:bg-pink-300 hover:text-white transition-colors duration-300"
      >
        <FaArrowUp size={20} />
      </button>
    </footer>
  );
}