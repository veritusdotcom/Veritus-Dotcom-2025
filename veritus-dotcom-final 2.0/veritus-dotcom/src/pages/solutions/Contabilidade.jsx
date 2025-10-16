import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FeatureCard from '@/components/FeatureCard';
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Shield, 
  Clock, 
  CheckCircle,
  ArrowRight,
  BarChart3,
  Database,
  Zap,
  Users,
  Award
} from 'lucide-react';

// Import images
import accountingOffice1 from '../../assets/images/accounting-office-1.jpg';
import accountingOffice2 from '../../assets/images/accounting-office-2.jpg';
import accountingWorkspace1 from '../../assets/images/accounting-workspace-1.jpg';
import accountingWorkspace2 from '../../assets/images/accounting-workspace-2.jpg';

const Contabilidade = () => {
  const features = [
    {
      icon: FileText,
      title: 'Integração Fiscal Automatizada',
      description: 'Conecte-se automaticamente com a Receita Federal, SPED, NFe e outros sistemas fiscais para eliminar trabalho manual.'
    },
    {
      icon: BarChart3,
      title: 'Conciliação Bancária Inteligente',
      description: 'Algoritmos avançados fazem a conciliação automática de extratos bancários com lançamentos contábeis.'
    },
    {
      icon: TrendingUp,
      title: 'Relatórios Gerenciais em Tempo Real',
      description: 'Dashboards interativos com DRE, Balanço Patrimonial e indicadores financeiros atualizados automaticamente.'
    },
    {
      icon: Database,
      title: 'Backup Seguro de Documentos',
      description: 'Armazenamento em nuvem com criptografia e backup automático de todos os documentos fiscais e contábeis.'
    },
    {
      icon: Zap,
      title: 'Automação de Rotinas',
      description: 'Automatize fechamentos mensais, cálculos de impostos e geração de guias de recolhimento.'
    },
    {
      icon: Shield,
      title: 'Compliance LGPD',
      description: 'Proteção total de dados dos clientes com conformidade às normas de privacidade e segurança.'
    }
  ];

  const benefits = [
    { metric: '75%', description: 'Redução no tempo de fechamento mensal' },
    { metric: '90%', description: 'Menos erros em lançamentos contábeis' },
    { metric: '60%', description: 'Economia em custos operacionais' },
    { metric: '48h', description: 'Implementação completa' }
  ];

  const processes = [
    {
      title: 'Importação Automática',
      description: 'Extratos bancários, NFes e documentos fiscais são importados automaticamente',
      icon: Database
    },
    {
      title: 'Processamento Inteligente',
      description: 'IA classifica e concilia lançamentos, identifica divergências e sugere correções',
      icon: Zap
    },
    {
      title: 'Relatórios Instantâneos',
      description: 'Demonstrativos financeiros e fiscais gerados automaticamente em tempo real',
      icon: BarChart3
    },
    {
      title: 'Assessoria Financeira',
      description: 'Orientação especializada para investimentos e planejamento tributário',
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
                <Calculator className="w-4 h-4 mr-2" />
                Soluções para Escritórios Contábeis
              </div>
              
              <h1 className="text-display font-bold leading-tight">
                <span className="text-foreground">Automação Contábil</span>
                <br />
                <span className="text-corporate-gradient">Completa e Inteligente</span>
              </h1>
              
              <p className="text-body-large text-muted-foreground leading-relaxed">
                Transforme seu escritório contábil com automação fiscal, conciliação bancária inteligente 
                e relatórios gerenciais em tempo real. Reduza 75% do tempo em rotinas operacionais.
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
                  <span className="text-sm text-muted-foreground">SPED Compliant</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Award className="h-5 w-5 text-accent" />
                  <span className="text-sm text-muted-foreground">Suporte CRC</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={accountingOffice1} 
                alt="Escritório Contábil Moderno"
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
              dos escritórios contábeis modernos.
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
              Como Funciona a Automação
            </h2>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              Processo simplificado em 4 etapas que transforma completamente 
              a operação do seu escritório contábil.
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

      {/* Image Gallery */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-heading font-bold text-foreground">
              Escritórios Modernos e Eficientes
            </h2>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              Veja como a tecnologia transforma o ambiente de trabalho contábil.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <img 
                src={accountingOffice2} 
                alt="Escritório Contábil Profissional"
                className="rounded-lg shadow-corporate w-full h-64 object-cover"
              />
              <h3 className="text-xl font-semibold text-foreground">Ambiente Profissional</h3>
              <p className="text-muted-foreground">
                Escritórios modernos equipados com tecnologia de ponta para máxima produtividade.
              </p>
            </div>
            <div className="space-y-4">
              <img 
                src={accountingWorkspace1} 
                alt="Workspace Contábil Digital"
                className="rounded-lg shadow-corporate w-full h-64 object-cover"
              />
              <h3 className="text-xl font-semibold text-foreground">Workspace Digital</h3>
              <p className="text-muted-foreground">
                Dashboards intuitivos e relatórios automatizados que facilitam a tomada de decisões.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-corporate-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-heading font-bold">
              Pronto para Automatizar seu Escritório?
            </h2>
            <p className="text-body-large opacity-90">
              Agende uma demonstração personalizada e veja como podemos reduzir 75% do tempo 
              em rotinas operacionais do seu escritório contábil.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                Demonstração Gratuita
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                Falar com Especialista Contábil
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contabilidade;

