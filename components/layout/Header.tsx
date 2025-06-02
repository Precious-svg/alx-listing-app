'use client';

import React from 'react';
import Link from 'next/link';

const accommodationTypes = ['Rooms', 'Mansion', 'Countryside', 'Apartments', 'Cabins'];

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md px-6 py-4 flex flex-col md:flex-row justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold text-blue-600">
        <Link href="/">StayFinder</Link>
      </div>

      {/* Accommodation Types */}
      <nav className="flex flex-wrap gap-4 mt-4 md:mt-0">
        {accommodationTypes.map((type) => (
          <Link key={type} href={`/accommodation/${type.toLowerCase()}`}>
            <span className="text-gray-600 hover:text-blue-600 cursor-pointer">{type}</span>
          </Link>
        ))}
      </nav>

      {/* Search Bar + Auth Buttons */}
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <input
          type="text"
          placeholder="Search..."
          className="border rounded px-3 py-1"
        />
        <Link href="/signin">
          <button className="text-blue-600 hover:underline">Sign In</button>
        </Link>
        <Link href="/signup">
          <button className="bg-blue-600 text-white px-4 py-1 rounded hover:bg-blue-700">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
