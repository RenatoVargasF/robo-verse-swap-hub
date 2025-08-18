import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Pricing = () => {
  const plans = [
    {
      name: "Starter",
      price: "Gratuito",
      description: "Perfeito para começar no trading automatizado",
      features: [
        "Até 2 robôs simultâneos",
        "Robôs básicos gratuitos",
        "Dashboard simplificado",
        "Suporte por email",
        "Relatórios mensais",
        "Capital máximo: R$ 10.000"
      ],
      highlighted: false,
      buttonText: "Começar Grátis",
      badge: null
    },
    {
      name: "Professional",
      price: "R$ 97",
      period: "/mês",
      description: "Para traders sérios que querem maximizar resultados",
      features: [
        "Até 10 robôs simultâneos",
        "Todos os robôs premium",
        "Dashboard avançado",
        "Suporte prioritário 24/7",
        "Relatórios em tempo real",
        "Análise de risco avançada",
        "API para automação",
        "Capital ilimitado"
      ],
      highlighted: true,
      buttonText: "Assinar Agora",
      badge: "Mais Popular"
    },
    {
      name: "Enterprise",
      price: "R$ 297",
      period: "/mês",
      description: "Solução completa para instituições e day traders profissionais",
      features: [
        "Robôs ilimitados",
        "Robôs exclusivos Enterprise",
        "Multi-conta e white-label",
        "Suporte dedicado",
        "Relatórios personalizados",
        "Backtesting avançado",
        "Integração com corretoras",
        "Consultoria especializada",
        "SLA garantido 99.9%"
      ],
      highlighted: false,
      buttonText: "Falar com Vendas",
      badge: "Enterprise"
    }
  ];

  const addons = [
    {
      name: "Consultoria Especializada",
      description: "Sessões 1:1 com especialistas em trading quantitativo",
      price: "R$ 197/hora"
    },
    {
      name: "Robô Personalizado",
      description: "Desenvolvimento de estratégia exclusiva para seu perfil",
      price: "A partir de R$ 2.997"
    },
    {
      name: "Integração Avançada",
      description: "Conecte com qualquer corretora ou sistema existente",
      price: "R$ 497/integração"
    }
  ];

  return (
    <PageLayout 
      title="Planos e Preços"
      description="Escolha o plano ideal para seu perfil de investimento e comece a automatizar suas operações hoje mesmo."
    >
      <div className="container mx-auto px-6 py-12">
        {/* Pricing Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 relative ${
                plan.highlighted 
                  ? 'bg-gradient-card border-primary/40 scale-105 shadow-neon' 
                  : 'bg-gradient-card border-border/20'
              } transition-all duration-300 hover:scale-[1.02]`}
            >
              {plan.badge && (
                <Badge 
                  className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary/10 text-primary border-primary/20"
                >
                  {plan.badge}
                </Badge>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && <span className="text-muted-foreground">{plan.period}</span>}
                </div>
                <p className="text-muted-foreground text-sm">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-2">
                    <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className={`w-full ${
                  plan.highlighted 
                    ? 'bg-gradient-primary hover:scale-105 glow-neon' 
                    : 'variant-outline'
                }`}
                variant={plan.highlighted ? 'default' : 'outline'}
              >
                {plan.buttonText}
              </Button>
            </Card>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Comparação Detalhada</h2>
          <Card className="p-6 bg-gradient-card border-border/20 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border/20">
                  <th className="text-left py-4">Recurso</th>
                  <th className="text-center py-4">Starter</th>
                  <th className="text-center py-4">Professional</th>
                  <th className="text-center py-4">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/20">
                  <td className="py-4">Robôs simultâneos</td>
                  <td className="text-center py-4">2</td>
                  <td className="text-center py-4">10</td>
                  <td className="text-center py-4">Ilimitado</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="py-4">Suporte</td>
                  <td className="text-center py-4">Email</td>
                  <td className="text-center py-4">24/7 Chat</td>
                  <td className="text-center py-4">Dedicado</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="py-4">API Access</td>
                  <td className="text-center py-4">❌</td>
                  <td className="text-center py-4">✅</td>
                  <td className="text-center py-4">✅</td>
                </tr>
                <tr className="border-b border-border/20">
                  <td className="py-4">Relatórios</td>
                  <td className="text-center py-4">Básico</td>
                  <td className="text-center py-4">Avançado</td>
                  <td className="text-center py-4">Personalizado</td>
                </tr>
                <tr>
                  <td className="py-4">White-label</td>
                  <td className="text-center py-4">❌</td>
                  <td className="text-center py-4">❌</td>
                  <td className="text-center py-4">✅</td>
                </tr>
              </tbody>
            </table>
          </Card>
        </div>

        {/* Add-ons */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-8">Serviços Adicionais</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addons.map((addon, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-border/20 hover:border-primary/20 transition-all duration-300">
                <h3 className="font-semibold text-lg mb-2">{addon.name}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{addon.description}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">{addon.price}</span>
                  <Button variant="outline" size="sm">
                    Contratar
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* FAQ Section */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-8">Perguntas Frequentes</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="p-6 bg-gradient-card border-border/20">
              <h3 className="font-semibold mb-2">Posso cancelar a qualquer momento?</h3>
              <p className="text-muted-foreground text-sm">
                Sim, você pode cancelar sua assinatura a qualquer momento. Não há taxa de cancelamento e você manterá acesso até o final do período pago.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/20">
              <h3 className="font-semibold mb-2">Como funcionam os robôs gratuitos?</h3>
              <p className="text-muted-foreground text-sm">
                Os robôs gratuitos são estratégias básicas porém eficientes, desenvolvidas pela nossa equipe. Eles têm funcionalidades limitadas mas são perfeitos para começar.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/20">
              <h3 className="font-semibold mb-2">Qual o capital mínimo recomendado?</h3>
              <p className="text-muted-foreground text-sm">
                Recomendamos começar com pelo menos R$ 1.000 para o plano Starter e R$ 5.000 para o Professional, mas você pode começar com qualquer valor.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-card border-border/20">
              <h3 className="font-semibold mb-2">Os resultados são garantidos?</h3>
              <p className="text-muted-foreground text-sm">
                Não há garantia de lucro no trading. Os resultados mostrados são baseados em dados históricos e podem não se repetir no futuro. Sempre invista com responsabilidade.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Pricing;