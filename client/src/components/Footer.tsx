import { Github, MessageCircle, ExternalLink } from "lucide-react";

const footerLinks = {
  product: [
    { name: "Features", href: "#features" },
    { name: "Getting Started", href: "#getting-started" },
    { name: "API Documentation", href: "https://github.com/A2AReg/a2a-registry#api-usage", external: true },
    { name: "Production Guide", href: "https://github.com/A2AReg/a2a-registry/blob/main/PRODUCTION.md", external: true }
  ],
  community: [
    { name: "GitHub", href: "https://github.com/A2AReg/a2a-registry", external: true },
    { name: "Discord", href: "https://discord.gg/rpe5nMSumw", external: true },
    { name: "A2A Project", href: "https://github.com/a2aproject/A2A", external: true },
    { name: "Discussions", href: "https://github.com/a2aproject/A2A/discussions", external: true }
  ],
  legal: [
    { name: "Apache 2.0 License", href: "https://github.com/A2AReg/a2a-registry/blob/main/LICENSE", external: true },
    { name: "Security Policy", href: "https://github.com/A2AReg/a2a-registry/blob/main/SECURITY.md", external: true },
    { name: "Contributing", href: "https://github.com/A2AReg/a2a-registry/blob/main/CONTRIBUTING.md", external: true },
    { name: "Code of Conduct", href: "https://github.com/A2AReg/a2a-registry/blob/main/CODE_OF_CONDUCT.md", external: true }
  ]
};

export default function Footer() {
  const handleLinkClick = (href: string, name: string, external: boolean = false) => {
    console.log(`Footer link ${name} clicked`);
    if (external) {
      window.open(href, '_blank');
    } else {
      if (href.startsWith('#')) {
        document.getElementById(href.slice(1))?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2" data-testid="footer-logo">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">A2A</span>
              </div>
              <span className="text-xl font-semibold text-foreground">Registry</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs" data-testid="footer-description">
              The Agent-to-Agent Registry enables seamless communication and collaboration between diverse agent frameworks.
            </p>
            <div className="flex space-x-4">
              <button 
                onClick={() => handleLinkClick('https://github.com/A2AReg/a2a-registry', 'GitHub', true)}
                className="text-muted-foreground hover:text-foreground transition-colors hover-elevate p-2 rounded-md"
                data-testid="footer-github"
              >
                <Github className="h-5 w-5" />
              </button>
              <button 
                onClick={() => handleLinkClick('https://discord.gg/rpe5nMSumw', 'Discord', true)}
                className="text-muted-foreground hover:text-foreground transition-colors hover-elevate p-2 rounded-md"
                data-testid="footer-discord"
              >
                <MessageCircle className="h-5 w-5" />
              </button>
            </div>
          </div>
          
          {/* Product links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider" data-testid="footer-product-title">
              Product
            </h3>
            <ul className="space-y-2">
              {footerLinks.product.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => handleLinkClick(link.href, link.name, link.external)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 hover-elevate px-1 py-1 rounded-md"
                    data-testid={`footer-product-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                    {link.external && <ExternalLink className="h-3 w-3" />}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Community links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider" data-testid="footer-community-title">
              Community
            </h3>
            <ul className="space-y-2">
              {footerLinks.community.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => handleLinkClick(link.href, link.name, link.external)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 hover-elevate px-1 py-1 rounded-md"
                    data-testid={`footer-community-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                    {link.external && <ExternalLink className="h-3 w-3" />}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Legal links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider" data-testid="footer-legal-title">
              Legal
            </h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <button 
                    onClick={() => handleLinkClick(link.href, link.name, link.external)}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 hover-elevate px-1 py-1 rounded-md"
                    data-testid={`footer-legal-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.name}
                    {link.external && <ExternalLink className="h-3 w-3" />}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-border mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground" data-testid="footer-copyright">
            © 2025 A2A Registry. Licensed under Apache 2.0.
          </p>
          <p className="text-sm text-muted-foreground mt-4 sm:mt-0" data-testid="footer-tagline">
            Enabling seamless agent-to-agent collaboration
          </p>
        </div>
      </div>
    </footer>
  );
}