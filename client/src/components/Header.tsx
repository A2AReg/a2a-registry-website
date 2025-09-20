import { Button } from "@/components/ui/button";
import { Github, MessageCircle } from "lucide-react";

export default function Header() {
  const handleNavClick = (section: string) => {
    console.log(`Navigate to ${section} clicked`);
    document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleExternalLink = (url: string, name: string) => {
    console.log(`${name} clicked`);
    window.open(url, '_blank');
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-7xl mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2" data-testid="logo-container">
          <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-lg">A2A</span>
          </div>
          <span className="text-xl font-semibold text-foreground">Registry</span>
        </div>
        
        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6" data-testid="nav-desktop">
          <button 
            onClick={() => handleNavClick('features')}
            className="text-muted-foreground hover:text-foreground transition-colors hover-elevate px-3 py-2 rounded-md"
            data-testid="nav-features"
          >
            Features
          </button>
          <button 
            onClick={() => handleNavClick('getting-started')}
            className="text-muted-foreground hover:text-foreground transition-colors hover-elevate px-3 py-2 rounded-md"
            data-testid="nav-getting-started"
          >
            Getting Started
          </button>
          <button 
            onClick={() => handleExternalLink('https://github.com/A2AReg/a2a-registry#api-usage', 'Documentation')}
            className="text-muted-foreground hover:text-foreground transition-colors hover-elevate px-3 py-2 rounded-md"
            data-testid="nav-documentation"
          >
            Documentation
          </button>
        </nav>
        
        {/* Action buttons */}
        <div className="flex items-center space-x-2">
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => handleExternalLink('https://discord.gg/rpe5nMSumw', 'Discord')}
            data-testid="button-discord"
          >
            <MessageCircle className="h-4 w-4" />
            <span className="hidden sm:inline ml-2">Discord</span>
          </Button>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={() => handleExternalLink('https://github.com/A2AReg/a2a-registry', 'GitHub')}
            data-testid="button-github"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline ml-2">GitHub</span>
          </Button>
        </div>
      </div>
    </header>
  );
}