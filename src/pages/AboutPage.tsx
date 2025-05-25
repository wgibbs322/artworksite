import React, { useEffect } from 'react';
import { Camera, Palette, Users, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | ArtVision - Artificial Art Gallery';
  }, []);

  return (
    <div>
      {/* About Header */}
      <section className="py-24 text-white bg-gradient-to-r from-amber-900 to-amber-700">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-4 text-5xl font-light">About ArtVision</h1>
          <p className="max-w-2xl mx-auto text-amber-100">
            Exploring the intersection of creativity and innovation through exceptional artificial art.
          </p>
        </div>
      </section>
      
      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4 mb-8 md:w-1/2 md:mb-0">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/1509534/pexels-photo-1509534.jpeg" 
                  alt="Modern art gallery interior" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
                <div className="absolute inset-0 border-4 border-amber-500 rounded-lg -top-4 -right-4 -z-10"></div>
              </div>
            </div>
            
            <div className="w-full px-4 md:w-1/2">
              <h2 className="section-title">Our Story</h2>
              <p className="mb-6 text-neutral-700">
                Founded in 2020, ArtVision was born from a passion for exploring the evolving landscape of artistic expression in the digital age. We recognized the emergence of new creative techniques that were pushing the boundaries of traditional art forms and creating entirely new visual experiences.
              </p>
              <p className="text-neutral-700">
                Our mission is to showcase exceptional artificial art that challenges perceptions, stimulates conversation, and inspires audiences. We collaborate with innovative artists who harness cutting-edge techniques to create visually stunning and intellectually engaging works.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-16 bg-neutral-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="section-title">Our Values</h2>
            <p className="text-neutral-700">
              At the core of ArtVision are the principles that guide our curation, artist relationships, and audience engagement.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-amber-100">
                <Palette className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="mb-3 text-xl font-medium text-amber-900">Creative Innovation</h3>
              <p className="text-neutral-600">
                We celebrate artists who push creative boundaries and explore new techniques in their work.
              </p>
            </div>
            
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-amber-100">
                <Camera className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="mb-3 text-xl font-medium text-amber-900">Artistic Quality</h3>
              <p className="text-neutral-600">
                We maintain the highest standards in our curation, showcasing only exceptional works of artistic merit.
              </p>
            </div>
            
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-amber-100">
                <Users className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="mb-3 text-xl font-medium text-amber-900">Community Engagement</h3>
              <p className="text-neutral-600">
                We foster meaningful connections between artists, collectors, and art enthusiasts through our platform.
              </p>
            </div>
            
            <div className="p-6 text-center bg-white rounded-lg shadow-md">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 rounded-full bg-amber-100">
                <Award className="w-8 h-8 text-amber-700" />
              </div>
              <h3 className="mb-3 text-xl font-medium text-amber-900">Artistic Integrity</h3>
              <p className="text-neutral-600">
                We respect and uphold the creative vision and intellectual property of all our featured artists.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-12 text-center">
            <h2 className="section-title">Our Team</h2>
            <p className="text-neutral-700">
              Meet the passionate individuals behind ArtVision who bring expertise and dedication to our gallery.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="relative mb-4 overflow-hidden rounded-lg aspect-w-1 aspect-h-1">
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                  alt="Team member" 
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="mb-1 text-xl font-medium text-amber-900">Sarah Mitchell</h3>
              <p className="mb-2 text-amber-700">Founder & Creative Director</p>
              <p className="text-neutral-600">
                With over 15 years of experience in the art world, Sarah brings her passion for innovation and artistic excellence to ArtVision.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-4 overflow-hidden rounded-lg aspect-w-1 aspect-h-1">
                <img 
                  src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg" 
                  alt="Team member" 
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="mb-1 text-xl font-medium text-amber-900">David Chen</h3>
              <p className="mb-2 text-amber-700">Head Curator</p>
              <p className="text-neutral-600">
                David's curatorial expertise and deep knowledge of contemporary art movements inform our thoughtful exhibition program.
              </p>
            </div>
            
            <div className="text-center">
              <div className="relative mb-4 overflow-hidden rounded-lg aspect-w-1 aspect-h-1">
                <img 
                  src="https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg" 
                  alt="Team member" 
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="mb-1 text-xl font-medium text-amber-900">Maya Rodriguez</h3>
              <p className="mb-2 text-amber-700">Artist Relations</p>
              <p className="text-neutral-600">
                Maya builds and nurtures our relationships with artists, ensuring their vision and work are represented with integrity.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-16 text-white bg-amber-900">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-4 text-3xl font-light">Join Our Artistic Community</h2>
          <p className="max-w-2xl mx-auto mb-8 text-amber-100">
            Connect with us to discover exceptional artwork, meet innovative artists, and stay updated on our latest exhibitions and events.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="#" className="px-8 py-3 text-amber-900 bg-white rounded-md hover:bg-amber-50">
              Follow Us
            </a>
            <a href="#" className="px-8 py-3 border-2 rounded-md border-amber-100 hover:bg-amber-800">
              Subscribe to Newsletter
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;