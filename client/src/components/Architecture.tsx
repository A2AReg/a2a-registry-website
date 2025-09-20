import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Copy, ExternalLink } from "lucide-react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from "@/components/theme-provider";

const architectureComponents = [
  { name: "React 18", description: "Modern frontend with TypeScript" },
  { name: "FastAPI", description: "High-performance Python backend" },
  { name: "PostgreSQL", description: "Reliable data persistence" },
  { name: "Elasticsearch", description: "Advanced search capabilities" },
  { name: "Redis", description: "High-speed caching layer" },
  { name: "Docker", description: "Containerized deployment" }
];

const codeExamples = {
  install: `# Quick start with Docker
git clone https://github.com/A2AReg/a2a-registry.git
cd a2a-registry
docker-compose up -d

# Install Python SDK
pip install a2a-reg-sdk

# Install CLI Publisher Tool  
pip install a2a-reg-sdk`,
  
  register: `# Register an Agent with Python SDK
from a2a_reg_sdk import A2AClient, AgentBuilder, AgentCapabilities

client = A2AClient(
    registry_url="http://localhost:8000",
    client_id=os.getenv("A2A_CLIENT_ID"),
    client_secret=os.getenv("A2A_CLIENT_SECRET"),
)

# Create and publish agent
agent = (
    AgentBuilder(
        "my-test-agent", 
        "A test agent for demonstration", 
        "1.0.0", 
        "my-org"
    )
    .with_tags(["test", "demo", "ai"])
    .with_location("https://my-org.com/api/agent")
    .public(True)
    .build()
)

published_agent = client.publish_agent(agent)
print(f"Agent published with ID: {published_agent.id}")`,
  
  publisher: `# Publish with CLI Tool (easier workflow)
# 1. Set up authentication
export A2A_REGISTRY_URL="http://localhost:8000"
export A2A_CLIENT_ID="your-client-id"  
export A2A_CLIENT_SECRET="your-client-secret"

# 2. Initialize agent configuration
a2a-publisher init --output my-agent.yaml

# 3. Edit my-agent.yaml:
name: "my-chatbot"
description: "An AI chatbot agent"  
version: "1.0.0"
provider: "my-company"
tags: ["ai", "chatbot", "assistant"]
is_public: true
location_url: "https://api.my-company.com/chatbot"

# 4. Publish the agent
a2a-publisher publish my-agent.yaml

# 5. List and manage agents
a2a-publisher list
a2a-publisher update agent-123 updated-agent.yaml
a2a-publisher delete agent-123`,
  
  search: `# Search for Agents
# Basic search
agents = client.list_agents(page=1, limit=10)
print(f"Found {len(agents.get('agents', []))} public agents")

# Advanced semantic search  
search_results = client.search_agents(
    query="AI assistant with natural language processing",
    filters={"tags": ["ai", "nlp"], "provider": "my-org"},
    semantic=True,
    page=1, 
    limit=5
)

for agent in search_results.get('agents', []):
    print(f"- {agent.name}: {agent.description}")
    print(f"  Tags: {', '.join(agent.tags)}")
    print(f"  Provider: {agent.provider}")`
};

export default function Architecture() {
  const { theme } = useTheme();
  const prefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = theme === 'dark' || (theme === 'system' && prefersDark);
  
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    console.log(`${label} code copied to clipboard`);
  };

  const handleExternalLink = (url: string, label: string) => {
    console.log(`${label} link clicked`);
    window.open(url, '_blank');
  };

  return (
    <section className="py-24 bg-background relative" id="getting-started">
      {/* Top separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Architecture Overview */}
          <div className="space-y-8">
            <div className="space-y-4 text-center">
              <h2 className="text-4xl font-bold text-foreground" data-testid="text-architecture-title">
                Enterprise Architecture
              </h2>
              <p className="text-lg text-muted-foreground mx-auto" data-testid="text-architecture-subtitle">
                Built with modern technologies for scalability, security, and performance in enterprise environments.
              </p>
            </div>
            
            {/* Technology stack */}
            <div className="grid grid-cols-2 gap-4">
              {architectureComponents.map((component, index) => (
                <Card 
                  key={component.name} 
                  className="p-4 hover-elevate"
                  data-testid={`card-tech-${component.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="space-y-2">
                    <Badge variant="secondary" className="font-medium">
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
            <Card className="p-6 bg-muted border border-border/50">
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
              <SyntaxHighlighter 
                language="bash"
                style={isDark ? oneDark : oneLight}
                customStyle={{
                  margin: 0,
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                }}
              >
                {codeExamples.install}
              </SyntaxHighlighter>
            </Card>
            
            {/* Register Agent */}
            <Card className="p-6 bg-muted border border-border/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <h4 className="text-lg font-semibold text-card-foreground" data-testid="text-register-agent-title">
                    Register an Agent
                  </h4>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleExternalLink('https://github.com/A2AReg/a2a-registry/tree/main/examples/python', 'Python Examples')}
                    data-testid="button-view-examples"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => copyToClipboard(codeExamples.register, 'Register agent')}
                  data-testid="button-copy-register"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <div className="max-h-48 overflow-y-auto rounded-lg">
                <SyntaxHighlighter 
                  language="python"
                  style={isDark ? oneDark : oneLight}
                  customStyle={{
                    margin: 0,
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                  }}
                >
                  {codeExamples.register}
                </SyntaxHighlighter>
              </div>
            </Card>
            
            {/* CLI Publisher Tool */}
            <Card className="p-6 bg-muted border border-border/50">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <h4 className="text-lg font-semibold text-card-foreground" data-testid="text-cli-publisher-title">
                    CLI Publisher Tool
                  </h4>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleExternalLink('https://github.com/A2AReg/a2a-registry/tree/main/tools/a2a-publisher', 'Publisher Tool')}
                    data-testid="button-view-publisher"
                  >
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  onClick={() => copyToClipboard(codeExamples.publisher, 'CLI Publisher')}
                  data-testid="button-copy-publisher"
                >
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <div className="max-h-48 overflow-y-auto rounded-lg">
                <SyntaxHighlighter 
                  language="bash"
                  style={isDark ? oneDark : oneLight}
                  customStyle={{
                    margin: 0,
                    borderRadius: '0.5rem',
                    fontSize: '0.875rem',
                  }}
                >
                  {codeExamples.publisher}
                </SyntaxHighlighter>
              </div>
            </Card>
            
            {/* Search Agents */}
            <Card className="p-6 bg-muted border border-border/50">
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
              <SyntaxHighlighter 
                language="python"
                style={isDark ? oneDark : oneLight}
                customStyle={{
                  margin: 0,
                  borderRadius: '0.5rem',
                  fontSize: '0.875rem',
                }}
              >
                {codeExamples.search}
              </SyntaxHighlighter>
            </Card>
          </div>
        </div>
      </div>
      
      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
    </section>
  );
}