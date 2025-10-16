import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Instagram, 
  Facebook,
  Calculator,
  Scale,
  Stethoscope,
  Building2
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const solutions = [
    { title: 'Contabilidade', href: '/solucoes/contabilidade', icon: Calculator },
    { title: 'Advocacia', href: '/solucoes/advocacia', icon: Scale },
    { title: 'Clínicas de Estética', href: '/solucoes/clinicas', icon: Stethoscope },
    { title: 'Imobiliárias', href: '/solucoes/imobiliarias', icon: Building2 }
  ];

  const company = [
    { title: 'Sobre Nós', href: '/sobre' },
    { title: 'Planos e Preços', href: '/planos' },
    { title: 'Assessoria Financeira', href: '/assessoria-financeira' },
    { title: 'Contato', href: '/contato' }
  ];

  // Inline style para garantir negrito em todos os textos
  const boldStyle = { fontWeight: '700' };

  return (
    <footer className="bg-neutral-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-corporate-gradient rounded-lg flex items-center justify-center">
                <span className="text-white" style={boldStyle}>V</span>
              </div>
              <div>
                <h3 className="text-lg" style={boldStyle}>Veritus Dotcom</h3>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed" style={boldStyle}>
              Conectamos inteligência, tecnologia e pessoas para transformar empresas com 
              resultados mensuráveis através de automação, hospedagem e assessoria financeira especializada.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h4 className="text-lg" style={boldStyle}>Soluções</h4>
            <ul className="space-y-2">
              {solutions.map((solution) => {
                const Icon = solution.icon;
                return (
                  <li key={solution.href}>
                    <Link 
                      to={solution.href}
                      className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors text-sm"
                      style={boldStyle}
                    >
                      <Icon className="w-4 h-4" />
                      <span style={boldStyle}>{solution.title}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h4 className="text-lg" style={boldStyle}>Empresa</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item.href}>
                  <Link 
                    to={item.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                    style={boldStyle}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="text-lg" style={boldStyle}>Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <a 
                  href="mailto:contato@veritusdotcom.com.br"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  style={boldStyle}
                >
                  contato@veritusdotcom.com.br
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <a 
                  href="tel:+5511999999999"
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                  style={boldStyle}
                >
                  (11) 99999-9999
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <address className="text-gray-300 text-sm not-italic" style={boldStyle}>
                  São Paulo, SP<br />
                  Brasil
                </address>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-300 text-sm" style={boldStyle}>
              © {currentYear} Veritus Dotcom. Todos os direitos reservados.
            </p>
            <div className="flex space-x-6">
              <Link 
                to="/privacidade" 
                className="text-gray-300 hover:text-white transition-colors text-sm"
                style={boldStyle}
              >
                Política de Privacidade
              </Link>
              <Link 
                to="/termos" 
                className="text-gray-300 hover:text-white transition-colors text-sm"
                style={boldStyle}
              >
                Termos de Uso
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

