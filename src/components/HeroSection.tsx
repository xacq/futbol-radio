import VoiceModule from './VoiceModule';
import SponsorsCarousel from './SponsorsCarousel';
import presenterImage from '@/assets/presenter-hero.png';
const HeroSection = () => {
  return <>
      {/* Hero Section */}
      <section style={{
      background: 'var(--gradient-hero)'
    }} className="w-full py-12 md:py-16 lg:py-[15px]">
        <div className="container mx-auto px-4">
          {/* Title */}
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary tracking-tight">
              Fútbol de Primera
            </h1>
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
            {/* Left Column - Presenter Image */}
            <div className="flex justify-center">
              <div className="relative w-full max-w-lg">
                <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-3xl" />
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img src={presenterImage} alt="Andrés Cesar - Presentador de Fútbol de Primera" className="w-full h-auto object-cover" />
                  {/* Logo Overlay */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-xl px-4 py-2 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="bg-primary text-primary-foreground font-extrabold text-lg px-2 py-1 rounded">
                        FDP
                      </div>
                      <span className="text-sm font-bold text-foreground">
                        Radio
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Voice Module */}
            <div className="flex items-center justify-center lg:justify-start">
              <div className="w-full max-w-lg">
                <VoiceModule />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Carousel */}
      <SponsorsCarousel />

      {/* Promotional Banner */}
      <section className="w-full py-8 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-red-700 rounded-2xl overflow-hidden shadow-xl">
            <div className="flex flex-col md:flex-row items-center justify-between p-6 md:p-8 gap-4">
              <div className="text-white text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  USMNT vs ECUADOR
                </h3>
                <p className="text-white/90 text-sm md:text-base">
                  10 de Octubre | 7:30pm CT | Q2 Stadium, Austin, TX
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-white rounded-xl p-4">
                  <img src="https://upload.wikimedia.org/wikipedia/en/a/a2/United_States_Soccer_Federation_logo.svg" alt="US Soccer" className="w-16 h-16 object-contain" />
                </div>
                <button className="bg-white text-blue-900 px-6 py-3 rounded-full font-bold hover:bg-blue-50 transition-colors whitespace-nowrap">
                  ¡Asegura tus entradas!
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>;
};
export default HeroSection;