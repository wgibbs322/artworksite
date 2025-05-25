import React from 'react';
import { Link } from 'react-router-dom';
import { Palette, Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-neutral-900 text-neutral-200">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <Palette className="w-6 h-6 mr-2 text-amber-500" />
              <span className="text-xl font-semibold tracking-wider text-white">ArtVision</span>
            </Link>
            <p className="text-neutral-400">
              Showcasing exceptional artificial art pieces that challenge perceptions and inspire imagination.
            </p>
          </div>
          
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="transition-colors duration-300 hover:text-amber-500">Home</Link></li>
              <li><Link to="/gallery" className="transition-colors duration-300 hover:text-amber-500">Gallery</Link></li>
              <li><Link to="/about" className="transition-colors duration-300 hover:text-amber-500">About</Link></li>
              <li><Link to="/contact" className="transition-colors duration-300 hover:text-amber-500">Contact</Link></li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-amber-500" />
                <a href="tel:+19318693909" className="transition-colors duration-300 hover:text-amber-500">+1 931-869-3909</a>
              </li>
              <li className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-amber-500" />
                <a href="tel:+13312899204" className="transition-colors duration-300 hover:text-amber-500">+1 331-289-9204</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-amber-500" />
                <a href="mailto:info@artvision.com" className="transition-colors duration-300 hover:text-amber-500">info@artvision.com</a>
              </li>
            </ul>
          </div>
          
          <div className="col-span-1">
            <h3 className="mb-4 text-lg font-semibold text-white">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="p-2 text-white transition-colors duration-300 rounded-full hover:text-amber-500">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 text-white transition-colors duration-300 rounded-full hover:text-amber-500">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="p-2 text-white transition-colors duration-300 rounded-full hover:text-amber-500">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            
            <div className="mt-6">
              <h4 className="mb-2 text-sm font-medium text-white">Subscribe to our newsletter</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="w-full px-3 py-2 text-sm bg-neutral-800 border-0 rounded-l-md focus:outline-none focus:ring-1 focus:ring-amber-500"
                />
                <button className="px-4 py-2 text-sm text-white bg-amber-700 rounded-r-md hover:bg-amber-600">
                  Join
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-8 mt-8 text-sm text-center border-t border-neutral-800">
          <p>&copy; {new Date().getFullYear()} ArtVision. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;