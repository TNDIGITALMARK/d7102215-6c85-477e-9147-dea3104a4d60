'use client';

import { Header } from '@/components/windshield/Header';
import { Footer } from '@/components/windshield/Footer';
import { ServiceCard } from '@/components/windshield/ServiceCard';
import { TestimonialCard } from '@/components/windshield/TestimonialCard';
import { Wrench, Truck, Shield } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [damageSize, setDamageSize] = useState('');
  const [damageLocation, setDamageLocation] = useState('');

  const handleGetQuote = () => {
    // Simple damage assessment logic
    if (damageSize && damageLocation) {
      alert(`Based on your input:\nDamage Size: ${damageSize}\nLocation: ${damageLocation}\n\nEstimated Quote: $${damageSize === 'small' ? '89-149' : '149-299'}\n\nCall us at (800) 555-1234 for exact pricing!`);
    } else {
      alert('Please select damage size and location to get a quote.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center text-white">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/generated/hero-windshield-repair.png"
            alt="Professional windshield repair"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="title-light-hero text-5xl md:text-6xl mb-6 leading-tight uppercase tracking-tight">
              CRACKS GONE.<br />
              CLARITY RESTORED
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 font-light">
              Professional windshield repair and replacement services. Same-day service available.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleGetQuote}
                className="btn-primary inline-block"
              >
                GET A FREE QUOTE TODAY
              </button>
              <a
                href="tel:+18005551234"
                className="bg-white text-[hsl(var(--primary))] px-8 py-4 rounded font-semibold uppercase text-sm hover:bg-gray-100 transition-all duration-300 text-center"
              >
                CALL NOW: (800) 555-1234
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Quick Links */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ServiceCard
              icon={Wrench}
              title="WINDSHIELD REPAIR"
              description="Fix chips & cracks quickly. Most repairs completed in 30 minutes."
            />
            <ServiceCard
              icon={Truck}
              title="MOBILE SERVICE"
              description="We come to you. Wherever you are. Home, office, or roadside service."
            />
            <ServiceCard
              icon={Shield}
              title="INSURANCE CLAIMS"
              description="Hassle-free claims processing. We work directly with your insurance."
            />
          </div>
        </div>
      </section>

      {/* Before & After Section */}
      <section className="py-16 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-12 uppercase tracking-tight">
            BEFORE & AFTER
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/generated/windshield-before.png"
                  alt="Damaged windshield before repair"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[hsl(var(--muted-foreground))]">
                BEFORE
              </p>
            </div>
            <div className="text-center">
              <div className="relative h-64 mb-4 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/generated/windshield-after.png"
                  alt="Crystal clear windshield after repair"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm font-semibold uppercase tracking-wide text-[hsl(var(--accent))]">
                AFTER
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Damage Assessment Tool */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-[hsl(var(--card))] border border-[hsl(var(--border))] rounded-lg p-8 shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">INSTANT DAMAGE ASSESSMENT</h2>
            <p className="text-center text-[hsl(var(--muted-foreground))] mb-8">
              Get a preliminary quote in seconds
            </p>

            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  Damage Size
                </label>
                <select
                  value={damageSize}
                  onChange={(e) => setDamageSize(e.target.value)}
                  className="w-full"
                >
                  <option value="">Select damage size</option>
                  <option value="small">Small (quarter size or smaller)</option>
                  <option value="medium">Medium (larger than quarter)</option>
                  <option value="large">Large crack (6+ inches)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  Damage Location
                </label>
                <select
                  value={damageLocation}
                  onChange={(e) => setDamageLocation(e.target.value)}
                  className="w-full"
                >
                  <option value="">Select location</option>
                  <option value="center">Center of windshield</option>
                  <option value="edge">Edge of windshield</option>
                  <option value="drivers">Driver&apos;s line of sight</option>
                  <option value="passenger">Passenger side</option>
                </select>
              </div>

              <button
                onClick={handleGetQuote}
                className="btn-primary w-full"
              >
                GET INSTANT QUOTE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <section className="py-16 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-3xl font-bold mb-12 uppercase tracking-tight">
            CUSTOMER TESTIMONIALS
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <TestimonialCard
              name="Sarah Martinez"
              rating={5}
              comment="Excellent work completed in 30 minutes! Professional service and my windshield looks brand new."
            />
            <TestimonialCard
              name="David Thompson"
              rating={5}
              comment="Insurance handled perfectly with no hassle. These guys know what they're doing!"
            />
            <TestimonialCard
              name="Jennifer Wong"
              rating={5}
              comment="Mobile service saved my day. They came to my office and fixed it while I worked. Highly recommend!"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[hsl(var(--primary))] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="title-light-cta text-4xl font-bold mb-4 uppercase">
            READY TO RESTORE YOUR CLARITY?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Same-day service available. Call now or book online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/booking" className="bg-[hsl(var(--accent))] text-white hover:bg-[hsl(var(--accent))]/90 px-8 py-4 rounded font-semibold uppercase text-sm transition-all duration-300">
              BOOK APPOINTMENT
            </Link>
            <a href="tel:+18005551234" className="bg-white text-[hsl(var(--primary))] hover:bg-gray-100 px-8 py-4 rounded font-semibold uppercase text-sm transition-all duration-300">
              (800) 555-1234
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
