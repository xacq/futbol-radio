import { useState } from 'react';
import { Menu, X, Search, Twitter, Facebook, Youtube, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'El Programa', href: '#programa' },
    { label: 'Podcast', href: '#podcast' },
    { label: 'Noticias', href: '#noticias' },
  ];

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3 md:py-4">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-primary text-primary-foreground font-extrabold text-xl md:text-2xl px-3 py-1.5 rounded-lg shadow-md">
              FDP
            </div>
            <span className="text-sm md:text-base font-semibold text-foreground">Radio</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-foreground hover:text-primary font-semibold transition-colors text-sm"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links & Newsletter */}
          <div className="hidden lg:flex items-center gap-3">
            <div className="flex items-center gap-1">
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-secondary transition-colors text-primary" aria-label="Twitter">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-secondary transition-colors text-primary" aria-label="Facebook">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-secondary transition-colors text-primary" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-secondary transition-colors text-primary" aria-label="Instagram">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            
            <div className="h-6 w-px bg-border" />
            
            <button className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-secondary transition-colors">
              <Search className="w-4 h-4 text-muted-foreground" />
            </button>
            
            <div className="h-6 w-px bg-border" />
            
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground whitespace-nowrap">
                Suscríbete a nuestro newsletter
              </span>
              <Input 
                type="email" 
                placeholder="Email" 
                className="w-36 h-9 text-sm"
              />
              <Button 
                variant="default" 
                size="sm" 
                className="h-9 px-4 text-sm font-semibold"
                onClick={() => window.location.href = 'https://fdpradio.com/newsletter/?nm=confirmed&nk=1998-1e6474f50b'}
              >
                Suscríbete
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 hover:bg-secondary rounded-md transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in border-t border-border">
            <nav className="flex flex-col gap-3 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-foreground hover:text-primary font-semibold transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
            <div className="mt-4 pt-4 border-t border-border">
              <div className="flex flex-col gap-3">
                <Input type="email" placeholder="Email para newsletter" className="w-full" />
                <Button 
                  variant="default" 
                  size="sm" 
                  className="w-full"
                  onClick={() => window.location.href = 'https://fdpradio.com/newsletter/?nm=confirmed&nk=1998-1e6474f50b'}
                >
                  Suscríbete
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
