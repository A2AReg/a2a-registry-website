import { Card } from "@/components/ui/card";
import { 
  Server, 
  Shield, 
  Search, 
  Globe,
  Database,
  Users,
  Zap,
  Lock
} from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Agent Catalog",
    description: "Centralized catalog for discovering and managing AI agents across your enterprise. Add agents by providing their Agent Card URLs.",
    color: "text-primary"
  },
  {
    icon: Lock,
    title: "Agent Entitlements",
    description: "Granular access control with OAuth 2.0 client credentials flow. Grant specific agent permissions to client applications.",
    color: "text-chart-2"
  },
  {
    icon: Search,
    title: "Semantic Search",
    description: "Advanced search capabilities with lexical and semantic matching. Find the right agents for your specific tasks.",
    color: "text-chart-3"
  },
  {
    icon: Globe,
    title: "Federation",
    description: "Cross-registry peering and synchronization. Connect with other A2A registries for distributed agent discovery.",
    color: "text-chart-4"
  }
];

const technicalFeatures = [
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Rate limiting, comprehensive security headers, and enterprise-grade authentication mechanisms."
  },
  {
    icon: Database,
    title: "Production Ready",
    description: "Built with PostgreSQL, Redis caching, Elasticsearch search, and automated deployment support."
  },
  {
    icon: Users,
    title: "Modern Web UI",
    description: "Beautiful, responsive React frontend with dark/light mode and real-time updates."
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Connection pooling, horizontal scaling, and optimized search for enterprise workloads."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-muted/30" id="features">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold text-foreground" data-testid="text-features-title">
            Core Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-features-subtitle">
            Everything you need for enterprise AI agent discovery and management
          </p>
        </div>
        
        {/* Main features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="p-6 hover-elevate transition-all duration-300 border-card-border"
              data-testid={`card-feature-${feature.title.toLowerCase().replace(' ', '-')}`}
            >
              <div className="space-y-4">
                <div className={`${feature.color} p-2 w-fit rounded-lg bg-background`}>
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Technical features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technicalFeatures.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="p-6 hover-elevate transition-all duration-300 bg-card border-card-border"
              data-testid={`card-tech-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="space-y-4">
                <div className="text-muted-foreground p-2 w-fit rounded-lg bg-background">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-card-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}