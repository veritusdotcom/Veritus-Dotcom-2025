import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Check, 
  Star, 
  ArrowRight
} from 'lucide-react';

const Planos = () => {
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
      {/* Header Section */}
      <section className="py-20 bg-corporate-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-display font-bold">
              Do Básico ao Premium: Acompanhamos seu Crescimento
            </h1>
            <p className="text-body-large opacity-90 max-w-3xl mx-auto">
              Escolha o plano ideal para automatizar seus processos e potencializar seus investimentos. 
              Implementação em 48 horas com suporte dedicado.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 pt-8">
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">Sem fidelidade</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">LGPD Compliant</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="w-5 h-5 text-accent" />
                <span className="text-sm text-muted-foreground">Implementação 48h</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-center max-w-2xl mx-auto">
            <Card className="relative p-8 border-primary shadow-corporate-lg hover-lift w-full max-w-md">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium flex items-center">
                  <Star className="w-4 h-4 mr-1" />
                  Plano Único
                </div>
              </div>
              
              <div className="text-center space-y-4 mb-8">
                <h3 className="text-3xl font-bold text-foreground">Veritus Dotcom</h3>
                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground">A partir de</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-foreground">R$ 2.500</span>
                    <span className="text-xl text-foreground ml-1">/mês</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Automação: a consultar</p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Automação personalizada de processos</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Hospedagem segura e confiável</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Assessoria financeira especializada</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Implementação em 48 horas</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Suporte técnico dedicado</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">LGPD compliance</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm text-foreground">Backup automático</span>
                </div>
              </div>

              <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg font-medium">
                Falar com Especialista
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Card>
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
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-heading font-bold">
              Pronto para Começar?
            </h2>
            <p className="text-body-large opacity-90">
              Agende uma demonstração gratuita e descubra como a Veritus Dotcom pode transformar seu negócio em apenas 48 horas.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
                Demonstração Gratuita
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
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

