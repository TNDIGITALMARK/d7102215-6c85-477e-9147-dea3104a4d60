'use client';

import Image from 'next/image';
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-[hsl(var(--primary))] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <Image
                  src="/generated/clearview-logo.png"
                  alt="ClearView Auto Glass"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-base">CLEARVIEW</span>
                <span className="text-xs opacity-90">AUTO GLASS</span>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              Call: 1-800-CLEARVIEW<br />
              Email: info@clearviewglass.com<br />
              123 Main Lane, Clearlake, CA
            </p>
          </div>

          {/* About Us */}
          <div>
            <h4 className="title-light-footer font-semibold mb-4 text-sm uppercase tracking-wide">About Us</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/services" className="hover:text-[hsl(var(--accent))] transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[hsl(var(--accent))] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="title-light-footer font-semibold mb-4 text-sm uppercase tracking-wide">Quick Links</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <Link href="/" className="hover:text-[hsl(var(--accent))] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="title-light-footer font-semibold mb-4 text-sm uppercase tracking-wide">Contact</h4>
            <p className="text-sm opacity-80 leading-relaxed">
              Available 24/7 for emergency repairs
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-70">
          <p>&copy; 2025 ClearView Auto Glass. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
