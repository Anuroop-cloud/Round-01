import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, Mail, MapPin, Calendar } from 'lucide-react';
import Spline from '@splinetool/react-spline';
import logo from './n.png'; // Event logo
import xaiLogo from './xai.png'; // Sponsor logos from src
import futurelabsLogo from './futurelabs.png';
import cloudcoreLogo from './cloudcore.png';

function App() {
  const [loading, setLoading] = useState(true);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.offsetWidth / 2;
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  const speakers = [
    { name: "Dr. Ada Chen", role: "AI Researcher at xAI", bio: "Pioneering neural network advancements." },
    { name: "Mark Torres", role: "CTO of FutureLabs", bio: "Expert in scalable cloud systems." },
    { name: "Priya Patel", role: "Open-source Advocate", bio: "Led 50+ global coding initiatives." },
  ];

  const agenda = [
    { day: "June 20", time: "6:00 PM", event: "Opening Keynote - 'The Future of Code' by Dr. Ada Chen" },
    { day: "June 21", time: "9:00 AM", event: "Workshop - 'Building Scalable APIs' by Mark Torres" },
    { day: "June 22", time: "3:00 PM", event: "Demo Showcase & Awards" },
  ];

  const sponsors = [
    { name: "xAI", logo: xaiLogo },
    { name: "FutureLabs", logo: futurelabsLogo },
    { name: "CloudCore", logo: cloudcoreLogo },
  ];

  const faqs = [
    { q: "Who can participate?", a: "Anyone 18+ with a passion for coding." },
    { q: "What should I bring?", a: "Laptop, charger, and your best ideas!" },
    { q: "Are meals provided?", a: "Yes, snacks and meals included." },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-[#FFFFFF] overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-30 bg-[#000000]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="CodeSphere Logo" className="w-10 h-10" />
            <span className="text-xl font-bold text-[#EA7350]">CodeSphere 2K25</span>
          </div>
          <div className="flex space-x-6 text-sm">
            <a href="#hero" className="text-[#B0B0B0] hover:text-[#EA7350] transition">Home</a>
            <a href="#details" className="text-[#B0B0B0] hover:text-[#EA7350] transition">Details</a>
            <a href="#speakers" className="text-[#B0B0B0] hover:text-[#EA7350] transition">Speakers</a>
            <a href="#agenda" className="text-[#B0B0B0] hover:text-[#EA7350] transition">Agenda</a>
            <a href="#register" className="text-[#B0B0B0] hover:text-[#EA7350] transition">Register</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="relative h-screen pt-16">
        <div className="absolute inset-0 bg-gradient-to-b from-[#000000]/50 to-[#000000]/80">
          <div className="absolute inset-0 overflow-hidden z-0">
            {loading && (
              <div className="absolute inset-0 flex justify-center items-center text-[#FFFFFF] text-3xl font-bold">
                Loading...
              </div>
            )}
            <Spline
              scene="https://prod.spline.design/pazQcIeGFkAaEm6a/scene.splinecode" 
              className="w-full h-full"
              onLoad={() => setLoading(false)}
            />
          </div>
        </div>
        <div className="relative z-20 h-full flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#EA7350] to-[#FFD700] bg-clip-text text-transparent">
            CodeSphere 2025
          </h1>
          <p className="text-xl md:text-2xl text-[#B0B0B0] mb-6">Innovate. Code. Collaborate.</p>
          <p className="text-lg text-[#B0B0B0]">June 20-22, 2025</p>
          <a href="#register" className="mt-8 px-6 py-3 bg-[#EA7350] text-[#FFFFFF] font-semibold rounded-full hover:bg-[#D95F3A] transition">
            Register Now
          </a>
        </div>
      </section>

      {/* Event Details */}
      <section id="details" className="py-20 px-4 bg-[#000000]/80">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-[#EA7350]">Event Details</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <DetailCard icon={<MapPin />} title="Location" info="TechHub Arena, VIT, Vellore" />
            <DetailCard icon={<Calendar />} title="Date" info="June 20-22, 2025" />
            <DetailCard icon={<Calendar />} title="Time" info="48-hour Hackathon" />
          </div>
        </div>
      </section>

      {/* Speaker Lineup */}
      <section id="speakers" className="py-20 px-4 bg-[#000000]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-[#EA7350]">Speakers</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {speakers.map((speaker, idx) => (
              <SpeakerCard key={idx} {...speaker} />
            ))}
          </div>
        </div>
      </section>

      {/* Agenda */}
      <section id="agenda" className="py-20 px-4 bg-[#000000]/80">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-[#EA7350]">Agenda</h2>
          <div className="space-y-6">
            {agenda.map((item, idx) => (
              <AgendaItem key={idx} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section id="register" className="py-20 px-4 bg-gradient-to-r from-[#EA7350]/20 to-[#000000] text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-[#FFD700]">Ready to Shape the Future?</h2>
          <p className="text-lg text-[#B0B0B0] mb-8">Spots are limited - secure yours today!</p>
          <a href="#" className="px-6 py-3 bg-[#EA7350] text-[#FFFFFF] font-semibold rounded-full hover:bg-[#D95F3A] transition">
            Book Your Ticket
          </a>
        </div>
      </section>

      {/* Sponsors & Partners */}
      <section id="sponsors" className="py-20 px-4 bg-[#000000]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-12 text-[#EA7350]">Sponsors & Partners</h2>
          <div className="flex justify-center gap-12 flex-wrap">
            {sponsors.map((sponsor, idx) => (
              <img key={idx} src={sponsor.logo} alt={sponsor.name} className="h-16 opacity-70 hover:opacity-100 transition" />
            ))}
          </div>
        </div>
      </section>

      {/* FAQs & Contact */}
      <section id="faq-contact" className="py-20 px-4 bg-[#000000]/80">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#EA7350]">FAQs & Contact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} {...faq} />
              ))}
            </div>
            <div className="space-y-6">
              <ContactInfo icon={<Mail />} title="Email" info="info@codesphere2025.com" />
              <ContactInfo icon={<MapPin />} title="Location" info="VIT, Vellore" />
            </div>
          </div>
        </div>
      </section>

      {/* CSS to hide Spline watermark */}
      <style jsx global>{`
        a[href*="spline.design"] { display: none !important; }
        div[class*="spline"] > a, canvas + a, .spline-watermark { display: none !important; }
      `}</style>
    </div>
  );
}

function DetailCard({ icon, title, info }) {
  return (
    <div className="bg-[#000000]/50 border border-[#EA7350]/10 p-6 rounded-lg hover:border-[#EA7350]/30 transition">
      <div className="text-[#EA7350] mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-[#FFFFFF]">{title}</h3>
      <p className="text-[#B0B0B0]">{info}</p>
    </div>
  );
}

function SpeakerCard({ name, role, bio }) {
  return (
    <div className="bg-[#000000]/50 border border-[#EA7350]/10 p-6 rounded-lg hover:border-[#EA7350]/30 transition">
      <h3 className="text-xl font-semibold mb-2 text-[#EA7350]">{name}</h3>
      <p className="text-[#B0B0B0]">{role}</p>
      <p className="text-[#B0B0B0] mt-2">{bio}</p>
    </div>
  );
}

function AgendaItem({ day, time, event }) {
  return (
    <div className="bg-[#000000]/50 border-l-4 border-[#EA7350] p-4 rounded-r-lg">
      <p className="text-[#B0B0B0]">{day} - {time}</p>
      <p className="text-[#FFFFFF] font-semibold">{event}</p>
    </div>
  );
}

function FAQItem({ q, a }) {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-semibold text-[#EA7350]">{q}</h3>
      <p className="text-[#B0B0B0]">{a}</p>
    </div>
  );
}

function ContactInfo({ icon, title, info }) {
  return (
    <div className="flex items-center space-x-4">
      <div className="text-[#EA7350]">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold text-[#FFFFFF]">{title}</h3>
        <p className="text-[#B0B0B0]">{info}</p>
      </div>
    </div>
  );
}

export default App;