import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen">
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/70 to-neutral-900/50">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1568607/pexels-photo-1568607.jpeg')] bg-cover bg-center bg-no-repeat mix-blend-overlay"></div>
      </div>
      
      <div className="relative flex flex-col items-center justify-center h-full px-4 text-center text-white">
        <h1 className="mb-4 text-5xl font-light leading-tight md:text-6xl lg:text-7xl">
          Discover Exceptional<br />
          <span className="font-medium text-amber-400">Artificial Art</span>
        </h1>
        
        <p className="max-w-xl mb-8 text-lg text-neutral-200 md:text-xl">
          Explore our curated collection of unique artworks that blend creativity with advanced techniques to create stunning visual experiences.
        </p>
        
        <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
          <Link to="/gallery" className="flex items-center justify-center px-8 py-3 text-lg transition-all duration-300 border-2 rounded-md shadow-lg btn bg-amber-700 border-amber-700 hover:bg-amber-800">
            View Gallery
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          <Link to="/about" className="px-8 py-3 text-lg transition-all duration-300 border-2 rounded-md shadow-lg btn border-white/80 hover:bg-white/10">
            About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;