import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Marketplace = () => {
  const robots = [
    {
      id: 1,
      name: "Alpha Scalper Pro",
      description: "Robô especializado em operações de scalping com IA avançada",
      price: "Gratuito",
      performance: "+127%",
      trades: "1,245",
      category: "Scalping",
      risk: "Médio",
      status: "verified"
    },
    {
      id: 2,
      name: "Trend Master AI",
      description: "Especialista em identificação e acompanhamento de tendências",
      price: "R$ 97/mês",
      performance: "+89%",
      trades: "892",
      category: "Swing Trade",
      risk: "Baixo",
      status: "premium"
    },
    {
      id: 3,
      name: "Volatility Hunter",
      description: "Explora movimentos de alta volatilidade no mercado",
      price: "R$ 147/mês",
      performance: "+156%",
      trades: "2,341",
      category: "Day Trade",
      risk: "Alto",
      status: "premium"
    },
    {
      id: 4,
      name: "Grid Master 3000",
      description: "Estratégia de grid adaptativo para mercados laterais",
      price: "Gratuito",
      performance: "+73%",
      trades: "567",
      category: "Grid",
      risk: "Baixo",
      status: "verified"
    },
    {
      id: 5,
      name: "News Impact Bot",
      description: "Robô que opera baseado em análise de notícias e sentiment",
      price: "R$ 197/mês",
      performance: "+203%",
      trades: "1,789",
      category: "News Trading",
      risk: "Alto",
      status: "premium"
    },
    {
      id: 6,
      name: "Arbitrage Pro",
      description: "Identifica e explora oportunidades de arbitragem",
      price: "R$ 297/mês",
      performance: "+45%",
      trades: "3,456",
      category: "Arbitragem",
      risk: "Baixo",
      status: "premium"
    }
  ];

  const categories = ["Todos", "Scalping", "Day Trade", "Swing Trade", "Grid", "News Trading", "Arbitragem"];
  const riskLevels = ["Todos", "Baixo", "Médio", "Alto"];

  return (
    <PageLayout 
      title="Marketplace de Robôs"
      description="Descubra centenas de robôs de trading verificados e escolha o que melhor se adapta ao seu perfil de investimento."
    >
      <div className="container mx-auto px-6 py-12">
        {/* Filters */}
        <div className="mb-8 p-6 bg-card rounded-2xl border border-border/20">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="text-sm font-medium mb-2 block">Pesquisar</label>
              <Input placeholder="Nome do robô..." />
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Categoria</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione..." />
                </SelectTrigger>
                <SelectContent>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat.toLowerCase()}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Nível de Risco</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Selecione..." />
                </SelectTrigger>
                <SelectContent>
                  {riskLevels.map(risk => (
                    <SelectItem key={risk} value={risk.toLowerCase()}>{risk}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="text-sm font-medium mb-2 block">Preço</label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Todos" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="free">Gratuitos</SelectItem>
                  <SelectItem value="premium">Premium</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="p-6 text-center bg-gradient-card border-border/20">
            <div className="text-2xl font-bold text-primary mb-2">500+</div>
            <p className="text-muted-foreground">Robôs Disponíveis</p>
          </Card>
          <Card className="p-6 text-center bg-gradient-card border-border/20">
            <div className="text-2xl font-bold text-primary mb-2">10K+</div>
            <p className="text-muted-foreground">Usuários Ativos</p>
          </Card>
          <Card className="p-6 text-center bg-gradient-card border-border/20">
            <div className="text-2xl font-bold text-neon mb-2">+127%</div>
            <p className="text-muted-foreground">Performance Média</p>
          </Card>
          <Card className="p-6 text-center bg-gradient-card border-border/20">
            <div className="text-2xl font-bold text-yellow-400 mb-2">99.8%</div>
            <p className="text-muted-foreground">Uptime</p>
          </Card>
        </div>

        {/* Robots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {robots.map((robot) => (
            <Card key={robot.id} className="p-6 bg-gradient-card border-border/20 hover:border-primary/20 transition-all duration-300 hover:scale-[1.02]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-semibold text-lg mb-1">{robot.name}</h3>
                  <Badge 
                    variant={robot.status === 'verified' ? 'secondary' : 'default'}
                    className={robot.status === 'verified' ? 'bg-primary/10 text-primary' : 'bg-yellow-500/10 text-yellow-400'}
                  >
                    {robot.status === 'verified' ? 'Verificado' : 'Premium'}
                  </Badge>
                </div>
                <div className="text-right">
                  <div className="font-bold text-lg">{robot.price}</div>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-4 text-sm">
                {robot.description}
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                <div>
                  <span className="text-muted-foreground">Performance:</span>
                  <div className="font-semibold text-neon">{robot.performance}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Trades:</span>
                  <div className="font-semibold">{robot.trades}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Categoria:</span>
                  <div className="font-semibold">{robot.category}</div>
                </div>
                <div>
                  <span className="text-muted-foreground">Risco:</span>
                  <div className={`font-semibold ${
                    robot.risk === 'Baixo' ? 'text-green-400' : 
                    robot.risk === 'Médio' ? 'text-yellow-400' : 'text-red-400'
                  }`}>
                    {robot.risk}
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button variant="outline" size="sm" className="flex-1">
                  Ver Detalhes
                </Button>
                <Button size="sm" className="flex-1 bg-gradient-primary">
                  {robot.price === 'Gratuito' ? 'Ativar' : 'Assinar'}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Carregar Mais Robôs
          </Button>
        </div>
      </div>
    </PageLayout>
  );
};

export default Marketplace;