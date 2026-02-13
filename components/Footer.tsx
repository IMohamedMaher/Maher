
import React from 'react';
import { FOOTER_TEXT } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 text-center">
      <div className="container mx-auto px-4">
        <p className="text-sm md:text-base">
          {FOOTER_TEXT}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
