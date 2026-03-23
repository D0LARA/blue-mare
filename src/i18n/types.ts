export type Locale = "en" | "bg" | "ru" | "de";

export interface Translations {
  nav: {
    about: string;
    gallery: string;
    features: string;
    location: string;
    reviews: string;
    faq: string;
    contact: string;
    bookNow: string;
  };
  hero: {
    subtitle: string;
    title: string;
    description: string;
    bookNow: string;
    viewGallery: string;
    highlights: { nearSea: string; sleeps2: string; freeWifi: string; seaViewBalcony: string };
  };
  about: {
    title: string;
    description: string;
    amenities: { wifi: { title: string; desc: string }; ac: { title: string; desc: string }; kitchen: { title: string; desc: string }; bath: { title: string; desc: string }; seaView: { title: string; desc: string }; workspace: { title: string; desc: string }; selfCheckIn: { title: string; desc: string } };
  };
  gallery: {
    title: string;
    description: string;
    labels: string[];
    alts: string[];
    closeLightbox: string;
    prevImage: string;
    nextImage: string;
  };
  features: {
    title: string;
    description: string;
    comfort: { title: string; points: string[] };
    location: { title: string; points: string[] };
    experience: { title: string; points: string[] };
    trustLine: string;
  };
  booking: {
    title: string;
    description: string;
    checkIn: string;
    checkOut: string;
    cta: string;
    minStay: string;
    cancellation: string;
  };
  locationSection: {
    title: string;
    description: string;
    coordinates: string;
    pois: { label: string; desc: string }[];
  };
  reviews: {
    title: string;
    description: string;
    items: { name: string; text: string; rating: number }[];
  };
  faqSection: {
    title: string;
    description: string;
    items: { q: string; a: string }[];
  };
  contact: {
    title: string;
    description: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    datesLabel: string;
    datesPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    send: string;
    sending: string;
    toastTitle: string;
    toastDescription: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    contactTitle: string;
    followUs: string;
    copyright: string;
    findOnFacebook: string;
  };
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
  };
}
