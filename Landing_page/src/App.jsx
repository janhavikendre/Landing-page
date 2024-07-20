import React from 'react';

const Header = () => (
  <header className="bg-gray-800 text-white py-4 px-8">
    <h1 className="text-2xl font-bold">Janhavi's Software</h1>
  </header>
);

const Footer = () => (
  <footer className="bg-gray-800 text-white py-4 px-8">
    <p>&copy; {new Date().getFullYear()} Janhavi's Software. All rights reserved.</p>
  </footer>
);

const HeroSection = () => (
  <section className="bg-white py-16 px-8 text-center">
    <h2 className="text-4xl font-bold mb-4">Welcome to Janhavi's Software</h2>
    <p className="text-lg mb-8">
      We provide the best solutions for your business. Our team is dedicated to
      ensuring your success.
    </p>
    <button className="bg-blue-500 text-white py-2 px-4 rounded">Learn More</button>
  </section>
);


const FeaturesSection = () => (
  <section className="bg-gray-100 py-16 px-8">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-3xl font-bold mb-8">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-2xl font-bold mb-2">Custom Software Development</h3>
          <p>
            Tailor-made solutions to meet your business needs, from initial concept to deployment.
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-2xl font-bold mb-2">Cloud Integration</h3>
          <p>
            Seamless integration with cloud services to enhance scalability and performance.
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-2xl font-bold mb-2">24/7 Support</h3>
          <p>
            Our dedicated support team is available around the clock to assist you with any issues.
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-2xl font-bold mb-2">Data Security</h3>
          <p>
            Robust security measures to protect your sensitive data and ensure compliance.
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-2xl font-bold mb-2">AI and Machine Learning</h3>
          <p>
            Innovative AI solutions to drive insights and automation in your business processes.
          </p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-2xl font-bold mb-2">User-Friendly Interfaces</h3>
          <p>
            Intuitive and engaging interfaces designed to enhance user experience and productivity.
          </p>
        </div>
      </div>
    </div>
  </section>
);


const CTASection = () => (
  <section className="bg-blue-500 text-white py-16 px-8 text-center">
    <h2 className="text-3xl font-bold mb-4">Get Started with Janhavi's Software Today</h2>
    <p className="text-lg mb-8">
      Join our community and start improving your business now.
    </p>
    <button className="bg-white text-blue-500 py-2 px-4 rounded">Sign Up</button>
  </section>
);

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
