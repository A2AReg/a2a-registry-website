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
    description: "Centralized catalog for discovering and managing AI agents across your enterprise. Add agents by providing their Agent Card URLs."
  },
  {
    icon: Lock,
    title: "Agent Entitlements",
    description: "Granular access control with OAuth 2.0 client credentials flow. Grant specific agent permissions to client applications."
  },
  {
    icon: Search,
    title: "Semantic Search",
    description: "Advanced search capabilities with lexical and semantic matching. Find the right agents for your specific tasks."
  },
  {
    icon: Globe,
    title: "Federation",
    description: "Cross-registry peering and synchronization. Connect with other A2A registries for distributed agent discovery."
  }
];

const technicalFeatures = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security & Compliance",
    description: "Advanced rate limiting, comprehensive security headers, HTTPS enforcement, and enterprise authentication mechanisms. Compliant with SOC 2, GDPR, and industry security standards for AI agent registry deployments."
  },
  {
    icon: Database,
    title: "Production-Ready AI Agent Infrastructure",
    description: "Robust architecture with PostgreSQL databases, Redis caching layers, Elasticsearch semantic search, Docker containerization, Kubernetes orchestration, and automated CI/CD deployment pipelines for scalable A2A Registry operations."
  },
  {
    icon: Users,
    title: "Modern Web Interface & Developer Experience",
    description: "Intuitive React-based UI with responsive design, dark/light themes, real-time agent status updates, comprehensive search filters, and developer-friendly APIs for seamless AI agent management and discovery workflows."
  },
  {
    icon: Zap,
    title: "High-Performance Agent Discovery Engine",
    description: "Optimized connection pooling, horizontal auto-scaling, load balancing, CDN integration, and lightning-fast semantic search algorithms designed for enterprise-scale AI agent discovery and multi-tenant workloads."
  }
];

export default function Features() {
  return (
    <section className="py-24 bg-muted/30 relative" id="features">
      {/* Top separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="text-center space-y-4 mb-16">
          <h2 className="text-4xl font-bold text-foreground" data-testid="text-features-title" itemProp="headline">
            A2A Registry Core Features
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-features-subtitle" itemProp="description">
            Complete enterprise AI agent platform with semantic search, OAuth 2.0 security, cross-framework support for LangChain, OpenAI, Hugging Face, federation capabilities, and production-ready deployment for intelligent agent discovery and collaboration.
          </p>
        </header>
        
        {/* Main features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={feature.title} 
              className="p-6 hover-elevate border border-border/50"
              data-testid={`card-feature-${feature.title.toLowerCase().replace(' ', '-')}`}
            >
              <div className="space-y-4">
                <div className="text-primary p-2 w-fit rounded-md bg-primary/10">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-xl font-bold text-foreground">
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
              className="p-6 hover-elevate border border-border/50"
              data-testid={`card-tech-feature-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="space-y-4">
                <div className="text-primary p-2 w-fit rounded-md bg-primary/10">
                  <feature.icon className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">
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
      
      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>
  );
}