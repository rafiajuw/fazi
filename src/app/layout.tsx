
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/app/components/NavBar'; // Corrected path and case
import Footer from '@/app/components/footer'; // Corrected path and case

export const metadata: Metadata = {
  title: 'Hashmi Events',
  description: 'Premier events management in Pakistan',
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-gradient-to-b from-pink-100 to-purple-200">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}