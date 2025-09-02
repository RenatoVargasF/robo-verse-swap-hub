import { PageLayout } from "@/components/PageLayout";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Switch } from "@/components/ui/switch";
import { OnboardingTour } from "@/components/OnboardingTour";
import { useState, useEffect } from "react";

const Dashboard = () => {
  const [showTour, setShowTour] = useState(false);

  // Check if user is new (in a real app, this would come from user data)
  useEffect(() => {
    const hasSeenTour = localStorage.getItem('dashboard-tour-completed');
    if (!hasSeenTour) {
      // Delay to let the page load
      setTimeout(() => setShowTour(true), 1000);
    }
  }, []);

  const completeTour = () => {
    localStorage.setItem('dashboard-tour-completed', 'true');
    setShowTour(false);
  };

  const skipTour = () => {
    localStorage.setItem('dashboard-tour-completed', 'true');
    setShowTour(false);
  };
  const activeRobots = [
    {
      id: 1,
      name: "Alpha Scalper Pro",
      status: "running",
      profit: "+R$ 2.847,32",
      profitPercent: "+12.4%",
      trades: 47,
      winRate: 68,
      balance: "R$ 25.000,00",
      risk: "Médio"
    },
    {
      id: 2,
      name: "Trend Master AI",
      status: "paused",
      profit: "+R$ 1.234,56",
      profitPercent: "+8.9%",
      trades: 23,
      winRate: 74,
      balance: "R$ 15.000,00",
      risk: "Baixo"
    },
    {
      id: 3,
      name: "Grid Master 3000",
      status: "running",
      profit: "+R$ 567,89",
      profitPercent: "+5.2%",
      trades: 156,
      winRate: 52,
      balance: "R$ 10.000,00",
      risk: "Baixo"
    }
  ];

  const recentTrades = [
    { symbol: "PETR4", type: "COMPRA", quantity: 100, price: "R$ 32,45", profit: "+R$ 245,00", time: "10:34" },
    { symbol: "VALE3", type: "VENDA", quantity: 200, price: "R$ 67,89", profit: "+R$ 189,50", time: "10:28" },
    { symbol: "ITUB4", type: "COMPRA", quantity: 300, price: "R$ 24,12", profit: "-R$ 67,00", time: "10:15" },
    { symbol: "BBDC4", type: "VENDA", quantity: 150, price: "R$ 19,87", profit: "+R$ 134,20", time: "10:02" },
  ];

  return (
    <>
      <PageLayout 
        title="Dashboard"
        description="Monitore seus robôs ativos, performance e histórico de operações em tempo real."
      >
        <div className="container mx-auto px-6 py-12">
          {/* Overview Stats */}
          <div id="stats-section" className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-gradient-card border-border/20">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-muted-foreground">Saldo Total</h3>
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
              </svg>
            </div>
            <div className="text-2xl font-bold">R$ 50.000,00</div>
            <p className="text-xs text-muted-foreground">Capital disponível</p>
          </Card>

          <Card className="p-6 bg-gradient-card border-border/20">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-muted-foreground">Lucro Hoje</h3>
              <svg className="w-4 h-4 text-neon-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div className="text-2xl font-bold text-neon">+R$ 1.247,89</div>
            <p className="text-xs text-muted-foreground">+2.5% no dia</p>
          </Card>

          <Card className="p-6 bg-gradient-card border-border/20">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-muted-foreground">Robôs Ativos</h3>
              <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div className="text-2xl font-bold">3/5</div>
            <p className="text-xs text-muted-foreground">Em execução</p>
          </Card>

          <Card className="p-6 bg-gradient-card border-border/20">
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-sm font-medium text-muted-foreground">Taxa de Acerto</h3>
              <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div className="text-2xl font-bold text-yellow-400">67%</div>
            <p className="text-xs text-muted-foreground">Últimos 30 dias</p>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Active Robots */}
          <div id="robots-section">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold">Robôs Ativos</h2>
              <Button asChild variant="outline" size="sm">
                <a href="/marketplace">+ Adicionar Robô</a>
              </Button>
            </div>
            
            <div className="space-y-4">
              {activeRobots.map((robot) => (
                <Card key={robot.id} className="p-6 bg-gradient-card border-border/20">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg">{robot.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge 
                          variant={robot.status === 'running' ? 'default' : 'secondary'}
                          className={robot.status === 'running' ? 'bg-primary/10 text-primary' : 'bg-muted/50'}
                        >
                          {robot.status === 'running' ? 'Em Execução' : 'Pausado'}
                        </Badge>
                        <Badge 
                          variant="outline"
                          className={
                            robot.risk === 'Baixo' ? 'border-green-400/20 text-green-400' :
                            robot.risk === 'Médio' ? 'border-yellow-400/20 text-yellow-400' :
                            'border-red-400/20 text-red-400'
                          }
                        >
                          Risco {robot.risk}
                        </Badge>
                      </div>
                    </div>
                    <Switch checked={robot.status === 'running'} />
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-sm text-muted-foreground">Lucro Total</p>
                      <div className="font-semibold text-neon">{robot.profit}</div>
                      <div className="text-sm text-neon">{robot.profitPercent}</div>
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Saldo</p>
                      <div className="font-semibold">{robot.balance}</div>
                    </div>
                  </div>

                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm text-muted-foreground">Taxa de Acerto</span>
                    <span className="text-sm font-medium">{robot.winRate}%</span>
                  </div>
                  <Progress value={robot.winRate} className="mb-4" />

                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      Configurar
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1">
                      Histórico
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Recent Trades */}
          <div id="trades-section">
            <h2 className="text-2xl font-bold mb-6">Operações Recentes</h2>
            
            <Card className="p-6 bg-gradient-card border-border/20">
              <div className="space-y-4">
                {recentTrades.map((trade, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-border/20 last:border-0">
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full ${
                        trade.type === 'COMPRA' ? 'bg-green-400' : 'bg-red-400'
                      }`} />
                      <div>
                        <div className="font-semibold">{trade.symbol}</div>
                        <div className="text-sm text-muted-foreground">
                          {trade.type} {trade.quantity} @ {trade.price}
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`font-semibold ${
                        trade.profit.includes('+') ? 'text-neon' : 'text-red-400'
                      }`}>
                        {trade.profit}
                      </div>
                      <div className="text-sm text-muted-foreground">{trade.time}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <Button variant="outline" className="w-full mt-4">
                Ver Todas as Operações
              </Button>
            </Card>

            {/* Performance Chart */}
            <div id="chart-section">
              <Card className="p-6 mt-6 bg-gradient-card border-border/20">
          <h3 className="font-semibold mb-4">Performance dos Últimos 7 Dias</h3>
          <div className="h-48 bg-muted/10 rounded-lg flex items-center justify-center relative overflow-hidden">
            {/* Simulated Chart */}
            <svg className="w-full h-full" viewBox="0 0 400 200">
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path 
                d="M 20 150 L 60 120 L 100 100 L 140 80 L 180 70 L 220 60 L 260 50 L 300 40 L 340 30 L 380 25" 
                stroke="hsl(var(--primary))" 
                strokeWidth="2" 
                fill="none"
              />
              <path 
                d="M 20 150 L 60 120 L 100 100 L 140 80 L 180 70 L 220 60 L 260 50 L 300 40 L 340 30 L 380 25 L 380 200 L 20 200 Z" 
                fill="url(#gradient)"
              />
              {/* Data points */}
              <circle cx="60" cy="120" r="3" fill="hsl(var(--primary))" />
              <circle cx="140" cy="80" r="3" fill="hsl(var(--primary))" />
              <circle cx="220" cy="60" r="3" fill="hsl(var(--primary))" />
              <circle cx="300" cy="40" r="3" fill="hsl(var(--primary))" />
              <circle cx="380" cy="25" r="3" fill="hsl(var(--primary))" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center bg-background/20 backdrop-blur-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-neon mb-2">+8.7%</div>
                <p className="text-sm text-muted-foreground">Crescimento na semana</p>
              </div>
            </div>
          </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
    
    <OnboardingTour
      isVisible={showTour}
      onComplete={completeTour}
      onSkip={skipTour}
    />
  </>
  );
};

export default Dashboard;