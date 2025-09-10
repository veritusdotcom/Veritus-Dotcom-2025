import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Check, 
  X, 
  Star, 
  ArrowRight,
  Zap,
  Shield,
  Users,
  Headphones,
  Award,
  TrendingUp
} from 'lucide-react';

const Planos = () => {
  const plans = [
    {
      name: 'Basic',
      price: 'R$ 2.500',
      period: '/mês',
      description: 'Ideal para pequenos escritórios que estão começando a automatizar',
      popular: false,
      features: [
        'Até 3 usuários',
        'Automação básica de processos',
        'Hospedagem segura (5GB)',
        'Backup automático',
        'Suporte por email',
        'Integração com 2 sistemas',
        'Relatórios básicos',
        'LGPD compliance'
      ],
      notIncluded: [
        'Assessoria financeira',
        'Suporte prioritário',
        'Integrações ilimitadas',
        'Relatórios avançados'
      ]
    },
    {
      name: 'Pro/Plus',
      price: 'R$ 5.500',
      period: '/mês',
      description: 'Para escritórios em crescimento que precisam de mais recursos',
      popular: true,
      features: [
        'Até 10 usuários',
        'Automação avançada de processos',
        'Hospedagem segura (20GB)',
        'Backup automático + versionamento',
        'Suporte prioritário (chat + telefone)',
        'Integrações ilimitadas',
        'Relatórios avançados e dashboards',
        'LGPD compliance',
        'Assessoria financeira básica',
        'Treinamento da equipe',
        'API personalizada'
      ],
      notIncluded: [
        'Assessoria financeira premium',
        'Consultoria estratégica',
        'Desenvolvimento customizado'
      ]
    },
    {
      name: 'Premium',
      price: 'R$ 12.000',
      period: '/mês',
      description: 'Solução completa para grandes escritórios e empresas',
      popular: false,
      features: [
        'Usuários ilimitados',
        'Automação completa personalizada',
        'Hospedagem dedicada (ilimitada)',
        'Backup enterprise + disaster recovery',
        'Suporte dedicado 24/7',
        'Integrações ilimitadas + customizadas',
        'Business Intelligence completo',
        'LGPD compliance + auditoria',
        'Assessoria financeira premium (BTG)',
        'Consultoria estratégica mensal',
        'Desenvolvimento customizado',
        'SLA garantido 99.9%',
        'Gerente de conta dedicado'
      ],
      notIncluded: []
    }
  ];

  const addons = [
    {
      name: 'Assessoria Financeira Premium',
      price: 'R$ 197/mês',
      description: 'Orientação especializada em investimentos via BTG Pactual'
    },
    {
      name: 'Usuários Adicionais',
      price: 'R$ 47/usuário',
      description: 'Adicione mais usuários ao seu plano atual'
    },
    {
      name: 'Armazenamento Extra',
      price: 'R$ 27/10GB',
      description: 'Espaço adicional para documentos e backups'
    },
    {
      name: 'Integrações Customizadas',
      price: 'Sob consulta',
      description: 'Desenvolvimento de integrações específicas'
    }
  ];

  const faqs = [
    {
      question: 'Posso mudar de plano a qualquer momento?',
      answer: 'Sim, você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As mudanças são aplicadas no próximo ciclo de cobrança.'
    },
    {
      question: 'Existe período de fidelidade?',
      answer: 'Não exigimos fidelidade. Você pode cancelar seu plano a qualquer momento com 30 dias de antecedência.'
    },
    {
      question: 'Como funciona a implementação?',
      answer: 'Nossa equipe realiza a implementação completa em até 48 horas, incluindo migração de dados, treinamento e configuração personalizada.'
    },
    {
      question: 'Os dados ficam seguros?',
      answer: 'Sim, utilizamos criptografia de ponta a ponta, backup automático e somos totalmente compliance com a LGPD.'
    },
    {
      question: 'Posso testar antes de assinar?',
      answer: 'Oferecemos uma demonstração gratuita personalizada para que você possa conhecer todas as funcionalidades antes de decidir.'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background-secondary to-background-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-display font-bold text-foreground">
              Planos que Crescem com seu Negócio
            </h1>
            <p className="text-body-large text-muted-foreground">
              Escolha o plano ideal para automatizar seus processos e potencializar seus investimentos. 
              Implementação em 48 horas com suporte dedicado.
            </p>
            <div className="flex items-center justify-center space-x-6 pt-4">
              <div className="flex items-center space-x-2">
                <Check className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground">Sem fidelidade</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground">LGPD Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-accent" />
                <span className="text-sm text-muted-foreground">Implementação 48h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`relative p-8 ${plan.popular ? 'border-primary shadow-corporate-lg scale-105' : 'border-border'} hover-lift`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Mais Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center space-y-4 mb-8">
                  <h3 className="text-2xl font-bold text-foreground">{plan.name}</h3>
                  <div className="space-y-2">
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                      <span className="text-muted-foreground ml-1">{plan.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-3 opacity-50">
                      <X className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  className={`w-full ${plan.popular ? 'bg-primary hover:bg-primary/90' : 'bg-secondary hover:bg-secondary/80'}`}
                  size="lg"
                >
                  {plan.name === 'Premium' ? 'Falar com Vendas' : 'Começar Agora'}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-heading font-bold text-foreground">
              Recursos Adicionais
            </h2>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              Personalize seu plano com recursos extras conforme suas necessidades específicas.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {addons.map((addon, index) => (
              <Card key={index} className="p-6 text-center hover-lift">
                <h3 className="text-lg font-semibold text-foreground mb-2">{addon.name}</h3>
                <div className="text-2xl font-bold text-primary mb-2">{addon.price}</div>
                <p className="text-sm text-muted-foreground">{addon.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-heading font-bold text-foreground">
              Perguntas Frequentes
            </h2>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              Tire suas dúvidas sobre nossos planos e serviços.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="p-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-corporate-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-heading font-bold">
              Pronto para Começar?
            </h2>
            <p className="text-body-large opacity-90">
              Agende uma demonstração gratuita e descubra como a Veritus Dotcom pode 
              transformar seu negócio em apenas 48 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                Demonstração Gratuita
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                Falar com Especialista
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Planos;

