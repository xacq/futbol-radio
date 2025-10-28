import { useEffect, useState } from 'react';

interface Sponsor {
  name: string;
  logo: string;
}

interface SponsorsCarouselProps {
  sponsors?: Sponsor[];
}

const SponsorsCarousel = ({ sponsors }: SponsorsCarouselProps) => {
  const defaultSponsors: Sponsor[] = [
    { name: 'Coca-Cola', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg' },
    { name: 'Visa', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Visa_Inc._logo.svg' },
    { name: 'Qatar Airways', logo: 'https://upload.wikimedia.org/wikipedia/en/0/0b/Qatar_Airways_Logo.svg' },
    { name: 'Adidas', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg' },
  ];

  const sponsorsList = sponsors || defaultSponsors;
  // Duplicate sponsors for seamless infinite scroll
  const duplicatedSponsors = [...sponsorsList, ...sponsorsList, ...sponsorsList];

  return (
    <section className="w-full py-12 overflow-hidden" style={{ background: 'hsl(var(--sponsors-bg))' }}>
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 text-foreground">
          Nuestros Patrocinadores
        </h2>
        
        <div className="relative">
          <div className="overflow-hidden">
            <div className="flex animate-scroll-infinite hover:[animation-play-state:paused]">
              {duplicatedSponsors.map((sponsor, index) => (
                <div
                  key={`${sponsor.name}-${index}`}
                  className="flex-shrink-0 mx-8 flex items-center justify-center"
                  style={{ width: '200px', height: '100px' }}
                >
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    className="max-w-full max-h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100"
                  />
                </div>
              ))}
            </div>
          </div>
          
          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[hsl(var(--sponsors-bg))] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[hsl(var(--sponsors-bg))] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default SponsorsCarousel;
