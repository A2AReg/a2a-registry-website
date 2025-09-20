import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { 
  BookOpen, 
  Download, 
  Settings, 
  Code, 
  Play, 
  FileText, 
  Shield,
  Zap,
  Copy,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useTheme } from "@/components/theme-provider";

const navigationItems = [
  { id: "getting-started", label: "Getting Started", icon: BookOpen },
  { id: "installation", label: "Installation", icon: Download },
  { id: "configuration", label: "Configuration", icon: Settings },
  { id: "publishing", label: "Publishing Agents", icon: Play },
  { id: "api-reference", label: "API Reference", icon: Code },
  { id: "examples", label: "Examples", icon: FileText },
  { id: "security", label: "Security", icon: Shield },
  { id: "troubleshooting", label: "Troubleshooting", icon: Zap }
];

const codeExamples = {
  installation: `pip install a2a-publisher`,
  basicPublish: `a2a-publisher publish ./a2a-card.json`,
  a2aCard: `{
  "name": "my-ai-agent",
  "version": "1.0.0",
  "description": "An intelligent assistant agent",
  "author": "Your Name <your.email@example.com>",
  "tags": ["nlp", "assistant", "enterprise"],
  "framework": "langchain",
  "runtime": "python",
  "entry_point": "src/agent.py",
  "dependencies": {
    "langchain": "^0.1.0",
    "openai": "^1.0.0"
  },
  "capabilities": [
    "text-generation",
    "question-answering",
    "summarization"
  ],
  "resources": {
    "memory": "512Mi",
    "cpu": "500m"
  }
}`,
  pythonAgent: `from langchain.agents import AgentType, initialize_agent
from langchain.llms import OpenAI
from langchain.tools import Tool

class MyAgent:
    def __init__(self):
        self.llm = OpenAI(temperature=0.7)
        
    def process(self, query: str) -> str:
        """Process user query and return response"""
        return self.llm(query)
        
    def get_capabilities(self) -> list:
        """Return agent capabilities"""
        return ["text-generation", "question-answering"]`,
  apiPublish: `curl -X POST https://registry.a2areg.com/api/v1/agents \\
  -H "Authorization: Bearer YOUR_TOKEN" \\
  -H "Content-Type: application/json" \\
  -d @a2a-card.json`
};

