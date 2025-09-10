import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock,
  Send,
  MessageCircle,
  Calendar,
  ArrowRight
} from 'lucide-react';

const Contato = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'contato@veritusdotcom.com.br',
      description: 'Resposta em até 2 horas úteis'
    },
    {
      icon: Phone,
      title: 'Telefone',
      value: '(11) 99999-9999',
      description: 'Seg a Sex, 8h às 18h'
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: 'São Paulo, SP',
      description: 'Atendimento presencial sob agendamento'
    },
    {
      icon: Clock,
      title: 'Horário',
      value: '8h às 18h',
      description: 'Segunda a Sexta-feira'
    }
  ];

  const services = [
    {
      icon: MessageCircle,
      title: 'Demonstração Gratuita',
      description: 'Agende uma demo personalizada de 30 minutos para conhecer nossa plataforma',
      action: 'Agendar Demo'
    },
    {
      icon: Phone,
      title: 'Consultoria Especializada',
      description: 'Fale com nossos especialistas sobre suas necessidades específicas',
      action: 'Falar com Especialista'
    },
    {
      icon: Calendar,
      title: 'Implementação',
      description: 'Agende a implementação da sua solução em até 48 horas',
      action: 'Agendar Implementação'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-background via-background-secondary to-background-accent">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <h1 className="text-display font-bold text-foreground">
              Entre em Contato
            </h1>
            <p className="text-body-large text-muted-foreground">
              Nossa equipe está pronta para ajudar você a transformar seu negócio. 
              Agende uma demonstração gratuita ou tire suas dúvidas conosco.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card key={index} className="p-6 text-center hover-lift">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                  <p className="text-primary font-medium mb-1">{info.value}</p>
                  <p className="text-sm text-muted-foreground">{info.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-background-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-heading font-bold text-foreground">
              Como Podemos Ajudar?
            </h2>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
              Escolha a melhor forma de entrar em contato conosco.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="p-8 text-center hover-lift">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground mb-6">{service.description}</p>
                  <Button className="w-full group">
                    {service.action}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-heading font-bold text-foreground">
                Envie sua Mensagem
              </h2>
              <p className="text-body-large text-muted-foreground">
                Preencha o formulário abaixo e nossa equipe entrará em contato em até 2 horas úteis.
              </p>
            </div>
            
            <Card className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Nome *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Seu nome completo"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="seu@email.com"
                      required
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Setor *
                    </label>
                    <select className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" required>
                      <option value="">Selecione seu setor</option>
                      <option value="contabilidade">Contabilidade</option>
                      <option value="advocacia">Advocacia</option>
                      <option value="clinicas">Clínicas de Estética</option>
                      <option value="imobiliarias">Imobiliárias</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Conte-nos sobre suas necessidades e como podemos ajudar..."
                    required
                  ></textarea>
                </div>
                
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    id="privacy"
                    className="mt-1"
                    required
                  />
                  <label htmlFor="privacy" className="text-sm text-muted-foreground">
                    Concordo com o tratamento dos meus dados pessoais conforme a LGPD e autorizo o contato da Veritus Dotcom.
                  </label>
                </div>
                
                <Button type="submit" size="lg" className="w-full group">
                  <Send className="mr-2 h-5 w-5" />
                  Enviar Mensagem
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-corporate-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-heading font-bold">
              Prefere Falar Diretamente?
            </h2>
            <p className="text-body-large opacity-90">
              Nossa equipe está disponível para uma conversa rápida sobre suas necessidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                (11) 99999-9999
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg">
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
