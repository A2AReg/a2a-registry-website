import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Github, 
  MessageCircle, 
  BookOpen, 
  Users,
  Shield,
  Zap,
  Globe,
  ExternalLink
} from "lucide-react";

const communityLinks = [
  {
    icon: Github,
    title: "GitHub Repository",
    description: "Source code, issues, and contributions",
    url: "https://github.com/A2AReg/a2a-registry"
  },
  {
    icon: MessageCircle,
    title: "Discord Community",
    description: "Get help, share ideas, and connect with developers",
    url: "https://discord.gg/rpe5nMSumw"
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description: "Complete API documentation and guides",
    url: "https://github.com/A2AReg/a2a-registry#api-usage"
  },
  {
    icon: Users,
    title: "A2A Community",
    description: "Join the broader A2A ecosystem discussions",
    url: "https://github.com/a2aproject/A2A/discussions"
  }
];

const enterpriseFeatures = [
  {
    icon: Shield,
    title: "Security First",
    description: "OAuth 2.0, rate limiting, comprehensive security headers"
  },
  {
    icon: Zap,
    title: "Production Ready",
    description: "Monitoring, logging, caching, automated deployment"
  },
  {
    icon: Globe,
    title: "Federation Support",
    description: "Cross-registry peering and synchronization"
  }
];

export default function Community() {
  const handleLinkClick = (url: string, title: string) => {
    console.log(`${title} clicked`);
    window.open(url, '_blank');
  };

  return (
    <section className="py-24 bg-muted/30">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Enterprise Benefits */}
          <div className="space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold text-foreground" data-testid="text-enterprise-title">
                Enterprise Ready
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-enterprise-subtitle">
                Built for enterprise environments with security, scalability, and reliability at its core.
              </p>
            </div>
            
            <div className="space-y-6">
              {enterpriseFeatures.map((feature, index) => (
                <Card 
                  key={feature.title} 
                  className="p-6 hover-elevate border border-border/50"
                  data-testid={`card-enterprise-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className="text-primary p-2 bg-primary/10 rounded-md">
                      <feature.icon className="h-5 w-5" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold text-foreground">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* License and security info */}
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" data-testid="badge-license">
                  Apache 2.0 License
                </Badge>
                <Badge variant="secondary" data-testid="badge-production">
                  Production Ready
                </Badge>
                <Badge variant="secondary" data-testid="badge-docker">
                  Docker Ready
                </Badge>
              </div>
              
              <p className="text-sm text-muted-foreground" data-testid="text-security-note">
                Security is important to us. Please report security vulnerabilities privately to{" "}
                <code className="text-foreground bg-muted px-1 rounded">security@a2areg.com</code>
              </p>
            </div>
          </div>
          
          {/* Community Links */}
          <div className="space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold text-foreground" data-testid="text-community-title">
                Community & Resources
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-community-subtitle">
                Join our community and explore the resources to get the most out of A2A Registry.
              </p>
            </div>
            
            <div className="space-y-4">
              {communityLinks.map((link, index) => (
                <Card 
                  key={link.title} 
                  className="p-6 hover-elevate cursor-pointer border border-border/50"
                  onClick={() => handleLinkClick(link.url, link.title)}
                  data-testid={`card-community-${link.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-muted-foreground p-2 bg-muted/50 rounded-md">
                        <link.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-foreground">
                          {link.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {link.description}
                        </p>
                      </div>
                    </div>
                    <ExternalLink className="h-5 w-5 text-muted-foreground" />
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Call to action */}
            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground" data-testid="text-contribute-title">
                  Contribute to A2A Registry
                </h3>
                <p className="text-muted-foreground" data-testid="text-contribute-description">
                  We welcome contributions! Report bugs, suggest features, improve documentation, 
                  or submit pull requests to help make A2A Registry better.
                </p>
                <Button 
                  variant="default" 
                  className="hover-elevate active-elevate-2"
                  onClick={() => handleLinkClick('https://github.com/A2AReg/a2a-registry/blob/main/CONTRIBUTING.md', 'Contributing Guide')}
                  data-testid="button-contributing-guide"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Contributing Guide
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}