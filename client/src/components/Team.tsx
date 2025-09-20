import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Award, Code } from "lucide-react";

const teamHighlights = [
  {
    icon: Building2,
    title: "Big Tech Experience",
    description: "Built by engineers with deep experience at Amazon and Google",
    color: "text-chart-1"
  },
  {
    icon: Code,
    title: "Enterprise Scale",
    description: "Proven expertise in building distributed systems at massive scale",
    color: "text-chart-2"
  },
  {
    icon: Award,
    title: "Industry Standards",
    description: "Following best practices from leading technology organizations",
    color: "text-chart-3"
  },
  {
    icon: Users,
    title: "Open Source First",
    description: "Committed to building open, collaborative developer tools",
    color: "text-chart-4"
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary px-4 py-2" data-testid="badge-team">
            Built by Experts
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground" data-testid="text-team-title">
            Engineered by Amazon & Google Veterans
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-team-subtitle">
            The A2A Registry is built by engineers who have designed and scaled 
            distributed systems at the world's largest technology companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamHighlights.map((highlight, index) => (
            <Card 
              key={highlight.title}
              className="p-6 text-center hover-elevate transition-all duration-300 border-card-border"
              data-testid={`card-team-${highlight.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="space-y-4">
                <div className={`${highlight.color} mx-auto p-3 bg-muted rounded-lg w-fit`}>
                  <highlight.icon className="h-8 w-8" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {highlight.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="p-8 bg-muted/50 border-card-border max-w-4xl mx-auto">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground" data-testid="text-expertise-title">
                Bringing Enterprise-Grade Engineering to Open Source
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed" data-testid="text-expertise-description">
                Our team combines years of experience building mission-critical infrastructure 
                at Amazon and Google with a passion for open-source collaboration. We understand 
                the challenges of enterprise AI adoption and have designed A2A Registry to meet 
                the highest standards of security, reliability, and scale.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}