'use client';

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 text-center text-sm text-gray-600 py-6 mt-10">
      <p>&copy; {new Date().getFullYear()} StayFinder. All rights reserved.</p>
      <p>
        <a href="/privacy" className="hover:underline">Privacy Policy</a> | 
        <a href="/terms" className="hover:underline ml-2">Terms of Service</a>
      </p>
    </footer>
  );
};

export default Footer;
