import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FeatureCard from '@/components/FeatureCard';
import { 
  Building2, 
  Users, 
  FileText, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Search,
  Database,
  Zap,
  Award,
  Camera,
  TrendingUp
} from 'lucide-react';

// Import images
import realestateOffice1 from '../../assets/images/realestate-office-1.jpg';

const Imobiliarias = () => {
  const features = [
    {
      icon: Users,
      title: 'CRM Imobiliário Completo',
      description: 'Gestão completa de leads, clientes e proprietários com automação de follow-up e nutrição de prospects.'
    },
    {
      icon: FileText,
      title: 'Automação de Contratos',
      description: 'Geração automática de contratos, propostas e documentos com assinatura digital integrada.'
    },
    {
      icon: Search,
      title: 'Gestão Inteligente de Leads',
      description: 'Captura automática de leads de portais, distribuição inteligente e scoring de qualificação.'
    },
    {
      icon: Camera,
      title: 'Tours Virtuais Integrados',
      description: 'Criação e hospedagem de tours virtuais 360° com integração direta ao site e portais.'
    },
    {
      icon: Zap,
      title: 'Automação de Marketing',
      description: 'Campanhas automatizadas por email, WhatsApp e SMS baseadas no comportamento do cliente.'
    },
    {
      icon: Shield,
      title: 'Compliance CRECI',
      description: 'Conformidade total com as normas do CRECI e proteção de dados conforme LGPD imobiliária.'
    }
  ];

  const benefits = [
    { metric: '85%', description: 'Aumento na conversão de leads' },
    { metric: '70%', description: 'Redução no tempo de fechamento' },
    { metric: '90%', description: 'Melhoria no follow-up de clientes' },
    { metric: '48h', description: 'Implementação completa' }
  ];

  const processes = [
    {
      title: 'Captura de Leads',
      description: 'Integração automática com portais imobiliários e site próprio',
      icon: Search
    },
    {
      title: 'Qualificação Inteligente',
      description: 'IA qualifica leads e distribui automaticamente para corretores',
      icon: Zap
    },
    {
      title: 'Automação de Vendas',
      description: 'Follow-up automatizado, agendamento de visitas e propostas digitais',
      icon: FileText
    },
    {
      title: 'Gestão Financeira',
      description: 'Controle de comissões, repasses e assessoria para investimentos',
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background-secondary to-background-accent">
        <div className="container mx-auto px-4 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary border border-primary/20">
                <Building2 className="w-4 h-4 mr-2" />
                Soluções para Imobiliárias
              </div>
              
              <h1 className="text-display font-bold leading-tight">
                <span className="text-foreground">CRM Imobiliário</span>
                <br />
                <span className="text-corporate-gradient">Inteligente e Completo</span>
              </h1>
              
              <p className="text-body-large text-muted-foreground leading-relaxed">
                Transforme sua imobiliária com CRM especializado, automação de contratos 
                e gestão inteligente de leads. Aumente 85% a conversão de vendas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg group">
                  Demonstração Gratuita
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 text-lg">
                  Falar com Especialista
                </Button>
              </div>
              
              <div className="flex flex-wrap items-center gap-6 pt-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-accent" />
                  <span className="text-sm text-muted-foreground">Implementação em 48h</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-accent" />
                  <span className="text-sm text-muted-foreground">CRECI Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-accent" />
                  <span className="text-sm text-muted-foreground">Integração Portais</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={realestateOffice1} 
                alt="Imobiliária Moderna"
                className="rounded-2xl shadow-corporate-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Stats */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold mb-2">{benefit.metric}</div>
                <div className="text-sm lg:text-base opacity-90">{benefit.description}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-heading font-bold text-foreground">
              Funcionalidades Especializadas
            </h2>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              Desenvolvemos cada funcionalidade pensando nas necessidades específicas 
              das imobiliárias modernas.
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

      {/* Process Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-heading font-bold text-foreground">
              Como Funciona a Automação Imobiliária
            </h2>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              Processo simplificado em 4 etapas que transforma completamente 
              a gestão da sua imobiliária.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processes.map((process, index) => {
              const Icon = process.icon;
              return (
                <Card key={index} className="p-6 text-center hover-lift">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{process.title}</h3>
                  <p className="text-muted-foreground text-sm">{process.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-corporate-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-heading font-bold">
              Pronto para Automatizar sua Imobiliária?
            </h2>
            <p className="text-body-large opacity-90">
              Agende uma demonstração personalizada e veja como podemos aumentar 85% a conversão 
              de leads e otimizar a gestão da sua imobiliária.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                Demonstração Gratuita
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                Falar com Especialista Imobiliário
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Imobiliarias;

