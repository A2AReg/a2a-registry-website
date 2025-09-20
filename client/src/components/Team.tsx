import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Users, Award, Code } from "lucide-react";

const teamHighlights = [
  {
    icon: Building2,
    title: "Big Tech Experience",
    description: "Built by engineers with deep experience at Amazon and Google"
  },
  {
    icon: Code,
    title: "Enterprise Scale",
    description: "Proven expertise in building distributed systems at massive scale"
  },
  {
    icon: Award,
    title: "Industry Standards",
    description: "Following best practices from leading technology organizations"
  },
  {
    icon: Users,
    title: "Open Source First",
    description: "Committed to building open, collaborative developer tools"
  }
];

export default function Team() {
  return (
    <section className="py-24 bg-background">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left space-y-6 mb-16">
          <Badge variant="secondary" className="bg-primary/10 text-primary px-4 py-2" data-testid="badge-team">
            Built by Experts
          </Badge>
          <h2 className="text-4xl font-bold text-foreground" data-testid="text-team-title">
            Engineered by Amazon & Google Veterans
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl" data-testid="text-team-subtitle">
            The A2A Registry is built by engineers who have designed and scaled 
            distributed systems at the world's largest technology companies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamHighlights.map((highlight, index) => (
            <Card 
              key={highlight.title}
              className="p-6 text-center hover-elevate border border-border/50"
              data-testid={`card-team-${highlight.title.toLowerCase().replace(/\s+/g, '-')}`}
            >
              <div className="space-y-4">
                <div className="text-primary mx-auto p-3 bg-primary/10 rounded-md w-fit">
                  <highlight.icon className="h-6 w-6" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-foreground">
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
          <Card className="p-8 bg-muted/50 border border-border/50 max-w-4xl mx-auto">
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