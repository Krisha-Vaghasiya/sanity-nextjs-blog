"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          My Blog
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <Link href="/" className="hover:text-blue-600">
            Home
          </Link>

          <Link href="/about" className="hover:text-blue-600">
            About Us
          </Link>

          <Link href="/blog" className="hover:text-blue-600">
            Blog
          </Link>

          <Link href="/contact" className="hover:text-blue-600">
            Contact Us
          </Link>
        </div>

      </div>
    </nav>
  );
}