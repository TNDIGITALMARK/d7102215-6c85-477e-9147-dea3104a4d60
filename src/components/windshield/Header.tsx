'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Phone } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-[hsl(var(--primary))] text-white">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <div className="relative w-12 h-12">
              <Image
                src="/generated/clearview-logo.png"
                alt="ClearView Auto Glass"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg tracking-wide">CLEARVIEW</span>
              <span className="text-xs tracking-wider opacity-90">AUTO GLASS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium hover:text-[hsl(var(--accent))] transition-colors"
            >
              Windshield Repair
            </Link>
            <Link
              href="/"
              className="text-sm font-medium hover:text-[hsl(var(--accent))] transition-colors"
            >
              Replacement
            </Link>
            <Link
              href="/services"
              className="text-sm font-medium hover:text-[hsl(var(--accent))] transition-colors"
            >
              Mobile Service
            </Link>
            <Link
              href="/booking"
              className="text-sm font-medium hover:text-[hsl(var(--accent))] transition-colors"
            >
              Insurance Claims
            </Link>
          </nav>

          {/* Phone Number */}
          <a
            href="tel:+18005551234"
            className="hidden md:flex items-center gap-2 text-sm font-semibold hover:text-[hsl(var(--accent))] transition-colors"
          >
            <Phone className="w-4 h-4" />
            <span>(800) 555-1234</span>
          </a>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
