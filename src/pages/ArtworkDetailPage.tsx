import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getArtworkById, Artwork, artworks } from '../data/artworks';
import { ArrowLeft, Tag, Clock, Ruler, PaintBucket } from 'lucide-react';

const ArtworkDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [artwork, setArtwork] = useState<Artwork | null>(null);
  const [relatedArtworks, setRelatedArtworks] = useState<Artwork[]>([]);
  
  useEffect(() => {
    if (id) {
      const foundArtwork = getArtworkById(parseInt(id));
      
      if (foundArtwork) {
        setArtwork(foundArtwork);
        document.title = `${foundArtwork.title} | ArtVision Gallery`;
        
        // Get related artworks (same category, excluding current)
        const related = artworks
          .filter(art => art.category === foundArtwork.category && art.id !== foundArtwork.id)
          .slice(0, 3);
        setRelatedArtworks(related);
      }
    }
  }, [id]);

  if (!artwork) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-neutral-50">
        <div className="p-8 text-center">
          <h2 className="mb-4 text-2xl text-neutral-800">Artwork not found</h2>
          <Link to="/gallery" className="text-amber-700 hover:text-amber-900">
            Return to Gallery
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-16 bg-neutral-50">
      <div className="container px-4 mx-auto">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link to="/gallery" className="flex items-center text-amber-700 hover:text-amber-900">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Gallery
          </Link>
        </div>
        
        {/* Artwork Details */}
        <div className="flex flex-wrap -mx-4">
          {/* Artwork Image */}
          <div className="w-full px-4 mb-8 md:w-1/2 lg:w-3/5 md:mb-0">
            <div className="overflow-hidden bg-white rounded-lg shadow-md">
              <img 
                src={artwork.imageUrl} 
                alt={artwork.title}
                className="object-contain w-full h-auto max-h-[600px]"
              />
            </div>
          </div>
          
          {/* Artwork Info */}
          <div className="w-full px-4 md:w-1/2 lg:w-2/5">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h1 className="mb-2 text-3xl font-medium text-amber-900">{artwork.title}</h1>
              <h2 className="mb-4 text-xl text-neutral-600">by {artwork.artist}</h2>
              
              <div className="mb-6 text-neutral-700">
                <p>{artwork.description}</p>
              </div>
              
              <div className="py-4 mb-6 border-t border-b border-neutral-200">
                <div className="flex items-center mb-3">
                  <Tag className="w-5 h-5 mr-3 text-amber-700" />
                  <span className="mr-2 font-medium text-neutral-700">Category:</span>
                  <span className="text-neutral-600">{artwork.category}</span>
                </div>
                
                <div className="flex items-center mb-3">
                  <Clock className="w-5 h-5 mr-3 text-amber-700" />
                  <span className="mr-2 font-medium text-neutral-700">Year:</span>
                  <span className="text-neutral-600">{artwork.year}</span>
                </div>
                
                {artwork.dimensions && (
                  <div className="flex items-center mb-3">
                    <Ruler className="w-5 h-5 mr-3 text-amber-700" />
                    <span className="mr-2 font-medium text-neutral-700">Dimensions:</span>
                    <span className="text-neutral-600">{artwork.dimensions}</span>
                  </div>
                )}
                
                {artwork.medium && (
                  <div className="flex items-center">
                    <PaintBucket className="w-5 h-5 mr-3 text-amber-700" />
                    <span className="mr-2 font-medium text-neutral-700">Medium:</span>
                    <span className="text-neutral-600">{artwork.medium}</span>
                  </div>
                )}
              </div>
              
              {artwork.price && (
                <div className="mb-6">
                  <span className="text-2xl font-medium text-amber-800">
                    ${artwork.price.toLocaleString()}
                  </span>
                </div>
              )}
              
              <div className="flex flex-wrap space-x-3">
                <Link 
                  to="/contact" 
                  className="px-6 py-2 mb-3 btn btn-primary"
                >
                  Inquire About This Piece
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Artworks */}
        {relatedArtworks.length > 0 && (
          <div className="mt-16">
            <h3 className="mb-8 text-2xl font-light text-amber-900">You May Also Like</h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedArtworks.map(relatedArtwork => (
                <div key={relatedArtwork.id} className="transition-all duration-300 bg-white rounded-lg shadow-md hover:shadow-lg">
                  <Link to={`/gallery/${relatedArtwork.id}`}>
                    <div className="relative overflow-hidden h-60">
                      <img 
                        src={relatedArtwork.imageUrl} 
                        alt={relatedArtwork.title} 
                        className="object-cover w-full h-full transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h4 className="text-lg font-medium text-amber-900">{relatedArtwork.title}</h4>
                      <p className="text-neutral-600">{relatedArtwork.artist}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ArtworkDetailPage;