'use client';

import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-screen z-50 bg-white/10 backdrop-blur-md border-b border-white/20">
      <nav className="max-w-full px-6 py-4 flex items-center justify-between">
        <span className="text-2xl font-extrabold text-white tracking-wide">
          CareerLift<span className="text-pink-300">UK</span>
        </span>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-6 text-sm text-white font-medium">
          <li><a href="/" className="hover:text-pink-300 transition">Home</a></li>
          <li><a href="/jobs" className="hover:text-pink-300 transition">Jobs</a></li>
          <li><a href="/contact" className="hover:text-pink-300 transition">Contact</a></li>
        </ul>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden text-white hover:text-pink-300 transition"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" stroke="currentColor" strokeWidth="2" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Nav - Only shown when menuOpen is true */}
      {menuOpen && (
        <ul className="md:hidden px-6 py-4 space-y-4 bg-black/80 text-white text-sm font-medium">
          <li><a href="/" className="block hover:text-pink-300 transition">Home</a></li>
          <li><a href="/jobs" className="block hover:text-pink-300 transition">Jobs</a></li>
          <li><a href="/contact" className="block hover:text-pink-300 transition">Contact</a></li>
        </ul>
      )}
    </header>
  );
}
