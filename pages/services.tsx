
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const packages = [
  {
    title: 'Starter Stream Package',
    price: '$350',
    features: [
      'Single Camera Setup',
      'Live Streaming to One Platform',
      'Basic Graphics Overlay',
      'Up to 2 Hours of Streaming'
    ]
  },
  {
    title: 'Pro Stream Package',
    price: '$600',
    features: [
      'Multi-Camera Setup',
      'Simulcast to Multiple Platforms',
      'Custom Graphics & Branding',
      'On-site Technician',
      'Up to 3 Hours of Streaming'
    ]
  },
  {
    title: 'Ultimate Experience',
    price: '$950+',
    features: [
      'Everything in Pro Package',
      'Drone Footage or 360 Cam Add-On',
      'Custom Editing After Event',
      'Interactive Audience Integration',
      'Up to 5 Hours Coverage'
    ]
  }
];

export default function Services() {
  return (
    <div>
      <Head>
        <title>Our Services | TAP</title>
      </Head>
      <Navbar />
      <main className="bg-gray-50 px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">Service Packages</h1>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition">
              <h2 className="text-2xl font-bold mb-4">{pkg.title}</h2>
              <p className="text-3xl font-extrabold text-purple-700">{pkg.price}</p>
              <ul className="mt-4 space-y-2">
                {pkg.features.map((f, j) => (
                  <li key={j} className="text-gray-700">• {f}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
