import Head from 'next/head';

const Privacy: React.FC = () => {
  return (
    <div>
      <Head>
        <title>Privacy Policy - Hashmi Events</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      <section id="privacy" className="min-h-screen bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#6A1B9A] mb-4">Privacy Policy</h2>
          <p className="text-lg text-gray-700">
            At Hashmi Events, we value your privacy. We collect personal information only for booking and communication purposes.
            Your data is never shared without consent. We use cookies to enhance your experience, as outlined in our cookie policy.
            For inquiries, contact us at privacy@hashmievents.com.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Privacy;