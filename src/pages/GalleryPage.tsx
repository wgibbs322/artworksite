import React, { useState, useEffect } from 'react';
import ArtworkCard from '../components/ArtworkCard';
import { artworks } from '../data/artworks';
import { Search, Filter } from 'lucide-react';

const GalleryPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredArtworks, setFilteredArtworks] = useState(artworks);
  
  const categories = ['All', ...new Set(artworks.map(artwork => artwork.category))];
  
  useEffect(() => {
    document.title = 'Gallery | ArtVision - Artificial Art Gallery';
    
    let filtered = artworks;
    
    if (searchTerm) {
      filtered = filtered.filter(artwork => 
        artwork.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artwork.artist.toLowerCase().includes(searchTerm.toLowerCase()) ||
        artwork.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory && selectedCategory !== 'All') {
      filtered = filtered.filter(artwork => artwork.category === selectedCategory);
    }
    
    setFilteredArtworks(filtered);
  }, [searchTerm, selectedCategory]);

  return (
    <div>
      {/* Gallery Header */}
      <section className="py-24 text-white bg-gradient-to-r from-amber-900 to-amber-700">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-4 text-5xl font-light">Artwork Gallery</h1>
          <p className="max-w-2xl mx-auto text-amber-100">
            Explore our diverse collection of exceptional artificial art pieces that blend innovation with artistic expression.
          </p>
        </div>
      </section>
      
      {/* Filters */}
      <section className="py-8 bg-neutral-100">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center justify-between">
            <div className="w-full mb-4 md:w-auto md:mb-0">
              <div className="relative">
                <Search className="absolute w-5 h-5 transform -translate-y-1/2 left-3 top-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Search artworks..."
                  className="w-full py-2 pl-10 pr-4 border rounded-md md:w-64 border-neutral-300 focus:border-amber-700 focus:ring-1 focus:ring-amber-700"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            
            <div className="flex items-center w-full md:w-auto">
              <Filter className="w-5 h-5 mr-2 text-neutral-500" />
              <span className="mr-2 text-neutral-700">Filter by:</span>
              <select
                className="px-3 py-2 border rounded-md border-neutral-300 focus:border-amber-700 focus:ring-1 focus:ring-amber-700"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>
      
      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          {filteredArtworks.length > 0 ? (
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredArtworks.map(artwork => (
                <ArtworkCard key={artwork.id} artwork={artwork} />
              ))}
            </div>
          ) : (
            <div className="p-8 text-center bg-neutral-50 rounded-lg">
              <h3 className="mb-2 text-xl text-neutral-700">No artworks found</h3>
              <p className="text-neutral-500">
                Try adjusting your search or filter criteria to find what you're looking for.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default GalleryPage;