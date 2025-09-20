import { Button } from "@/components/ui/button";
import { ArrowRight, Github } from "lucide-react";

export default function Hero() {
  const handleGetStarted = () => {
    console.log('Get Started clicked');
    document.getElementById('getting-started')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleViewGithub = () => {
    console.log('View on GitHub clicked');
    window.open('https://github.com/A2AReg/a2a-registry', '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Top separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      {/* Clean gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      
      {/* Subtle grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: '32px 32px'
        }}
      ></div>
      
      {/* Soft vignette */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/20"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20" data-testid="badge-enterprise">
            Enterprise AI Agent Registry - A2A Platform
          </div>
          
          {/* Hero heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground max-w-4xl mx-auto leading-tight tracking-tight" data-testid="text-hero-title" itemProp="headline">
            The Agent2Agent Registry
          </h1>
          
          {/* Docker Hub comparison */}
          <p className="text-2xl sm:text-3xl font-medium text-primary max-w-2xl mx-auto" data-testid="text-docker-comparison">
            Docker Hub for AI Agents | Agent-to-Agent Registry
          </p>
          
          {/* Subtitle */}
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-subtitle" itemProp="description">
            Publish, discover, and integrate intelligent agents across LangChain, OpenAI, Hugging Face, and enterprise frameworks. Semantic search, OAuth 2.0 security, and cross-registry federation for seamless agent-to-agent collaboration.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="text-lg px-8 py-3 hover-elevate active-elevate-2"
              onClick={handleGetStarted}
              data-testid="button-get-started"
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-3 bg-background/80 backdrop-blur-sm hover-elevate active-elevate-2"
              onClick={handleViewGithub}
              data-testid="button-view-github"
            >
              <Github className="mr-2 h-5 w-5" />
              View on GitHub
            </Button>
          </div>
          
          {/* Key stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mt-16">
            <div className="text-center" data-testid="stat-production-ready">
              <div className="text-3xl font-bold text-foreground">Production</div>
              <div className="text-muted-foreground mt-1">Ready</div>
            </div>
            <div className="text-center" data-testid="stat-enterprise-security">
              <div className="text-3xl font-bold text-foreground">Enterprise</div>
              <div className="text-muted-foreground mt-1">Security</div>
            </div>
            <div className="text-center" data-testid="stat-federation">
              <div className="text-3xl font-bold text-foreground">Cross-Cloud</div>
              <div className="text-muted-foreground mt-1">Federation</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>
  );
}