export default function Docs() {
  const [activeSection, setActiveSection] = useState("getting-started");
  const { theme } = useTheme();
  const prefersDark = typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const isDark = theme === 'dark' || (theme === 'system' && prefersDark);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    console.log(`${label} code copied to clipboard`);
  };

  const CodeBlock = ({ children, language = "bash", title }: { children: string, language?: string, title?: string }) => (
    <div className="relative">
      {title && (
        <div className="flex items-center justify-between bg-muted px-4 py-2 border-b">
          <span className="text-sm font-medium text-foreground">{title}</span>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => copyToClipboard(children, title)}
            className="h-6 w-6 p-0"
          >
            <Copy className="h-3 w-3" />
          </Button>
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={isDark ? oneDark : oneLight}
        customStyle={{
          margin: 0,
          borderRadius: title ? '0 0 0.5rem 0.5rem' : '0.5rem',
          fontSize: '0.875rem'
        }}
      >
        {children}
      </SyntaxHighlighter>
    </div>
  );

  const renderContent = () => {
    switch (activeSection) {
      case "getting-started":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Getting Started</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Welcome to the A2A Publisher documentation. This tool enables you to publish AI agents to the A2A Registry 
                for cross-platform discovery and collaboration.
              </p>
            </div>

            <Card className="p-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="text-primary p-2 bg-primary/10 rounded-md">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">What is A2A Publisher?</h3>
                    <p className="text-muted-foreground mb-4">
                      A2A Publisher is a Python-based command-line tool and API that allows developers to publish their AI agents 
                      to the A2A Registry. It handles agent packaging, validation, and deployment using A2A Cards to make your agents 
                      discoverable across different frameworks and platforms.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 hover-elevate border border-border/50">
                <div className="space-y-4">
                  <div className="text-primary p-2 w-fit rounded-md bg-primary/10">
                    <Download className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">1. Install</h3>
                    <p className="text-sm text-muted-foreground">Install the A2A Publisher CLI globally on your system</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 hover-elevate border border-border/50">
                <div className="space-y-4">
                  <div className="text-primary p-2 w-fit rounded-md bg-primary/10">
                    <Settings className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">2. Configure</h3>
                    <p className="text-sm text-muted-foreground">Create your A2A Card configuration and metadata</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-6 hover-elevate border border-border/50">
                <div className="space-y-4">
                  <div className="text-primary p-2 w-fit rounded-md bg-primary/10">
                    <Play className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground">3. Publish</h3>
                    <p className="text-sm text-muted-foreground">Deploy your agent to the A2A Registry</p>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Quick Start</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">1. Install the Publisher</h3>
                  <CodeBlock title="Install A2A Publisher" language="bash">
                    {codeExamples.installation}
                  </CodeBlock>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">2. Publish Your First Agent</h3>
                  <CodeBlock title="Publish Agent" language="bash">
                    {codeExamples.basicPublish}
                  </CodeBlock>
                </div>
              </div>
            </div>
          </div>
        );

      case "installation":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Installation</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Multiple ways to install and set up the A2A Publisher tool on your system.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">pip (Recommended)</h2>
                <p className="text-muted-foreground mb-4">
                  Install globally using pip for easy access from any directory.
                </p>
                <CodeBlock title="Install via pip" language="bash">
                  pip install a2a-publisher
                </CodeBlock>
              </Card>

              <Card className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Docker</h2>
                <p className="text-muted-foreground mb-4">
                  Use the official Docker image for containerized environments.
                </p>
                <CodeBlock title="Run with Docker" language="bash">
{`docker run -v $(pwd):/workspace \\
  a2areg/publisher:latest publish /workspace/a2a-card.json`}
                </CodeBlock>
              </Card>

              <Card className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">From Source</h2>
                <p className="text-muted-foreground mb-4">
                  Build and install from the source repository.
                </p>
                <CodeBlock title="Install from Source" language="bash">
{`git clone https://github.com/A2AReg/a2a-registry.git
cd a2a-registry/tools/a2a-publisher
pip install -e .`}
                </CodeBlock>
              </Card>
            </div>

            <Card className="p-6 bg-primary/5 border-primary/20">
              <div className="flex items-start space-x-4">
                <div className="text-primary p-2 bg-primary/10 rounded-md">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">System Requirements</h3>
                  <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Python 3.8 or higher</li>
                    <li>pip (Python package installer)</li>
                    <li>Git (for source installation)</li>
                    <li>Docker (optional, for containerized usage)</li>
                  </ul>
                </div>
              </div>
            </Card>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Verification</h2>
              <p className="text-muted-foreground mb-4">
                Verify your installation by running the version command:
              </p>
              <CodeBlock title="Check Version" language="bash">
                a2a-publisher --version
              </CodeBlock>
            </div>
          </div>
        );

      case "configuration":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Configuration</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Learn how to configure your agents for publishing to the A2A Registry.
              </p>
            </div>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">A2A Card Configuration</h2>
              <p className="text-muted-foreground mb-4">
                Create an <code className="bg-muted px-1 rounded">a2a-card.json</code> file in your project root. The A2A Card contains metadata about your agent along with additional configuration:
              </p>
              <CodeBlock title="a2a-card.json" language="json">
                {codeExamples.a2aCard}
              </CodeBlock>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Required Fields</h3>
                <div className="space-y-3">
                  <div>
                    <code className="bg-muted px-1 rounded text-sm">name</code>
                    <p className="text-sm text-muted-foreground">Unique identifier for your agent</p>
                  </div>
                  <div>
                    <code className="bg-muted px-1 rounded text-sm">version</code>
                    <p className="text-sm text-muted-foreground">Semantic version (e.g., 1.0.0)</p>
                  </div>
                  <div>
                    <code className="bg-muted px-1 rounded text-sm">description</code>
                    <p className="text-sm text-muted-foreground">Brief description of agent functionality</p>
                  </div>
                  <div>
                    <code className="bg-muted px-1 rounded text-sm">framework</code>
                    <p className="text-sm text-muted-foreground">AI framework used (langchain, autogen, etc.)</p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Optional Fields</h3>
                <div className="space-y-3">
                  <div>
                    <code className="bg-muted px-1 rounded text-sm">tags</code>
                    <p className="text-sm text-muted-foreground">Array of searchable tags</p>
                  </div>
                  <div>
                    <code className="bg-muted px-1 rounded text-sm">capabilities</code>
                    <p className="text-sm text-muted-foreground">List of agent capabilities</p>
                  </div>
                  <div>
                    <code className="bg-muted px-1 rounded text-sm">resources</code>
                    <p className="text-sm text-muted-foreground">Memory and CPU requirements</p>
                  </div>
                  <div>
                    <code className="bg-muted px-1 rounded text-sm">dependencies</code>
                    <p className="text-sm text-muted-foreground">Required packages and versions</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Environment Configuration</h2>
              <p className="text-muted-foreground mb-4">
                Configure authentication and registry settings:
              </p>
              <CodeBlock title="Environment Variables" language="bash">
{`# Registry configuration
export A2A_REGISTRY_URL=https://registry.a2areg.com
export A2A_AUTH_TOKEN=your_auth_token_here

# Optional: Custom registry
export A2A_REGISTRY_URL=https://custom-registry.company.com`}
              </CodeBlock>
            </Card>
          </div>
        );

      case "publishing":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Publishing Agents</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Step-by-step guide to publishing your AI agents to the A2A Registry.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Publishing Workflow</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Prepare Your Agent</h3>
                      <p className="text-muted-foreground">Ensure your agent code is ready and tested locally.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Create A2A Card</h3>
                      <p className="text-muted-foreground">Set up your a2a-card.json with agent metadata and configuration.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Validate & Publish</h3>
                      <p className="text-muted-foreground">Run the publisher to validate and deploy your agent.</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Basic Publishing</h2>
                <CodeBlock title="Publish Agent" language="bash">
                  {codeExamples.basicPublish}
                </CodeBlock>
              </Card>

              <Card className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Advanced Options</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Dry Run</h3>
                    <p className="text-muted-foreground mb-2">Validate configuration without publishing:</p>
                    <CodeBlock title="Validate Only" language="bash">
                      a2a-publisher publish --dry-run ./a2a-card.json
                    </CodeBlock>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Custom Registry</h3>
                    <p className="text-muted-foreground mb-2">Publish to a custom registry endpoint:</p>
                    <CodeBlock title="Custom Registry" language="bash">
                      a2a-publisher publish --registry https://custom.registry.com ./a2a-card.json
                    </CodeBlock>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Force Update</h3>
                    <p className="text-muted-foreground mb-2">Overwrite existing agent version:</p>
                    <CodeBlock title="Force Update" language="bash">
                      a2a-publisher publish --force ./a2a-card.json
                    </CodeBlock>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        );

      case "api-reference":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">API Reference</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Complete API documentation for programmatic agent publishing and management.
              </p>
            </div>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">REST API Endpoints</h2>
              
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="default" className="font-mono text-xs">POST</Badge>
                    <code className="text-sm">/api/v1/agents</code>
                  </div>
                  <p className="text-muted-foreground mb-2">Publish a new agent to the registry.</p>
                  <CodeBlock title="Publish Agent via API" language="bash">
                    {codeExamples.apiPublish}
                  </CodeBlock>
                </div>

                <Separator />

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="font-mono text-xs">GET</Badge>
                    <code className="text-sm">/api/v1/agents</code>
                  </div>
                  <p className="text-muted-foreground mb-2">List all published agents.</p>
                  <CodeBlock title="List Agents" language="bash">
{`curl -H "Authorization: Bearer YOUR_TOKEN" \\
  https://registry.a2areg.com/api/v1/agents`}
                  </CodeBlock>
                </div>

                <Separator />

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="font-mono text-xs">GET</Badge>
                    <code className="text-sm">/api/v1/agents/:id</code>
                  </div>
                  <p className="text-muted-foreground mb-2">Get details of a specific agent.</p>
                  <CodeBlock title="Get Agent Details" language="bash">
{`curl -H "Authorization: Bearer YOUR_TOKEN" \\
  https://registry.a2areg.com/api/v1/agents/my-agent-id`}
                  </CodeBlock>
                </div>

                <Separator />

                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="destructive" className="font-mono text-xs">DELETE</Badge>
                    <code className="text-sm">/api/v1/agents/:id</code>
                  </div>
                  <p className="text-muted-foreground mb-2">Remove an agent from the registry.</p>
                  <CodeBlock title="Delete Agent" language="bash">
{`curl -X DELETE -H "Authorization: Bearer YOUR_TOKEN" \\
  https://registry.a2areg.com/api/v1/agents/my-agent-id`}
                  </CodeBlock>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Authentication</h2>
              <p className="text-muted-foreground mb-4">
                All API requests require authentication using Bearer tokens.
              </p>
              <CodeBlock title="Authentication Header" language="bash">
                Authorization: Bearer YOUR_API_TOKEN
              </CodeBlock>
              
              <div className="mt-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">Getting an API Token</h3>
                <p className="text-muted-foreground">
                  Contact your A2A Registry administrator to obtain an API token, or generate one through 
                  the web interface if you have publisher permissions.
                </p>
              </div>
            </Card>
          </div>
        );

      case "examples":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Examples</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Real-world examples of agent configurations and publishing workflows.
              </p>
            </div>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Python LangChain Agent</h2>
              <p className="text-muted-foreground mb-4">
                A complete example of a Python-based agent using the LangChain framework.
              </p>
              <CodeBlock title="agent.py" language="python">
                {codeExamples.pythonAgent}
              </CodeBlock>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">TypeScript Agent</h2>
              <p className="text-muted-foreground mb-4">
                Example A2A Card configuration for a TypeScript-based agent.
              </p>
              <CodeBlock title="a2a-card.json (TypeScript)" language="json">
{`{
  "name": "typescript-assistant",
  "version": "1.2.0",
  "description": "A TypeScript-based AI assistant for code analysis",
  "author": "Development Team <dev@company.com>",
  "framework": "custom",
  "runtime": "node",
  "entry_point": "dist/index.js",
  "tags": ["typescript", "code-analysis", "assistant"],
  "capabilities": [
    "code-review",
    "documentation-generation",
    "refactoring-suggestions"
  ],
  "dependencies": {
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0",
    "openai": "^4.0.0"
  },
  "resources": {
    "memory": "1Gi",
    "cpu": "1000m"
  },
  "environment": {
    "NODE_ENV": "production",
    "LOG_LEVEL": "info"
  }
}`}
              </CodeBlock>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Multi-Framework Agent</h2>
              <p className="text-muted-foreground mb-4">
                A2A Card configuration for an agent that supports multiple AI frameworks.
              </p>
              <CodeBlock title="a2a-card.json (Multi-Framework)" language="json">
{`{
  "name": "multi-framework-agent",
  "version": "2.0.0",
  "description": "Universal agent supporting multiple AI frameworks",
  "author": "AI Research Team <research@company.com>",
  "framework": "hybrid",
  "runtime": "python",
  "entry_point": "src/main.py",
  "tags": ["multi-framework", "universal", "enterprise"],
  "capabilities": [
    "framework-detection",
    "model-switching",
    "performance-optimization"
  ],
  "supported_frameworks": [
    "langchain",
    "autogen",
    "crewai",
    "custom"
  ],
  "dependencies": {
    "langchain": "^0.1.0",
    "autogen": "^0.2.0",
    "crewai": "^0.1.0"
  },
  "resources": {
    "memory": "2Gi",
    "cpu": "2000m",
    "gpu": "1"
  },
  "scaling": {
    "min_instances": 1,
    "max_instances": 10,
    "target_cpu": "70%"
  }
}`}
              </CodeBlock>
            </Card>
          </div>
        );

      case "security":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Security</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Security best practices and guidelines for publishing agents safely.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-primary p-2 bg-primary/10 rounded-md">
                    <Shield className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Authentication</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                      <li>Use strong API tokens with limited scope</li>
                      <li>Rotate tokens regularly</li>
                      <li>Never commit tokens to version control</li>
                      <li>Use environment variables for secrets</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-primary p-2 bg-primary/10 rounded-md">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Code Security</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                      <li>Scan dependencies for vulnerabilities</li>
                      <li>Use official base images</li>
                      <li>Minimize attack surface</li>
                      <li>Validate all inputs</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-primary p-2 bg-primary/10 rounded-md">
                    <Settings className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Configuration</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                      <li>Use least privilege principles</li>
                      <li>Encrypt sensitive configuration</li>
                      <li>Regular security updates</li>
                      <li>Monitor access logs</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="text-primary p-2 bg-primary/10 rounded-md">
                    <Zap className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-foreground mb-2">Runtime Security</h3>
                    <ul className="list-disc list-inside text-muted-foreground space-y-1 text-sm">
                      <li>Sandboxed execution environments</li>
                      <li>Resource limit enforcement</li>
                      <li>Network access controls</li>
                      <li>Audit trail logging</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-destructive/5 border-destructive/20">
              <div className="flex items-start space-x-4">
                <div className="text-destructive p-2 bg-destructive/10 rounded-md">
                  <Shield className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Security Reporting</h3>
                  <p className="text-muted-foreground mb-2">
                    If you discover a security vulnerability, please report it privately to our security team:
                  </p>
                  <code className="text-foreground bg-muted px-2 py-1 rounded">security@a2areg.com</code>
                  <p className="text-muted-foreground mt-2 text-sm">
                    Please include detailed information about the vulnerability and steps to reproduce it.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        );

      case "troubleshooting":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Troubleshooting</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Common issues and solutions when working with the A2A Publisher.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Common Issues</h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Authentication Failed</h3>
                    <div className="bg-destructive/10 border border-destructive/20 rounded-md p-3 mb-2">
                      <code className="text-sm text-destructive">Error: Authentication failed. Invalid token.</code>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      <strong>Solution:</strong> Verify your API token is correct and has not expired.
                    </p>
                    <CodeBlock title="Check Token" language="bash">
                      echo $A2A_AUTH_TOKEN
                    </CodeBlock>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Configuration Validation Error</h3>
                    <div className="bg-destructive/10 border border-destructive/20 rounded-md p-3 mb-2">
                      <code className="text-sm text-destructive">Error: Invalid configuration. Missing required field 'name'.</code>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      <strong>Solution:</strong> Ensure all required fields are present in your configuration file.
                    </p>
                    <CodeBlock title="Validate Config" language="bash">
                      a2a-publisher validate ./agent-config.json
                    </CodeBlock>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Network Connection Issues</h3>
                    <div className="bg-destructive/10 border border-destructive/20 rounded-md p-3 mb-2">
                      <code className="text-sm text-destructive">Error: ECONNREFUSED connecting to registry</code>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      <strong>Solution:</strong> Check your network connection and registry URL configuration.
                    </p>
                    <CodeBlock title="Test Connection" language="bash">
                      curl -I https://registry.a2areg.com/health
                    </CodeBlock>
                  </div>

                  <Separator />

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">File Size Limit Exceeded</h3>
                    <div className="bg-destructive/10 border border-destructive/20 rounded-md p-3 mb-2">
                      <code className="text-sm text-destructive">Error: Agent package exceeds maximum size limit (100MB)</code>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      <strong>Solution:</strong> Reduce package size by excluding unnecessary files or using .a2aignore.
                    </p>
                    <CodeBlock title="Create .a2aignore" language="bash">
{`# Create ignore file
echo "node_modules/" >> .a2aignore
echo "*.log" >> .a2aignore
echo ".git/" >> .a2aignore`}
                    </CodeBlock>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Getting Help</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">Community Support</h3>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start hover-elevate"
                      onClick={() => window.open('https://discord.gg/a2areg', '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Join Discord
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">Bug Reports</h3>
                    <Button 
                      variant="outline" 
                      className="w-full justify-start hover-elevate"
                      onClick={() => window.open('https://github.com/A2AReg/a2a-registry/issues', '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      GitHub Issues
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top separator */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8">
              <div className="p-6">
                <div className="flex items-center gap-2 mb-6">
                  <div className="text-primary p-2 bg-primary/10 rounded-md">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-foreground">Documentation</h2>
                </div>
                
                <ScrollArea className="h-[calc(100vh-12rem)]">
                  <nav className="space-y-2">
                    {navigationItems.map((item) => (
                      <Button
                        key={item.id}
                        variant={activeSection === item.id ? "secondary" : "ghost"}
                        className="w-full justify-start hover-elevate"
                        onClick={() => setActiveSection(item.id)}
                        data-testid={`nav-${item.id}`}
                      >
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.label}
                        {activeSection === item.id && (
                          <ChevronRight className="ml-auto h-4 w-4" />
                        )}
                      </Button>
                    ))}
                  </nav>
                </ScrollArea>
              </div>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <Card className="min-h-[80vh]">
              <div className="p-8">
                {renderContent()}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}