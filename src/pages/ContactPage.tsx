import React, { useEffect } from 'react';
import ContactForm from '../components/ContactForm';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const ContactPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Contact Us | ArtVision - Artificial Art Gallery';
  }, []);

  return (
    <div>
      {/* Contact Header */}
      <section className="py-24 text-white bg-gradient-to-r from-amber-900 to-amber-700">
        <div className="container px-4 mx-auto text-center">
          <h1 className="mb-4 text-5xl font-light">Contact Us</h1>
          <p className="max-w-2xl mx-auto text-amber-100">
            Get in touch with our team for inquiries about artworks, commissions, or general information.
          </p>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-16">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap -mx-4">
            {/* Contact Info */}
            <div className="w-full px-4 mb-8 md:w-1/2 lg:w-2/5 md:mb-0">
              <div className="h-full p-8 bg-white rounded-lg shadow-md">
                <h2 className="mb-6 text-3xl font-light text-amber-900">Get In Touch</h2>
                
                <div className="mb-8 text-neutral-700">
                  <p>
                    We'd love to hear from you. Whether you're interested in purchasing artwork, 
                    commissioning a piece, or simply want to learn more about our gallery, our team is here to help.
                  </p>
                </div>
                
                <div className="space-y-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <MapPin className="w-6 h-6 text-amber-700" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-amber-900">Location</h3>
                      <p className="text-neutral-600">
                        123 Gallery Street<br />
                        New York, NY 10001<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Phone className="w-6 h-6 text-amber-700" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-amber-900">Phone</h3>
                      <p className="text-neutral-600">
                        <a href="tel:+19318693909" className="hover:text-amber-700">+1 931-869-3909</a><br />
                        <a href="tel:+13312899204" className="hover:text-amber-700">+1 331-289-9204</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Mail className="w-6 h-6 text-amber-700" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-amber-900">Email</h3>
                      <p className="text-neutral-600">
                        <a href="mailto:info@artvision.com" className="hover:text-amber-700">info@artvision.com</a><br />
                        <a href="mailto:gallery@artvision.com" className="hover:text-amber-700">gallery@artvision.com</a>
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <Clock className="w-6 h-6 text-amber-700" />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium text-amber-900">Hours</h3>
                      <p className="text-neutral-600">
                        Monday - Friday: 10am - 6pm<br />
                        Saturday: 11am - 5pm<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="w-full px-4 md:w-1/2 lg:w-3/5">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section (Placeholder) */}
      <section className="py-8">
        <div className="container px-4 mx-auto">
          <div className="overflow-hidden bg-neutral-200 rounded-lg aspect-w-16 aspect-h-9">
            <div className="flex items-center justify-center h-full p-8 text-center">
              <div>
                <h3 className="mb-2 text-xl text-neutral-700">Gallery Location</h3>
                <p className="text-neutral-600">
                  Interactive map would be displayed here in a production environment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-8 text-3xl font-light text-center text-amber-900">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="mb-2 text-xl font-medium text-amber-900">How can I purchase artwork?</h3>
                <p className="text-neutral-700">
                  You can purchase artwork directly through our website or by contacting our gallery. For specific inquiries about availability, pricing, or commissions, please use our contact form or call us directly.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="mb-2 text-xl font-medium text-amber-900">Do you ship internationally?</h3>
                <p className="text-neutral-700">
                  Yes, we offer worldwide shipping for all our artworks. Shipping costs vary depending on the destination and the size of the artwork. Please contact us for a shipping quote.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="mb-2 text-xl font-medium text-amber-900">Can I commission a custom artwork?</h3>
                <p className="text-neutral-700">
                  Yes, many of our artists accept commissions. Please contact us with details about your project, and we'll connect you with artists whose style matches your vision.
                </p>
              </div>
              
              <div className="p-6 bg-white rounded-lg shadow-sm">
                <h3 className="mb-2 text-xl font-medium text-amber-900">Do you have a physical gallery?</h3>
                <p className="text-neutral-700">
                  Yes, we have a physical gallery space in New York where you can view selected artworks in person. Please check our opening hours or contact us to schedule a visit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;