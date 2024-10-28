import React from 'react';
import SocialMedia from './SocialMedia';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 py-8 px-4">
      <div className="max-w-6xl mx-auto text-center text-gray-400">
        <div className="mb-4">
          <SocialMedia />
        </div>
        <p className="mb-2">
          <a 
            href="https://gcl401.com" 
            className="hover:text-green-400 transition-colors"
          >
            gcl401.com
          </a>
        </p>
        <p>&copy; {new Date().getFullYear()} Ground Control Landscaping LLC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;