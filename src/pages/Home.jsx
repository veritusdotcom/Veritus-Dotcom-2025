import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FeatureCard from '@/components/FeatureCard';
import SolutionCard from '@/components/SolutionCard';
import { 
  ArrowRight, 
  CheckCircle, 
  Shield, 
  Users, 
  Calculator,
  Scale,
  Stethoscope,
  Building2,
  Zap,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  BarChart3,
  Headphones,
  Lock
} from 'lucide-react';

// Import images
import businessAutomation from '../assets/images/business-automation.png';
import professionalTeam from '../assets/images/professional-team.jpg';
import businessGrowth from '../assets/images/business-growth.jpg';
import accountingOffice from '../assets/images/accounting-office-1.jpg';
import lawOffice from '../assets/images/law-office-1.jpg';
import clinic from '../assets/images/clinic-1.png';
import realestateOffice from '../assets/images/realestate-office-1.jpg';

const Home = () => {
  const solutions = [
    {
      icon: Calculator,
      title: 'Para Contabilidade',
      description: 'Automação fiscal, conciliação bancária e geração de relatórios para escritórios contábeis.',
      features: [
        'Integração fiscal automatizada',
        'Conciliação bancária inteligente',
        'Relatórios gerenciais em tempo real',
        'Backup seguro de documentos'
      ],
      image: accountingOffice,
      href: '/solucoes/contabilidade'
    },
    {
      icon: Scale,
      title: 'Para Advocacia',
      description: 'Gestão de prazos, automação de petições e controle de processos jurídicos.',
      features: [
        'Gestão automatizada de prazos',
        'Automação de petições',
        'Controle completo de processos',
        'Armazenamento seguro de documentos'
      ],
      image: lawOffice,
      href: '/solucoes/advocacia'
    },
    {
      icon: Stethoscope,
      title: 'Para Clínicas de Estética',
      description: 'Agendamento inteligente, prontuários digitais e controle de estoque.',
      features: [
        'Agendamento inteligente',
        'Prontuários digitais',
        'Controle de estoque automatizado',
        'Sistema de telemedicina'
      ],
      image: clinic,
      href: '/solucoes/clinicas'
    },
    {
      icon: Building2,
      title: 'Para Imobiliárias',
      description: 'CRM imobiliário, automação de contratos e gestão inteligente de leads.',
      features: [
        'CRM imobiliário completo',
        'Automação de contratos',
        'Gestão inteligente de leads',
        'Tours virtuais integrados'
      ],
      image: realestateOffice,
      href: '/solucoes/imobiliarias'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Automação Inteligente',
      description: 'Transforme processos manuais em fluxos automatizados que economizam tempo e reduzem erros.'
    },
    {
      icon: Shield,
      title: 'Hospedagem Segura',
      description: 'Infraestrutura robusta com backup automático e proteção de dados LGPD compliant.'
    },
    {
      icon: TrendingUp,
      title: 'Assessoria Financeira',
      description: 'Orientação especializada em investimentos via BTG Pactual para crescimento patrimonial.'
    },
    {
      icon: Award,
      title: 'Especialização Setorial',
      description: 'Conhecimento profundo das necessidades específicas de cada setor regulado.'
    },
    {
      icon: Clock,
      title: 'Implementação Rápida',
      description: 'Implementação completa em até 48 horas com suporte dedicado durante todo o processo.'
    },
    {
      icon: Headphones,
      title: 'Suporte Especializado',
      description: 'Equipe técnica especializada disponível para suporte e treinamento contínuo.'
    }
  ];

  const stats = [
    { number: '127%', label: 'Aumento de Eficiência' },
    { number: '48h', label: 'Implementação' },
    { number: '99.9%', label: 'Uptime Garantido' },
    { number: '24/7', label: 'Suporte Técnico' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background-secondary to-background-accent">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 py-20 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
                <Award className="w-4 h-4 mr-2" />
                Solução Completa Empresarial
              </div>
              
              <h1 className="text-display lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Automação Inteligente</span>
                <br />
                <span className="text-corporate-gradient">+ Assessoria Financeira</span>
              </h1>
              
              <p className="text-body-large text-muted-foreground leading-relaxed max-w-2xl">
                A única plataforma que combina <strong>automação empresarial</strong>, 
                <strong> hospedagem confiável</strong> e <strong>assessoria financeira especializada</strong> 
                para transformar sua empresa com resultados mensuráveis.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg">
                  Fale Conosco
                </Button>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm text-muted-foreground">Implementação em 48h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="text-sm text-muted-foreground">LGPD Compliance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-accent" />
                  <span className="text-sm text-muted-foreground">Suporte Dedicado</span>
                </div>
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <div className="bg-white/90 rounded-2xl shadow-corporate-lg p-8 border border-border">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-foreground">Processos Automatizados</h3>
                    <span className="text-primary font-medium">+127% eficiência</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Calculator className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-foreground">Automação Contábil</span>
                      </div>
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">Ativo</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Scale className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-foreground">Gestão Jurídica</span>
                      </div>
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">Ativo</span>
                    </div>
                    
                    <div className="flex items-center justify-between p-3 bg-secondary rounded-lg">
                      <div className="flex items-center space-x-3">
                        <DollarSign className="h-5 w-5 text-primary" />
                        <span className="text-sm font-medium text-foreground">Assessoria Financeira</span>
                      </div>
                      <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">Ativo</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-sm lg:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-heading font-bold text-foreground">
              Soluções Especializadas por Setor
            </h2>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              Desenvolvemos automações específicas para as necessidades únicas de cada setor, 
              combinando conhecimento técnico com expertise regulatória.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <SolutionCard
                key={index}
                icon={solution.icon}
                title={solution.title}
                description={solution.description}
                features={solution.features}
                image={solution.image}
                href={solution.href}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-heading font-bold text-foreground">
              Por que Escolher a Veritus Dotcom?
            </h2>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              Somos a única empresa que oferece automação, hospedagem e assessoria financeira 
              integradas em uma solução completa para seu crescimento.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

