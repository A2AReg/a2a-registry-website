import { Badge } from "@/components/ui/badge";
import { SiGoogle, SiAmazon } from "react-icons/si";

export default function Team() {
  return (
    <section className="py-24 bg-background relative">
      {/* Top separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          {/* Content container with subtle background */}
          <div className="relative py-12 px-8 rounded-lg bg-gradient-to-b from-muted/20 to-muted/10 border border-border/20">
            <Badge variant="secondary" className="bg-primary/10 text-primary px-4 py-2 mb-6" data-testid="badge-team">
              Built by Experts
            </Badge>
            
            <h2 className="text-4xl font-bold text-foreground mb-6" data-testid="text-team-title" itemProp="headline">
              Engineered by Amazon & Google AI Infra Veterans
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed" data-testid="text-team-subtitle" itemProp="description">
              The A2A Registry platform is architected and built by world-class engineers with extensive experience designing distributed AI systems, enterprise agent platforms, semantic search engines, and production-scale infrastructure at Amazon Web Services, Google Cloud, and leading AI companies. Our team brings deep expertise in AI/ML Infra, enterprise security, and multi-agent system orchestration.
            </p>
            
            {/* Subtle separator line */}
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent mx-auto mb-8"></div>
            
            {/* Company Logos with enhanced styling */}
            <div className="flex flex-wrap items-center gap-8 justify-center">
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-background/50 border border-border/50 hover-elevate" data-testid="logo-google">
                <SiGoogle className="h-8 w-8 text-[#4285F4]" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">Google</span>
              </div>
              <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-background/50 border border-border/50 hover-elevate" data-testid="logo-amazon">
                <SiAmazon className="h-8 w-8 text-[#FF9900]" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">Amazon</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>
  );
}