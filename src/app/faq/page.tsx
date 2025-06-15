import Head from 'next/head';


const FAQ: React.FC = () => {
  return (
    <div>
      <Head>
        <title>FAQ - Hashmi Events</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <section id="faq" className="min-h-screen bg-[#F3E5F5] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#6A1B9A] mb-4">Frequently Asked Questions</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-[#6A1B9A]">What types of events do you manage?</h3>
            <p className="text-lg text-gray-700">We manage weddings, corporate events, team-building activities, and private parties.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-[#6A1B9A]">How can I book an event?</h3>
            <p className="text-lg text-gray-700">Use our booking form on the Booking page, and we’ll contact you promptly.</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-[#6A1B9A]">What is your cancellation policy?</h3>
            <p className="text-lg text-gray-700">Cancellations are subject to terms discussed during booking. Contact us for details.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;