import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, ExternalLink } from "lucide-react";

const architectureComponents = [
  { name: "React 18", description: "Modern frontend with TypeScript", color: "bg-chart-1/10 text-chart-1" },
  { name: "FastAPI", description: "High-performance Python backend", color: "bg-chart-2/10 text-chart-2" },
  { name: "PostgreSQL", description: "Reliable data persistence", color: "bg-chart-3/10 text-chart-3" },
  { name: "Elasticsearch", description: "Advanced search capabilities", color: "bg-chart-4/10 text-chart-4" },
  { name: "Redis", description: "High-speed caching layer", color: "bg-chart-5/10 text-chart-5" },
  { name: "Docker", description: "Containerized deployment", color: "bg-primary/10 text-primary" }
];

const codeExamples = {
  install: `# Quick start with Docker
git clone https://github.com/A2AReg/a2a-registry.git
cd a2a-registry
docker-compose up -d`,
  
  register: `# Register an Agent
curl -X POST "http://localhost:8000/agents" \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "agent_card": {
      "id": "my-agent",
      "name": "My AI Agent",
      "version": "1.0.0",
      "capabilities": {
        "a2a_version": "1.0",
        "supported_protocols": ["http", "grpc"]
      },
      "provider": "My Company",
      "tags": ["ai", "assistant"]
    },
    "is_public": true
  }'`,
  
  search: `# Search for Agents
curl -X POST "http://localhost:8000/agents/search" \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "AI assistant",
    "filters": {
      "provider": "My Company",
      "tags": ["ai"]
    },
    "top": 10
  }'`
};

export default function Architecture() {
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    console.log(`${label} code copied to clipboard`);
  };

  return (
    <section className="py-24 bg-background" id="getting-started">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Architecture Overview */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl font-semibold text-foreground" data-testid="text-architecture-title">
                Enterprise Architecture
              </h2>
              <p className="text-lg text-muted-foreground" data-testid="text-architecture-subtitle">
                Built with modern technologies for scalability, security, and performance in enterprise environments.
              </p>
            </div>
            
            {/* Technology stack */}
            <div className="grid grid-cols-2 gap-4">
              {architectureComponents.map((component, index) => (
                <Card 
                  key={component.name} 
                  className="p-4 hover-elevate transition-all duration-300"
                  data-testid={`card-tech-${component.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="space-y-2">
                    <Badge variant="secondary" className={`${component.color} font-medium`}>
                      {component.name}
                    </Badge>
                    <p className="text-sm text-muted-foreground">
                      {component.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>
            
            {/* Key endpoints */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground" data-testid="text-endpoints-title">
                API Endpoints
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2" data-testid="endpoint-entitled">
                  <Badge variant="outline" className="font-mono text-xs">GET</Badge>
                  <code className="text-muted-foreground">/agents/entitled</code>
                  <span className="text-muted-foreground text-xs">- Get entitled agents</span>
                </div>
                <div className="flex items-center gap-2" data-testid="endpoint-search">
                  <Badge variant="outline" className="font-mono text-xs">POST</Badge>
                  <code className="text-muted-foreground">/agents/search</code>
                  <span className="text-muted-foreground text-xs">- Search agents</span>
                </div>
                <div className="flex items-center gap-2" data-testid="endpoint-public">
                  <Badge variant="outline" className="font-mono text-xs">GET</Badge>
                  <code className="text-muted-foreground">/agents/public</code>
                  <span className="text-muted-foreground text-xs">- Public discovery</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Code Examples */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-foreground" data-testid="text-getting-started-title">
              Getting Started
            </h3>
            
            {/* Installation */}
            <Card className="p-6 bg-muted border-card-border">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-card-foreground" data-testid="text-quick-start-title">
                  Quick Start
                </h4>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => copyToClipboard(codeExamples.install, 'Installation')}
                  data-testid="button-copy-install"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <pre className="text-sm bg-background p-4 rounded-lg overflow-x-auto font-mono text-foreground">
                <code>{codeExamples.install}</code>
              </pre>
            </Card>
            
            {/* Register Agent */}
            <Card className="p-6 bg-muted border-card-border">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-card-foreground" data-testid="text-register-agent-title">
                  Register an Agent
                </h4>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => copyToClipboard(codeExamples.register, 'Register agent')}
                  data-testid="button-copy-register"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <pre className="text-sm bg-background p-4 rounded-lg overflow-x-auto font-mono text-foreground max-h-48 overflow-y-auto">
                <code>{codeExamples.register}</code>
              </pre>
            </Card>
            
            {/* Search Agents */}
            <Card className="p-6 bg-muted border-card-border">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-lg font-semibold text-card-foreground" data-testid="text-search-agents-title">
                  Search Agents
                </h4>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => copyToClipboard(codeExamples.search, 'Search agents')}
                  data-testid="button-copy-search"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <pre className="text-sm bg-background p-4 rounded-lg overflow-x-auto font-mono text-foreground">
                <code>{codeExamples.search}</code>
              </pre>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}