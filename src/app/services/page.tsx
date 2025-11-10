'use client';

import { Header } from '@/components/windshield/Header';
import { Footer } from '@/components/windshield/Footer';
import { Wrench, DollarSign, Clock, Shield, Truck, CheckCircle } from 'lucide-react';
import Link from 'next/link';

export default function ServicesPage() {
  const services = [
    {
      title: 'Chip Repair',
      price: 'Starting at $89',
      description: 'Small chip repairs (quarter size or smaller) completed quickly and professionally.',
      features: [
        '30-minute completion time',
        'Warranty included',
        'Mobile service available',
        'Insurance friendly'
      ],
      icon: Wrench
    },
    {
      title: 'Crack Repair',
      price: 'Starting at $149',
      description: 'Expert crack repair for damages up to 6 inches. Prevents spreading and restores structural integrity.',
      features: [
        '1-hour completion time',
        'Lifetime warranty',
        'Mobile service available',
        'Insurance covered'
      ],
      icon: Wrench
    },
    {
      title: 'Full Windshield Replacement',
      price: 'Starting at $299',
      description: 'Complete windshield replacement using OEM or premium aftermarket glass.',
      features: [
        'Same-day service',
        'Lifetime warranty',
        'All makes and models',
        'Insurance assistance'
      ],
      icon: Shield
    }
  ];

  const whyChooseUs = [
    {
      title: 'Certified Technicians',
      description: 'Our team has 15+ years of experience with full certification and training.',
      icon: CheckCircle
    },
    {
      title: 'Same-Day Service',
      description: 'Most repairs completed within hours. Emergency service available 24/7.',
      icon: Clock
    },
    {
      title: 'Insurance Assistance',
      description: 'We handle all insurance paperwork and work directly with your provider.',
      icon: DollarSign
    },
    {
      title: 'Mobile Service',
      description: 'We come to your location - home, office, or roadside. No extra charge.',
      icon: Truck
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-[hsl(var(--primary))] text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="title-light-hero text-5xl font-extrabold mb-6 uppercase tracking-tight">
            Our Services & Pricing
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Professional windshield repair and replacement with transparent pricing.
            No hidden fees, no surprises.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-tight">
            Service Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="card bg-white border-2 border-[hsl(var(--border))] hover:border-[hsl(var(--accent))] transition-all duration-300"
                >
                  <div className="flex flex-col h-full">
                    {/* Icon and Title */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-[hsl(var(--accent)/0.1)] flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[hsl(var(--accent))]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{service.title}</h3>
                        <p className="text-[hsl(var(--accent))] font-semibold text-lg">
                          {service.price}
                        </p>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[hsl(var(--muted-foreground))] mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA Button */}
                    <Link
                      href="/booking"
                      className="btn-primary text-center w-full"
                    >
                      Book This Service
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-tight">
            Why Choose ClearView?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-[hsl(var(--accent))] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-[hsl(var(--muted-foreground))] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Repair Process */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 uppercase tracking-tight">
            Our Repair Process
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h4 className="font-semibold mb-2">Assessment</h4>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  We inspect the damage and provide an accurate quote
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h4 className="font-semibold mb-2">Preparation</h4>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  Clean and prep the damaged area for optimal repair
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h4 className="font-semibold mb-2">Repair</h4>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  Apply specialized resin and cure to restore integrity
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--primary))] text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  4
                </div>
                <h4 className="font-semibold mb-2">Quality Check</h4>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  Final inspection and warranty documentation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insurance Section */}
      <section className="py-16 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white border border-[hsl(var(--border))] rounded-lg p-8 shadow-lg">
            <div className="flex items-start gap-6">
              <Shield className="w-16 h-16 text-[hsl(var(--accent))] flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold mb-4">Insurance Claims Made Easy</h2>
                <p className="text-[hsl(var(--muted-foreground))] mb-4">
                  We work with all major insurance providers to make your claim process seamless.
                  Most comprehensive policies cover windshield repairs with no deductible.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>We handle all paperwork and communication with your insurance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Direct billing available - no out-of-pocket costs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span>Fast approval process - often same-day coverage confirmation</span>
                  </li>
                </ul>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  <strong>Accepted Insurance Providers:</strong> State Farm, Geico, Progressive,
                  Allstate, Farmers, Liberty Mutual, and many more.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[hsl(var(--primary))] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="title-light-cta text-4xl font-bold mb-4 uppercase">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Book your appointment online or call us for immediate assistance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="bg-[hsl(var(--accent))] hover:bg-[hsl(var(--accent))]/90 px-8 py-4 rounded font-semibold uppercase text-sm transition-all duration-300"
            >
              Book Online Now
            </Link>
            <a
              href="tel:+18005551234"
              className="bg-white text-[hsl(var(--primary))] hover:bg-gray-100 px-8 py-4 rounded font-semibold uppercase text-sm transition-all duration-300"
            >
              Call: (800) 555-1234
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
