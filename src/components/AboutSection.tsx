import React from 'react';
import { Link } from 'react-router-dom';
import { PaintBucket, Image, Users, Award } from 'lucide-react';

const AboutSection: React.FC = () => {
  const features = [
    {
      icon: <PaintBucket className="w-8 h-8 text-amber-700" />,
      title: 'Artistic Innovation',
      description: 'Pushing the boundaries of creative expression through innovative techniques and approaches.'
    },
    {
      icon: <Image className="w-8 h-8 text-amber-700" />,
      title: 'Curated Collection',
      description: 'A carefully selected collection of works that represent the finest in contemporary artificial art.'
    },
    {
      icon: <Users className="w-8 h-8 text-amber-700" />,
      title: 'Artist Community',
      description: 'Supporting a diverse community of artists who are pioneering new creative frontiers.'
    },
    {
      icon: <Award className="w-8 h-8 text-amber-700" />,
      title: 'Quality Assurance',
      description: 'Every piece in our collection meets the highest standards of artistic excellence and innovation.'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="flex flex-wrap items-center">
          <div className="w-full mb-12 lg:w-1/2 lg:mb-0 lg:pr-12">
            <h2 className="section-title">About ArtVision</h2>
            <p className="mb-6 text-neutral-700">
              ArtVision is a premier gallery dedicated to showcasing exceptional artificial art that challenges perceptions and expands the boundaries of creative expression.
            </p>
            <p className="mb-8 text-neutral-700">
              We collaborate with innovative artists who harness cutting-edge techniques to create visually stunning and intellectually engaging works that captivate audiences and inspire conversation.
            </p>
            <Link to="/about" className="btn btn-primary">
              Learn More About Us
            </Link>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.map((feature, index) => (
                <div 
                  key={index} 
                  className="p-6 transition-all duration-300 bg-neutral-50 rounded-lg hover:shadow-md"
                >
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-xl font-medium text-amber-900">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;