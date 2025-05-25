import React from 'react';
import { Link } from 'react-router-dom';
import ArtworkCard from './ArtworkCard';
import { getFeaturedArtworks } from '../data/artworks';

const FeaturedArtworks: React.FC = () => {
  const featuredArtworks = getFeaturedArtworks();

  return (
    <section className="py-20 bg-neutral-50">
      <div className="container px-4 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="section-title">Featured Artworks</h2>
          <p className="max-w-2xl mx-auto text-neutral-600">
            Discover our curated selection of exceptional pieces that showcase the height of artistic innovation and creativity.
          </p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {featuredArtworks.map(artwork => (
            <ArtworkCard key={artwork.id} artwork={artwork} />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            to="/gallery" 
            className="inline-block px-8 py-3 btn btn-primary"
          >
            View All Artworks
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtworks;