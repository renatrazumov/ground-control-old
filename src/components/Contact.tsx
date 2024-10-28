import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center">
            <Phone className="w-12 h-12 text-green-400 mb-4" />
            <p className="text-lg">(401) 641-6850</p>
          </div>
          <div className="flex flex-col items-center">
            <Mail className="w-12 h-12 text-green-400 mb-4" />
            <a 
              href="mailto:GroundControlLandscaping401@gmail.com"
              className="text-lg hover:text-green-400 transition-colors"
            >
              GroundControlLandscaping401@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center">
            <MapPin className="w-12 h-12 text-green-400 mb-4" />
            <address className="text-lg not-italic">
              109 Eton Ave<br />
              Warwick, RI 02889
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;