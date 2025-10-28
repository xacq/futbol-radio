import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Copyright */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="bg-primary text-primary-foreground font-bold text-2xl px-3 py-2 rounded-lg">
                FDP
              </div>
              <span className="text-lg font-semibold">Radio</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2025 FDP Radio. Todos los derechos reservados.
            </p>
          </div>

          {/* Programs Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">PROGRAMAS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Fútbol de Primera
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Trivia
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  ¿Qué pasa DT?
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  El sitio en vivo
                </a>
              </li>
            </ul>
          </div>

          {/* About Links */}
          <div>
            <h3 className="font-bold text-foreground mb-4">NOSOTROS</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  El Programa
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Podcast
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Noticias
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Catar 2022
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Videos
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Partido Virtual
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                  Políticas de Privacidad
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-foreground mb-4">
              Suscríbete a nuestro newsletter
            </h3>
            <div className="space-y-3">
              <Input 
                type="email" 
                placeholder="Email" 
                className="w-full"
              />
              <Button 
                variant="default" 
                className="w-full"
                onClick={() => window.location.href = 'https://fdpradio.com/newsletter/?nm=confirmed&nk=1998-1e6474f50b'}
              >
                Suscríbete
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
