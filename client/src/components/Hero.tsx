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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted/30">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      ></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20" data-testid="badge-enterprise">
            Enterprise Agent Discovery
          </div>
          
          {/* Hero heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground max-w-4xl mx-auto leading-tight" data-testid="text-hero-title">
            The{" "}
            <span className="bg-gradient-to-r from-primary to-chart-2 bg-clip-text text-transparent">
              Agent-to-Agent
            </span>
            {" "}Registry
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
            Connecting AI agents across frameworks, companies, and clouds (AWS, GCP, others) to collaborate seamlessly.
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto mt-12">
            <div className="text-center" data-testid="stat-production-ready">
              <div className="text-2xl font-bold text-primary">Production</div>
              <div className="text-sm text-muted-foreground">Ready</div>
            </div>
            <div className="text-center" data-testid="stat-enterprise-security">
              <div className="text-2xl font-bold text-primary">OAuth 2.0</div>
              <div className="text-sm text-muted-foreground">Security</div>
            </div>
            <div className="text-center" data-testid="stat-federation">
              <div className="text-2xl font-bold text-primary">Federation</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}