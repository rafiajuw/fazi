import Head from 'next/head';
import Image from 'next/image';
import NavBar from '@/app/components/NavBar';

const Gallery: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Gallery - Hashmi Events</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <NavBar />
      <section id="gallery" className="min-h-screen bg-[#F3E5F5] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#6A1B9A] mb-8 text-center">Our Event Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <div key={item} className="relative">
                <Image
                  src={`/gallery/event${item}.jpg`}
                  alt={`Event ${item}`}
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover rounded hover:opacity-80 transition"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;