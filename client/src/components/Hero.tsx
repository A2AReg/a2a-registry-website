import { ArrowRight, Github, Zap, Shield, Globe } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export default function Hero() {
  const handleGetStarted = () => {
    window.location.href = "/docs";
  };

  const handleViewGithub = () => {
    window.open("https://github.com/A2AReg/a2a-registry", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-16 sm:py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-muted/20"></div>
      
      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Squares */}
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={`square-${i}`}
            className="absolute w-2 h-2 bg-blue-500 dark:bg-blue-400 opacity-60 dark:opacity-40"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `matrixFloat ${4 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
        
        {/* Floating Stars */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={`star-${i}`}
            className="absolute text-blue-500 dark:text-blue-400 opacity-50 dark:opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${8 + Math.random() * 4}px`,
              animation: `matrixPulse ${3 + Math.random() * 2}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          >
            ✦
          </div>
        ))}
        
        {/* Animated Lines */}
        {Array.from({ length: 4 }).map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute h-px bg-blue-500 dark:bg-blue-400 opacity-30 dark:opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${100 + Math.random() * 200}px`,
              animation: `matrixLine ${5 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>
      
      <div className="container max-w-6xl mx-auto relative z-10">
        <div className="text-center space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card border border-border shadow-sm">
            <Badge variant="secondary" className="bg-blue-100 dark:bg-primary/10 text-blue-600 dark:text-primary border-blue-200 dark:border-primary/20 px-3 py-1 text-sm">
              <Zap className="w-3 h-3 mr-1 sm:w-4 sm:h-4 sm:mr-2" />
              Enterprise AI Agent Registry
            </Badge>
          </div>
          
          {/* Hero heading */}
          <div className="space-y-3 sm:space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground max-w-4xl mx-auto leading-tight" data-testid="text-hero-title" itemProp="headline">
              The Agent2Agent Registry
            </h1>
            
            {/* Docker Hub comparison */}
            <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400 max-w-3xl mx-auto" data-testid="text-docker-comparison">
              Docker Hub for A2A Agents
            </p>
          </div>
          
          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-subtitle" itemProp="description">
            Enable agents from diverse frameworks and companies, running on different servers (AWS, GCP, etc.), to communicate and collaborate seamlessly.
          </p>
          
          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all duration-200"
              onClick={handleGetStarted}
              data-testid="button-get-started"
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="w-full sm:w-auto text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-gray-100 hover:bg-gray-200 border-gray-300 text-gray-700 transition-all duration-200"
              onClick={handleViewGithub}
              data-testid="button-view-github"
            >
              <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              View on GitHub
            </Button>
          </div>
          
          {/* Key stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-2xl mx-auto pt-12 sm:pt-16">
            <div className="text-center p-4 sm:p-6 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-primary" />
              </div>
              <div className="text-lg sm:text-xl font-semibold text-foreground">Production</div>
              <div className="text-sm sm:text-base text-muted-foreground mt-1">Ready</div>
            </div>
            
            <div className="text-center p-4 sm:p-6 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Zap className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-primary" />
              </div>
              <div className="text-lg sm:text-xl font-semibold text-foreground">Enterprise</div>
              <div className="text-sm sm:text-base text-muted-foreground mt-1">Security</div>
            </div>
            
            <div className="text-center p-4 sm:p-6 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-100 dark:bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 dark:text-primary" />
              </div>
              <div className="text-lg sm:text-xl font-semibold text-foreground">Cross-Cloud</div>
              <div className="text-sm sm:text-base text-muted-foreground mt-1">Federation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}