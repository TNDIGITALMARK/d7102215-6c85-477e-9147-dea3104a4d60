'use client';

import { Header } from '@/components/windshield/Header';
import { Footer } from '@/components/windshield/Footer';
import { Calendar, MapPin, Clock, User, Phone, Mail, Car } from 'lucide-react';
import { useState } from 'react';

export default function BookingPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    vehicleYear: '',
    vehicleMake: '',
    vehicleModel: '',
    serviceType: '',
    damageType: '',
    locationPreference: '',
    appointmentDate: '',
    appointmentTime: '',
    address: '',
    insuranceProvider: '',
    additionalNotes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, this would send data to backend
    console.log('Booking submitted:', formData);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-grow flex items-center justify-center bg-[hsl(var(--background))] py-20">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-white rounded-lg shadow-lg p-12">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h1 className="text-3xl font-bold mb-4">Booking Confirmed!</h1>
              <p className="text-lg text-[hsl(var(--muted-foreground))] mb-8">
                Thank you for choosing ClearView Auto Glass, {formData.name}!
              </p>
              <div className="bg-[hsl(var(--background))] rounded-lg p-6 mb-8 text-left">
                <h3 className="font-semibold mb-4">Appointment Details:</h3>
                <div className="space-y-2 text-sm">
                  <p><strong>Service:</strong> {formData.serviceType}</p>
                  <p><strong>Date:</strong> {formData.appointmentDate}</p>
                  <p><strong>Time:</strong> {formData.appointmentTime}</p>
                  <p><strong>Location:</strong> {formData.locationPreference === 'mobile' ? formData.address : 'Our Shop'}</p>
                  <p><strong>Vehicle:</strong> {formData.vehicleYear} {formData.vehicleMake} {formData.vehicleModel}</p>
                </div>
              </div>
              <p className="text-[hsl(var(--muted-foreground))] mb-6">
                You will receive a confirmation email at <strong>{formData.email}</strong> shortly.
                Our technician will call you at <strong>{formData.phone}</strong> to confirm details.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-[hsl(var(--primary))] text-white px-6 py-3 rounded hover:opacity-90 transition-opacity"
                >
                  Book Another Appointment
                </button>
                <a
                  href="/"
                  className="bg-white border border-[hsl(var(--border))] text-[hsl(var(--foreground))] px-6 py-3 rounded hover:bg-[hsl(var(--background))] transition-colors"
                >
                  Return Home
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-[hsl(var(--primary))] text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="title-light-hero text-5xl font-extrabold mb-4 uppercase tracking-tight">
            Book Your Appointment
          </h1>
          <p className="text-xl opacity-90">
            Fast, convenient scheduling. Most appointments available within 24 hours.
          </p>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-[hsl(var(--background))]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              {/* Personal Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <User className="w-6 h-6 text-[hsl(var(--accent))]" />
                  Personal Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
              </div>

              {/* Vehicle Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Car className="w-6 h-6 text-[hsl(var(--accent))]" />
                  Vehicle Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label htmlFor="vehicleYear">Year *</label>
                    <input
                      type="text"
                      id="vehicleYear"
                      name="vehicleYear"
                      value={formData.vehicleYear}
                      onChange={handleChange}
                      required
                      placeholder="2020"
                    />
                  </div>
                  <div>
                    <label htmlFor="vehicleMake">Make *</label>
                    <input
                      type="text"
                      id="vehicleMake"
                      name="vehicleMake"
                      value={formData.vehicleMake}
                      onChange={handleChange}
                      required
                      placeholder="Toyota"
                    />
                  </div>
                  <div>
                    <label htmlFor="vehicleModel">Model *</label>
                    <input
                      type="text"
                      id="vehicleModel"
                      name="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={handleChange}
                      required
                      placeholder="Camry"
                    />
                  </div>
                </div>
              </div>

              {/* Service Details */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Calendar className="w-6 h-6 text-[hsl(var(--accent))]" />
                  Service Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="serviceType">Service Type *</label>
                    <select
                      id="serviceType"
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select service</option>
                      <option value="chip-repair">Chip Repair - $89+</option>
                      <option value="crack-repair">Crack Repair - $149+</option>
                      <option value="full-replacement">Full Replacement - $299+</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="damageType">Damage Description *</label>
                    <select
                      id="damageType"
                      name="damageType"
                      value={formData.damageType}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select damage type</option>
                      <option value="small-chip">Small chip (quarter size)</option>
                      <option value="large-chip">Large chip</option>
                      <option value="short-crack">Crack (less than 6&quot;)</option>
                      <option value="long-crack">Crack (6&quot; or longer)</option>
                      <option value="multiple">Multiple damages</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Location & Schedule */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <MapPin className="w-6 h-6 text-[hsl(var(--accent))]" />
                  Location & Schedule
                </h2>
                <div className="space-y-6">
                  <div>
                    <label htmlFor="locationPreference">Service Location *</label>
                    <select
                      id="locationPreference"
                      name="locationPreference"
                      value={formData.locationPreference}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select location preference</option>
                      <option value="mobile">Mobile Service (We come to you)</option>
                      <option value="shop">Shop Visit (123 Main Lane, Clearlake, CA)</option>
                    </select>
                  </div>

                  {formData.locationPreference === 'mobile' && (
                    <div>
                      <label htmlFor="address">Service Address *</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleChange}
                        required={formData.locationPreference === 'mobile'}
                        placeholder="Enter your address"
                      />
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="appointmentDate">Preferred Date *</label>
                      <input
                        type="date"
                        id="appointmentDate"
                        name="appointmentDate"
                        value={formData.appointmentDate}
                        onChange={handleChange}
                        required
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>
                    <div>
                      <label htmlFor="appointmentTime">Preferred Time *</label>
                      <select
                        id="appointmentTime"
                        name="appointmentTime"
                        value={formData.appointmentTime}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Select time</option>
                        <option value="09:00">9:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM</option>
                        <option value="13:00">1:00 PM</option>
                        <option value="14:00">2:00 PM</option>
                        <option value="15:00">3:00 PM</option>
                        <option value="16:00">4:00 PM</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {/* Insurance Information */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold mb-6">Insurance Information (Optional)</h2>
                <div>
                  <label htmlFor="insuranceProvider">Insurance Provider</label>
                  <input
                    type="text"
                    id="insuranceProvider"
                    name="insuranceProvider"
                    value={formData.insuranceProvider}
                    onChange={handleChange}
                    placeholder="e.g., State Farm, Geico, Progressive"
                  />
                  <p className="text-sm text-[hsl(var(--muted-foreground))] mt-2">
                    We&apos;ll help process your claim and work directly with your insurance.
                  </p>
                </div>
              </div>

              {/* Additional Notes */}
              <div className="mb-8">
                <label htmlFor="additionalNotes">Additional Notes</label>
                <textarea
                  id="additionalNotes"
                  name="additionalNotes"
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any special instructions or questions?"
                />
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="btn-primary flex-1"
                >
                  Confirm Booking
                </button>
                <button
                  type="button"
                  onClick={() => window.location.href = 'tel:+18005551234'}
                  className="bg-white border-2 border-[hsl(var(--primary))] text-[hsl(var(--primary))] px-8 py-4 rounded font-semibold uppercase text-sm hover:bg-[hsl(var(--primary))] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4" />
                  Call to Book
                </button>
              </div>

              <p className="text-sm text-[hsl(var(--muted-foreground))] mt-6 text-center">
                By submitting this form, you agree to receive confirmation via email and phone.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-8 text-center">What Happens Next?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--accent))] text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  1
                </div>
                <h3 className="font-semibold mb-2">Confirmation</h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  Receive instant email confirmation and a follow-up call from our team
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--accent))] text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  2
                </div>
                <h3 className="font-semibold mb-2">Preparation</h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  Our technicians prepare equipment and review your vehicle details
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-[hsl(var(--accent))] text-white flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                  3
                </div>
                <h3 className="font-semibold mb-2">Service Day</h3>
                <p className="text-sm text-[hsl(var(--muted-foreground))]">
                  Professional repair completed on time with warranty documentation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
