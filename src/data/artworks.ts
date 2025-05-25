export interface Artwork {
  id: number;
  title: string;
  artist: string;
  description: string;
  imageUrl: string;
  category: string;
  year: number;
  dimensions?: string;
  medium?: string;
  price?: number;
  isFeatured: boolean;
}

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "Contemplative Portrait",
    artist: "AI Artist Collective",
    description: "A striking portrait exploring the quiet moments of introspection, featuring a young woman in a blue sweater and patterned headscarf.",
    imageUrl: "https://images.pexels.com/photos/7434424/pexels-photo-7434424.jpeg",
    category: "Portrait",
    year: 2024,
    medium: "Digital Art",
    price: 2800,
    isFeatured: true
  },
  {
    id: 2,
    title: "Artistic Reflection",
    artist: "Digital Dreams Studio",
    description: "An oil-painting style portrait capturing the essence of contemplation, with rich textures and emotional depth.",
    imageUrl: "https://images.pexels.com/photos/2867769/pexels-photo-2867769.jpeg",
    category: "Portrait",
    year: 2024,
    medium: "Digital Oil Painting",
    price: 3200,
    isFeatured: true
  },
  {
    id: 3,
    title: "Joyful Spirit",
    artist: "Neural Canvas",
    description: "A vibrant portrait celebrating authentic emotion and happiness, showcasing the beauty of genuine expression.",
    imageUrl: "https://images.pexels.com/photos/1576938/pexels-photo-1576938.jpeg",
    category: "Portrait",
    year: 2024,
    medium: "AI-Generated Art",
    price: 2500,
    isFeatured: true
  },
  {
    id: 4,
    title: "Literary Haven",
    artist: "Jasmine Turner",
    description: "A serene capture of a moment among books, highlighting the intimate relationship between reader and literature.",
    imageUrl: "https://images.pexels.com/photos/3052727/pexels-photo-3052727.jpeg",
    category: "Lifestyle",
    year: 2024,
    medium: "Digital Photography",
    price: 1800,
    isFeatured: false
  }
];

export const getArtworkById = (id: number): Artwork | undefined => {
  return artworks.find(artwork => artwork.id === id);
};

export const getFeaturedArtworks = (): Artwork[] => {
  return artworks.filter(artwork => artwork.isFeatured);
};

export const getArtworksByCategory = (category: string): Artwork[] => {
  return artworks.filter(artwork => artwork.category === category);
};