export interface Doctor {
  id: string;
  name: string;
  badge: 'Dental' | 'Physiotherapy';
  role: string;
  specialty?: string;
  qualifications: string[];
  highlight: string;
  image: string;
  bio: string;
  achievements: string[];
  memberships: string[];
}

export interface ServiceItem {
  id: string;
  name: string;
  category: 'Dental' | 'Physiotherapy';
  shortDesc: string;
  description: string;
  duration: string;
  benefits: string[];
  suitableFor: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  designation?: string;
  tag?: string;
  rating: number;
  date?: string;
  reviewsCount?: string;
  source?: string;
  treatment?: string;
  ownerResponse?: {
    date?: string;
    text: string;
  };
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'sports' | 'dental' | 'physio' | 'clinic';
  categoryLabel: string;
  image: string;
  description: string;
}

export interface BookingForm {
  patientName: string;
  phone: string;
  email: string;
  specialty: 'dental' | 'physiotherapy' | 'both';
  service: string;
  doctor: string;
  preferredDate: string;
  preferredTime: string;
  notes: string;
}
