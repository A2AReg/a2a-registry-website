import { Link } from "wouter";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { 
  Github, 
  MessageSquare, 
  BookOpen, 
  ExternalLink, 
  Users, 
  Shield, 
  Zap, 
  Globe,
  Heart,
  Star,
  Code
} from "lucide-react";

export default function Community() {
  const handleExternalLinkClick = (url: string, title: string) => {
    window.open(url, "_blank");
  };

  const enterpriseFeatures = [
    {
      title: "Enterprise Support",
      description: "Dedicated support team and SLA guarantees for enterprise customers",
      icon: Shield,
    },
    {
      title: "Advanced Analytics",
      description: "Comprehensive analytics and monitoring for agent performance",
      icon: Zap,
    },
    {
      title: "Multi-Cloud Deployment",
      description: "Deploy across AWS, GCP, Azure with unified management",
      icon: Globe,
    },
    {
      title: "Custom Integrations",
      description: "Tailored integrations with your existing infrastructure",
      icon: Code,
    },
  ];

  const communityLinks = [
    {
      title: "Documentation",
      description: "Comprehensive guides and API reference",
      icon: BookOpen,
      url: "/docs",
    },
    {
      title: "GitHub Repository",
      description: "Source code, issues, and contributions",
      icon: Github,
      url: "https://github.com/A2AReg/a2a-registry",
    },
    {
      title: "Discord Community",
      description: "Join our Discord for discussions and support",
      icon: MessageSquare,
      url: "https://discord.gg/rpe5nMSumw",
    },
    {
      title: "A2A Community",
      description: "Connect with the broader A2A ecosystem",
      icon: Users,
      url: "https://community.a2a-protocol.org",
    },
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card border border-border shadow-sm">
            <Badge variant="secondary" className="bg-blue-100 dark:bg-primary/10 text-blue-600 dark:text-primary border-blue-200 dark:border-primary/20 px-3 py-1 text-sm">
              <Users className="w-3 h-3 mr-1 sm:w-4 sm:h-4 sm:mr-2" />
              Community & Enterprise
            </Badge>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Join Our Community
          </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Join our community and explore the resources to get the most out of A2A Registry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12">
          {/* Enterprise Features */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                Enterprise Features
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Built for enterprise scale and reliability
              </p>
            </div>
            
            <div className="space-y-4 sm:space-y-6">
              {enterpriseFeatures.map((feature, index) => (
                <Card
                  key={feature.title}
                  className="p-4 sm:p-6 bg-card border border-border shadow-sm hover:shadow-md transition-shadow duration-200"
                  data-testid={`card-enterprise-${feature.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-primary" />
                    </div>
                    <div className="space-y-2 flex-1">
                      <h4 className="text-base sm:text-lg font-semibold text-foreground">
                        {feature.title}
                      </h4>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Community Links */}
          <div className="space-y-6 sm:space-y-8">
            <div className="text-center space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                Community Resources
              </h3>
              <p className="text-sm sm:text-base text-muted-foreground">
                Connect, learn, and contribute to the ecosystem
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              {communityLinks.map((link, index) => (
                link.url.startsWith('/') ? (
                  <Link href={link.url} key={link.title}>
                    <Card
                      className="p-4 sm:p-6 bg-card border border-border shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
                      data-testid={`card-community-${link.title.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <div className="space-y-3 sm:space-y-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-primary/10 rounded-lg flex items-center justify-center">
                          <link.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-primary" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-base sm:text-lg font-semibold text-foreground">
                            {link.title}
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {link.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ) : (
                  <Card
                    key={link.title}
                    className="p-4 sm:p-6 bg-card border border-border shadow-sm hover:shadow-md transition-shadow duration-200 cursor-pointer"
                    onClick={() => handleExternalLinkClick(link.url, link.title)}
                    data-testid={`card-community-${link.title.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <div className="space-y-3 sm:space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 dark:bg-primary/10 rounded-lg flex items-center justify-center">
                          <link.icon className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600 dark:text-primary" />
                        </div>
                        <ExternalLink className="h-3 w-3 sm:h-4 sm:w-4 text-muted-foreground" />
                      </div>
                      <div className="space-y-2">
                        <h4 className="text-base sm:text-lg font-semibold text-foreground">
                          {link.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {link.description}
                        </p>
                      </div>
                    </div>
                  </Card>
                )
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 sm:mt-16 md:mt-20 text-center">
          <Card className="bg-card border border-border shadow-sm p-6 sm:p-8 max-w-4xl mx-auto">
            <div className="space-y-4 sm:space-y-6">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary/10 rounded-xl flex items-center justify-center mx-auto">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
              </div>
              
              <div className="space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground">
                  Ready to Get Started?
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Join thousands of developers building the future of AI agent collaboration. 
                  Start with our comprehensive documentation and examples.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
                  onClick={() => window.location.href = "/docs"}
                >
                  <BookOpen className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Read Documentation
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="w-full sm:w-auto text-sm sm:text-base px-6 sm:px-8 py-3 sm:py-4 bg-gray-100 hover:bg-gray-200 border-gray-300 text-gray-700 transition-all duration-200"
                  onClick={() => window.open("https://github.com/A2AReg/a2a-registry", "_blank")}
                >
                  <Star className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  Star on GitHub
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}