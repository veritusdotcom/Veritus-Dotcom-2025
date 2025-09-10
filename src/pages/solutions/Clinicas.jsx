import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FeatureCard from '@/components/FeatureCard';
import { 
  Stethoscope, 
  Calendar, 
  Users, 
  Shield, 
  CheckCircle,
  ArrowRight,
  FileText,
  Database,
  Zap,
  Award,
  Clock,
  Heart
} from 'lucide-react';

// Import images
import clinic1 from '../../assets/images/clinic-1.png';

const Clinicas = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Agendamento Inteligente',
      description: 'Sistema de agendamento online com confirmação automática, lembretes e gestão de lista de espera.'
    },
    {
      icon: FileText,
      title: 'Prontuários Digitais',
      description: 'Prontuários eletrônicos seguros com histórico completo, fotos de evolução e integração com equipamentos.'
    },
    {
      icon: Database,
      title: 'Controle de Estoque Automatizado',
      description: 'Gestão inteligente de produtos, materiais e equipamentos com alertas de reposição automáticos.'
    },
    {
      icon: Heart,
      title: 'Sistema de Telemedicina',
      description: 'Consultas online seguras com prescrição digital e acompanhamento remoto de pacientes.'
    },
    {
      icon: Zap,
      title: 'Automação de Processos',
      description: 'Automatize protocolos de atendimento, follow-ups e campanhas de marketing para pacientes.'
    },
    {
      icon: Shield,
      title: 'Compliance LGPD Saúde',
      description: 'Proteção total de dados dos pacientes com conformidade às normas específicas da área da saúde.'
    }
  ];

  const benefits = [
    { metric: '70%', description: 'Redução no tempo de agendamento' },
    { metric: '85%', description: 'Melhoria na satisfação do paciente' },
    { metric: '60%', description: 'Aumento na retenção de clientes' },
    { metric: '48h', description: 'Implementação completa' }
  ];

  const processes = [
    {
      title: 'Agendamento Online',
      description: 'Pacientes agendam online 24/7 com confirmação automática e lembretes',
      icon: Calendar
    },
    {
      title: 'Atendimento Digital',
      description: 'Prontuários digitais, fotos de evolução e prescrições eletrônicas',
      icon: FileText
    },
    {
      title: 'Follow-up Automatizado',
      description: 'Campanhas automáticas de pós-consulta e lembretes de retorno',
      icon: Zap
    },
    {
      title: 'Gestão Financeira',
      description: 'Controle de pagamentos, planos de tratamento e assessoria financeira',
      icon: Database
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
                <Stethoscope className="w-4 h-4 mr-2" />
                Soluções para Clínicas de Estética
              </div>
              
              <h1 className="text-display font-bold leading-tight">
                <span className="text-foreground">Gestão Clínica</span>
                <br />
                <span className="text-corporate-gradient">Completa e Digital</span>
              </h1>
              
              <p className="text-body-large text-muted-foreground leading-relaxed">
                Transforme sua clínica com agendamento inteligente, prontuários digitais 
                e telemedicina integrada. Aumente 85% a satisfação dos pacientes.
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
                  <span className="text-sm text-muted-foreground">LGPD Saúde</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-accent" />
                  <span className="text-sm text-muted-foreground">CFM Compliant</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={clinic1} 
                alt="Clínica de Estética Moderna"
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
              das clínicas de estética modernas.
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
              Como Funciona a Automação Clínica
            </h2>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              Processo simplificado em 4 etapas que transforma completamente 
              a gestão da sua clínica de estética.
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
              Pronto para Digitalizar sua Clínica?
            </h2>
            <p className="text-body-large opacity-90">
              Agende uma demonstração personalizada e veja como podemos aumentar 85% a satisfação 
              dos pacientes e otimizar a gestão da sua clínica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                Demonstração Gratuita
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                Falar com Especialista em Saúde
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Clinicas;
