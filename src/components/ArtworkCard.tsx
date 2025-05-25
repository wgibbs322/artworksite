import React from 'react';
import { Link } from 'react-router-dom';
import { Artwork } from '../data/artworks';

interface ArtworkCardProps {
  artwork: Artwork;
}

const ArtworkCard: React.FC<ArtworkCardProps> = ({ artwork }) => {
  return (
    <div className="overflow-hidden transition-all duration-300 bg-white rounded-lg shadow-md artwork-card hover:shadow-xl">
      <Link to={`/gallery/${artwork.id}`}>
        <div className="relative overflow-hidden h-72">
          <img 
            src={artwork.imageUrl} 
            alt={artwork.title} 
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
          />
        </div>
      </Link>
      
      <div className="p-5">
        <h3 className="mb-1 text-xl font-medium text-amber-900">{artwork.title}</h3>
        <p className="mb-3 text-neutral-600">{artwork.artist}</p>
        <p className="text-sm text-neutral-500 line-clamp-2">{artwork.description}</p>
        
        <div className="flex items-center justify-between mt-4">
          {artwork.price && (
            <p className="font-medium text-amber-800">${artwork.price.toLocaleString()}</p>
          )}
          <Link 
            to={`/gallery/${artwork.id}`} 
            className="text-sm font-medium transition-colors duration-300 text-amber-700 hover:text-amber-900"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArtworkCard;