import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  Menu, 
  X, 
  ChevronDown,
  Calculator,
  Scale,
  Stethoscope,
  Building2
} from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const location = useLocation();

  const solutions = [
    {
      title: 'Para Contabilidade',
      description: 'Automação fiscal e conciliação bancária',
      icon: Calculator,
      href: '/solucoes/contabilidade'
    },
    {
      title: 'Para Advocacia',
      description: 'Gestão de prazos e processos',
      icon: Scale,
      href: '/solucoes/advocacia'
    },
    {
      title: 'Para Clínicas',
      description: 'Agendamento e prontuários digitais',
      icon: Stethoscope,
      href: '/solucoes/clinicas'
    },
    {
      title: 'Para Imobiliárias',
      description: 'CRM e gestão de leads',
      icon: Building2,
      href: '/solucoes/imobiliarias'
    }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-corporate-gradient rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">V</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-foreground">Veritus Dotcom</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 ml-16">
            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
                className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors"
              >
                <span>Soluções</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isSolutionsOpen && (
                <div
                  onMouseEnter={() => setIsSolutionsOpen(true)}
                  onMouseLeave={() => setIsSolutionsOpen(false)}
                  className="absolute top-full left-0 mt-2 w-80 bg-white rounded-lg shadow-corporate border border-border p-4"
                >
                  <div className="grid grid-cols-1 gap-3">
                    {solutions.map((solution) => {
                      const Icon = solution.icon;
                      return (
                        <Link
                          key={solution.href}
                          to={solution.href}
                          className="flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary transition-colors"
                        >
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-medium text-foreground">{solution.title}</h4>
                            <p className="text-sm text-muted-foreground">{solution.description}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/planos"
              className={`text-foreground hover:text-primary transition-colors ${
                isActive('/planos') ? 'text-primary font-medium' : ''
              }`}
            >
              Planos
            </Link>

            <Link
              to="/assessoria-financeira"
              className={`text-foreground hover:text-primary transition-colors ${
                isActive('/assessoria-financeira') ? 'text-primary font-medium' : ''
              }`}
            >
              Assessoria Financeira
            </Link>

            <Link
              to="/contato"
              className={`text-foreground hover:text-primary transition-colors ${
                isActive('/contato') ? 'text-primary font-medium' : ''
              }`}
            >
              Contato
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <div className="space-y-2">
                <p className="font-medium text-foreground px-2">Soluções</p>
                {solutions.map((solution) => {
                  const Icon = solution.icon;
                  return (
                    <Link
                      key={solution.href}
                      to={solution.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-secondary transition-colors"
                    >
                      <Icon className="w-5 h-5 text-primary" />
                      <span className="text-foreground">{solution.title}</span>
                    </Link>
                  );
                })}
              </div>

              <Link
                to="/planos"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors p-2"
              >
                Planos
              </Link>

              <Link
                to="/assessoria-financeira"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors p-2"
              >
                Assessoria Financeira
              </Link>

              <Link
                to="/contato"
                onClick={() => setIsMenuOpen(false)}
                className="text-foreground hover:text-primary transition-colors p-2"
              >
                Contato
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

