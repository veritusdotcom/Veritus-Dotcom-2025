import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FeatureCard from '@/components/FeatureCard';
import { 
  Scale, 
  FileText, 
  Clock, 
  Shield, 
  CheckCircle,
  ArrowRight,
  Calendar,
  Database,
  Zap,
  Users,
  Award,
  Search,
  Bell
} from 'lucide-react';

// Import images
import lawOffice1 from '../../assets/images/law-office-1.jpg';
import lawOffice2 from '../../assets/images/law-office-2.jpg';

const Advocacia = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Gestão Automatizada de Prazos',
      description: 'Sistema inteligente que monitora todos os prazos processuais e envia alertas automáticos para evitar preclusões.'
    },
    {
      icon: FileText,
      title: 'Automação de Petições',
      description: 'Templates inteligentes e automação de petições recorrentes com integração direta aos sistemas dos tribunais.'
    },
    {
      icon: Search,
      title: 'Controle Completo de Processos',
      description: 'Acompanhamento em tempo real de todos os processos com atualizações automáticas dos tribunais.'
    },
    {
      icon: Database,
      title: 'Armazenamento Seguro de Documentos',
      description: 'Biblioteca digital com organização automática, busca inteligente e backup seguro de todos os documentos.'
    },
    {
      icon: Bell,
      title: 'Alertas Inteligentes',
      description: 'Notificações personalizadas para prazos, audiências, publicações e movimentações processuais.'
    },
    {
      icon: Shield,
      title: 'Compliance OAB',
      description: 'Conformidade total com as normas da OAB e proteção de dados conforme LGPD para advocacia.'
    }
  ];

  const benefits = [
    { metric: '80%', description: 'Redução em prazos perdidos' },
    { metric: '65%', description: 'Menos tempo em tarefas administrativas' },
    { metric: '90%', description: 'Melhoria na organização processual' },
    { metric: '48h', description: 'Implementação completa' }
  ];

  const processes = [
    {
      title: 'Integração Tribunais',
      description: 'Conexão automática com sistemas dos tribunais para atualizações em tempo real',
      icon: Database
    },
    {
      title: 'Monitoramento Inteligente',
      description: 'IA monitora prazos, publicações e movimentações processuais 24/7',
      icon: Zap
    },
    {
      title: 'Alertas Personalizados',
      description: 'Notificações automáticas por email, SMS e WhatsApp conforme preferências',
      icon: Bell
    },
    {
      title: 'Assessoria Jurídica',
      description: 'Orientação especializada em gestão de escritório e planejamento estratégico',
      icon: Scale
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
                <Scale className="w-4 h-4 mr-2" />
                Soluções para Escritórios de Advocacia
              </div>
              
              <h1 className="text-display font-bold leading-tight">
                <span className="text-foreground">Gestão Jurídica</span>
                <br />
                <span className="text-corporate-gradient">Inteligente e Segura</span>
              </h1>
              
              <p className="text-body-large text-muted-foreground leading-relaxed">
                Transforme seu escritório de advocacia com gestão automatizada de prazos, 
                controle completo de processos e automação de petições. Reduza 80% dos prazos perdidos.
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
                  <span className="text-sm text-muted-foreground">Compliance OAB</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-accent" />
                  <span className="text-sm text-muted-foreground">Integração Tribunais</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={lawOffice1} 
                alt="Escritório de Advocacia Moderno"
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
              dos escritórios de advocacia modernos.
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
              Como Funciona a Automação Jurídica
            </h2>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              Processo simplificado em 4 etapas que transforma completamente 
              a gestão do seu escritório de advocacia.
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
              Pronto para Modernizar seu Escritório?
            </h2>
            <p className="text-body-large opacity-90">
              Agende uma demonstração personalizada e veja como podemos reduzir 80% dos prazos perdidos 
              e otimizar a gestão do seu escritório de advocacia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                Demonstração Gratuita
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                Falar com Especialista Jurídico
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Advocacia;

