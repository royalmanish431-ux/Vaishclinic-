/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Philosophy } from './components/Philosophy';
import { Practitioners } from './components/Practitioners';
import { ServicesSection } from './components/ServicesSection';
import { Testimonials } from './components/Testimonials';
import { GallerySection } from './components/GallerySection';
import { VisitUs } from './components/VisitUs';
import { Footer } from './components/Footer';

import { AppointmentModal } from './components/AppointmentModal';
import { DoctorModal } from './components/DoctorModal';
import { ServiceDetailsModal } from './components/ServiceDetailsModal';
import { GalleryModal } from './components/GalleryModal';

import { Doctor, ServiceItem, GalleryItem } from './types/clinic';
import { DOCTORS, GALLERY_ITEMS } from './data/clinicData';

export default function App() {
  // Google Maps Platform quota warning banner state
  const [isQuotaExceeded, setIsQuotaExceeded] = useState(false);

  useEffect(() => {
    const handleQuotaExceeded = () => {
      setIsQuotaExceeded(true);
    };
    window.addEventListener('gmp-quota-exceeded', handleQuotaExceeded);
    return () => {
      window.removeEventListener('gmp-quota-exceeded', handleQuotaExceeded);
    };
  }, []);

  // Modal states
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSpecialty, setBookingSpecialty] = useState<'dental' | 'physiotherapy' | 'both'>('dental');
  const [bookingDoctorId, setBookingDoctorId] = useState<string | undefined>(undefined);
  const [bookingServiceName, setBookingServiceName] = useState<string | undefined>(undefined);

  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);

  const [isServiceModalOpen, setIsServiceModalOpen] = useState(false);
  const [serviceModalCategory, setServiceModalCategory] = useState<'Dental' | 'Physiotherapy' | null>(null);
  const [selectedServiceItem, setSelectedServiceItem] = useState<ServiceItem | null>(null);

  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedGalleryItem, setSelectedGalleryItem] = useState<GalleryItem | null>(null);

  // Booking handlers
  const handleOpenBooking = (specialty: 'dental' | 'physiotherapy' | 'both' = 'dental') => {
    setBookingSpecialty(specialty);
    setBookingDoctorId(undefined);
    setBookingServiceName(undefined);
    setIsBookingOpen(true);
  };

  const handleBookWithDoctor = (doctorId: string) => {
    const doc = DOCTORS.find((d) => d.id === doctorId);
    setBookingDoctorId(doctorId);
    setBookingSpecialty(doc?.badge === 'Dental' ? 'dental' : 'physiotherapy');
    setBookingServiceName(undefined);
    setIsBookingOpen(true);
  };

  const handleBookService = (serviceName: string, category: 'dental' | 'physiotherapy') => {
    setBookingServiceName(serviceName);
    setBookingSpecialty(category);
    setBookingDoctorId(undefined);
    setIsBookingOpen(true);
  };

  // Service modal handlers
  const handleOpenServiceModal = (category: 'Dental' | 'Physiotherapy') => {
    setServiceModalCategory(category);
    setSelectedServiceItem(null);
    setIsServiceModalOpen(true);
  };

  const handleSelectServiceItem = (service: ServiceItem) => {
    setSelectedServiceItem(service);
    setServiceModalCategory(service.category);
    setIsServiceModalOpen(true);
  };

  // Gallery handlers
  const handleOpenLightbox = (item: GalleryItem) => {
    setSelectedGalleryItem(item);
    setIsGalleryOpen(true);
  };

  const handleOpenFullGalleryModal = () => {
    setSelectedGalleryItem(GALLERY_ITEMS[0]);
    setIsGalleryOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans flex flex-col selection:bg-teal-700 selection:text-white">
      {/* Demo Key Quota Notification Banner */}
      {isQuotaExceeded && (
        <div className="bg-amber-50 border-b border-amber-200 text-amber-900 px-4 py-2.5 text-xs md:text-sm text-center sticky top-0 z-50 shadow-sm">
          <span>
            Google Maps Platform quota reached. If you are the app owner, visit{' '}
            <a
              href="https://developers.google.com/maps/ai/ai-studio?utm_campaign=gmp_mcp_codeassist_v1_aistudio#quota_exceeded_errors"
              target="_blank"
              rel="noopener noreferrer"
              className="underline font-semibold text-amber-950 hover:text-amber-800"
            >
              maps developer site
            </a>{' '}
            for instructions to update your account.
          </span>
        </div>
      )}

      {/* Header */}
      <Header onOpenBooking={() => handleOpenBooking('dental')} />

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onOpenBooking={() => handleOpenBooking('dental')} />

        {/* Our Philosophy Section */}
        <Philosophy />

        {/* Practitioners Section */}
        <Practitioners
          onSelectDoctor={(doc) => setSelectedDoctor(doc)}
          onBookWithDoctor={(docId) => handleBookWithDoctor(docId)}
        />

        {/* Treatments & Services Section */}
        <ServicesSection
          onOpenServiceModal={handleOpenServiceModal}
          onSelectServiceItem={handleSelectServiceItem}
          onBookService={handleBookService}
        />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Photo Gallery Section */}
        <GallerySection
          onOpenLightbox={handleOpenLightbox}
          onOpenFullGalleryModal={handleOpenFullGalleryModal}
        />

        {/* Visit Us & Map Section */}
        <VisitUs onOpenBooking={() => handleOpenBooking('both')} />
      </main>

      {/* Footer */}
      <Footer onOpenBooking={() => handleOpenBooking('dental')} />

      {/* Appointment & Enquiry Modal */}
      <AppointmentModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialSpecialty={bookingSpecialty}
        initialDoctorId={bookingDoctorId}
        initialServiceName={bookingServiceName}
      />

      {/* Doctor Profile Modal */}
      <DoctorModal
        doctor={selectedDoctor}
        onClose={() => setSelectedDoctor(null)}
        onBook={(docId) => handleBookWithDoctor(docId)}
      />

      {/* Detailed Services Modal */}
      <ServiceDetailsModal
        isOpen={isServiceModalOpen}
        category={serviceModalCategory}
        selectedItem={selectedServiceItem}
        onClose={() => {
          setIsServiceModalOpen(false);
          setSelectedServiceItem(null);
        }}
        onBook={handleBookService}
      />

      {/* Fullscreen Photo Gallery Lightbox */}
      <GalleryModal
        isOpen={isGalleryOpen}
        selectedItem={selectedGalleryItem}
        onClose={() => {
          setIsGalleryOpen(false);
          setSelectedGalleryItem(null);
        }}
        onSelect={(item) => setSelectedGalleryItem(item)}
      />
    </div>
  );
}
