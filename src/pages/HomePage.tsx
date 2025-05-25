import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import FeaturedArtworks from '../components/FeaturedArtworks';
import AboutSection from '../components/AboutSection';
import { Link } from 'react-router-dom';
import { Phone, Mail } from 'lucide-react';

const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'ArtVision - Artificial Art Gallery';
  }, []);

  return (
    <div>
      <Hero />
      <FeaturedArtworks />
      <AboutSection />
      
      {/* Call to Action Section */}
      <section className="py-20 text-white bg-amber-900">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-4xl font-light">Ready to Explore Our Collection?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-amber-100">
            Discover our full gallery of exceptional artificial art pieces or contact us to inquire about commissions and availability.
          </p>
          <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            <Link to="/gallery" className="px-8 py-3 text-amber-900 bg-white rounded-md hover:bg-amber-50">
              Browse Gallery
            </Link>
            <Link to="/contact" className="px-8 py-3 border-2 rounded-md border-amber-100 hover:bg-amber-800">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
      
      {/* Contact Info Banner */}
      <section className="py-8 bg-neutral-100">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center justify-center text-center md:justify-between md:text-left">
            <div className="mb-4 md:mb-0">
              <p className="text-neutral-700">
                Have questions about our artwork? We're here to help.
              </p>
            </div>
            <div className="flex flex-wrap justify-center space-x-6">
              <a href="tel:+19318693909" className="flex items-center text-amber-800 hover:text-amber-900">
                <Phone className="w-5 h-5 mr-2" />
                <span>+1 931-869-3909</span>
              </a>
              <a href="mailto:info@artvision.com" className="flex items-center text-amber-800 hover:text-amber-900">
                <Mail className="w-5 h-5 mr-2" />
                <span>info@artvision.com</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;