import { 
  Search, 
  Shield, 
  Zap, 
  Users, 
  Globe, 
  Lock, 
  Database, 
  Cpu, 
  Network, 
  Code, 
  GitBranch, 
  Monitor 
} from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export default function Features() {
  const coreFeatures = [
    {
      title: "Agent Discovery",
      description: "Find and connect with AI agents across different platforms and frameworks",
      icon: Search,
    },
    {
      title: "Enterprise Security",
      description: "Built-in authentication, authorization, and audit logging for enterprise use",
      icon: Shield,
    },
    {
      title: "Real-time Communication",
      description: "Enable seamless agent-to-agent communication with WebSocket support",
      icon: Zap,
    },
    {
      title: "Multi-Cloud Support",
      description: "Deploy and manage agents across AWS, GCP, Azure, and on-premises",
      icon: Globe,
    },
    {
      title: "Community Driven",
      description: "Open source platform with active community and contributor support",
      icon: Users,
    },
    {
      title: "Privacy First",
      description: "End-to-end encryption and privacy-preserving agent interactions",
      icon: Lock,
    },
  ];

  const technicalFeatures = [
    {
      title: "FastAPI Backend",
      description: "Modern Python web framework with automatic OpenAPI documentation",
      icon: Code,
    },
    {
      title: "SQLAlchemy ORM",
      description: "Python SQL toolkit and Object-Relational Mapping",
      icon: Database,
    },
    {
      title: "PostgreSQL Database",
      description: "Robust data persistence with ACID compliance",
      icon: Database,
    },
    {
      title: "OpenSearch",
      description: "High-performance search and analytics engine",
      icon: Search,
    },
    {
      title: "OAuth 2.0",
      description: "Industry-standard authentication and authorization",
      icon: Lock,
    },
    {
      title: "Alembic Migrations",
      description: "Database migration tool for SQLAlchemy",
      icon: GitBranch,
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card border border-border shadow-sm">
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 px-3 py-1 text-sm">
              Core Features
            </Badge>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Everything You Need
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive platform for AI agent management, discovery, and collaboration
          </p>
        </div>

        {/* Core Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
          {coreFeatures.map((feature, index) => (
            <Card
              key={feature.title}
              className="p-4 sm:p-6 bg-card border border-border shadow-sm hover:shadow-md transition-shadow duration-200"
              data-testid={`card-feature-${feature.title.toLowerCase().replace(' ', '-')}`}
            >
              <div className="space-y-4 sm:space-y-6">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-blue-100 dark:bg-primary/10 rounded-xl flex items-center justify-center">
                  <feature.icon className="h-6 w-6 sm:h-7 sm:w-7 text-blue-600 dark:text-primary" />
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  <h3 className="text-lg sm:text-xl font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Technical Features Section */}
        <div className="space-y-8 sm:space-y-12">
          <div className="text-center space-y-3 sm:space-y-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-card border border-border shadow-sm">
              <Badge variant="secondary" className="bg-blue-100 dark:bg-primary/10 text-blue-600 dark:text-primary border-blue-200 dark:border-primary/20 px-3 py-1 text-sm">
                Technical Stack
              </Badge>
            </div>
            
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">
              Built for Scale
            </h3>
            
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Enterprise-grade infrastructure and modern technologies
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
            {technicalFeatures.map((feature, index) => (
              <Card
                key={feature.title}
                className="p-3 sm:p-4 bg-card border border-border shadow-sm hover:shadow-md transition-shadow duration-200"
                data-testid={`card-tech-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="space-y-3 sm:space-y-4 text-center">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <feature.icon className="h-4 w-4 sm:h-5 sm:w-5 text-blue-600 dark:text-primary" />
                  </div>
                  
                  <div className="space-y-1 sm:space-y-2">
                    <h4 className="text-xs sm:text-sm font-semibold text-foreground leading-tight">
                      {feature.title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}