import { useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Copy, Check, Code, Download, Plus, Search, Terminal, Sparkles } from "lucide-react";

export default function Architecture() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const handleCopyCode = async (code: string, id: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedCode(id);
      setTimeout(() => setCopiedCode(null), 2000);
    } catch (err) {
      console.error("Failed to copy code:", err);
    }
  };


const codeExamples = {
    installation: `# Install the A2A Registry SDK
pip install a2a-reg-sdk

# Verify installation
python -c "import a2a_reg_sdk; print('SDK installed successfully!')"`,

    register: `# Advanced Agent Registration
from a2a_reg_sdk import (
    A2AClient, Agent, AgentCard, AgentCapabilities,
    AuthScheme, AgentPublisher
)

# Initialize registry client
client = A2AClient(
    registry_url="https://registry.a2areg.com",
    client_id="your-client-id",
    client_secret="your-client-secret"
)

# Create agent card
agent_card = AgentCard(
    name="My AI Assistant",
    description="An intelligent assistant for natural language processing",
    version="1.0.0",
    author="Your Organization"
)

# Create agent with capabilities
agent = Agent(
    name="my-ai-assistant",
    description="Intelligent NLP assistant",
    version="1.0.0",
    provider="Your Organization",
    location_url="https://api.example.com/agent",
    capabilities=AgentCapabilities(
        extensions=[
            {
                "uri": "https://example.com/extensions/nlp",
                "required": True,
                "description": "Natural language processing capabilities"
            }
        ],
        pushNotifications=True,
        streaming=False
    ),
    auth_schemes=[
        AuthScheme(
            type="api_key",
            description="API key authentication",
            required=True,
            headerName="X-API-Key"
        )
    ],
    agent_card=agent_card
)

# Create publisher and publish agent
publisher = AgentPublisher(client)
result = publisher.publish(agent)

print(f"Agent published successfully!")
print(f"Agent ID: {result.get('agent_id', 'N/A')}")
print(f"Registry URL: {result.get('registry_url', 'N/A')}")`,

    search: `# Advanced Agent Discovery
from a2a_reg_sdk import A2AClient

# Initialize client
client = A2AClient(
    registry_url="https://registry.a2areg.com",
    client_id="your-client-id",
    client_secret="your-client-secret"
)

# Search for agents with filters
agents = client.search_agents(
    query="AI assistant",
    capabilities=["text-generation", "question-answering"],
    tags=["nlp", "enterprise"],
    version_min="1.0.0",
    limit=10
)

print(f"Found {len(agents)} agents:")
for agent in agents:
    print(f"- {agent.name} v{agent.version}")
    print(f"  Provider: {agent.provider}")
    print(f"  Description: {agent.description}")
    print(f"  Capabilities: {agent.capabilities}")
    print(f"  Location: {agent.location_url}")
    print()`,
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 sm:space-y-6 mb-12 sm:mb-16 md:mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-card border border-border shadow-sm">
            <Badge variant="secondary" className="bg-blue-100 dark:bg-primary/10 text-blue-600 dark:text-primary border-blue-200 dark:border-primary/20 px-3 py-1 text-sm">
              <div className="relative">
                <Code className="w-3 h-3 mr-1 sm:w-4 sm:h-4 sm:mr-2" />
                <Sparkles className="absolute -top-1 -right-1 w-2 h-2 text-yellow-500 animate-pulse" />
              </div>
              Architecture & SDK
            </Badge>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Modern Architecture
              </h2>
          
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Built with modern technologies and designed for enterprise scale
              </p>
            </div>
            

        {/* Code Examples */}
        <div className="space-y-8 sm:space-y-12">
          <div className="text-center space-y-3 sm:space-y-4">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">
              Get Started in Minutes
              </h3>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Simple, powerful SDK for agent registration and discovery
            </p>
          </div>
          
          <Tabs defaultValue="installation" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-card border border-border">
              <TabsTrigger value="installation" className="data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-primary/10 data-[state=active]:text-blue-600 dark:data-[state=active]:text-primary text-sm flex items-center gap-2">
                <Download className="w-4 h-4" />
                Installation
              </TabsTrigger>
              <TabsTrigger value="register" className="data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-primary/10 data-[state=active]:text-blue-600 dark:data-[state=active]:text-primary text-sm flex items-center gap-2">
                <Plus className="w-4 h-4" />
                Register Agent
              </TabsTrigger>
              <TabsTrigger value="search" className="data-[state=active]:bg-blue-100 dark:data-[state=active]:bg-primary/10 data-[state=active]:text-blue-600 dark:data-[state=active]:text-primary text-sm flex items-center gap-2">
                <Search className="w-4 h-4" />
                Discover Agents
              </TabsTrigger>
            </TabsList>

            <TabsContent value="installation" className="mt-4 sm:mt-6">
              <Card className="bg-card border border-border shadow-sm p-0 overflow-hidden">
                <div className="flex items-center justify-between p-3 sm:p-4 border-b border-border">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
                    </div>
              </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleCopyCode(codeExamples.installation, "installation")}
                    className="text-muted-foreground hover:text-foreground h-8 w-8 p-0 transition-all duration-200 hover:scale-110"
                  >
                    {copiedCode === "installation" ? (
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 animate-in zoom-in-50 duration-200" />
                    ) : (
                      <Copy className="w-3 h-3 sm:w-4 sm:h-4 hover:text-blue-600 dark:hover:text-primary transition-colors duration-200" />
                    )}
                  </Button>
                </div>
                <pre className="p-3 sm:p-4 md:p-6 text-xs sm:text-sm font-mono text-foreground overflow-x-auto">
                  <code className="text-foreground">
                    <span className="text-blue-600 dark:text-blue-400"># Install the A2A Registry SDK</span>
                    <br />
                    <span className="text-green-600 dark:text-green-400">pip</span> <span className="text-purple-600 dark:text-purple-400">install</span> <span className="text-orange-600 dark:text-orange-400">a2a-reg-sdk</span>
                    <br />
                    <br />
                    <span className="text-blue-600 dark:text-blue-400"># Verify installation</span>
                    <br />
                    <span className="text-green-600 dark:text-green-400">python</span> <span className="text-purple-600 dark:text-purple-400">-c</span> <span className="text-yellow-600 dark:text-yellow-400">"import a2a_reg_sdk; print('SDK installed successfully!')"</span>
                  </code>
                </pre>
            </Card>
            </TabsContent>

            <TabsContent value="register" className="mt-4 sm:mt-6">
              <Card className="bg-card border border-border shadow-sm p-0 overflow-hidden">
                <div className="flex items-center justify-between p-3 sm:p-4 border-b border-border">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
                    </div>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => handleCopyCode(codeExamples.register, "register")}
                    className="text-muted-foreground hover:text-foreground h-8 w-8 p-0 transition-all duration-200 hover:scale-110"
                  >
                    {copiedCode === "register" ? (
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 animate-in zoom-in-50 duration-200" />
                    ) : (
                      <Copy className="w-3 h-3 sm:w-4 sm:h-4 hover:text-blue-600 dark:hover:text-primary transition-colors duration-200" />
                    )}
                  </Button>
                </div>
                <pre className="p-3 sm:p-4 md:p-6 text-xs sm:text-sm font-mono text-foreground overflow-x-auto">
                  <code className="text-foreground">
                    <span className="text-blue-600 dark:text-blue-400"># Advanced Agent Registration</span>
                    <br />
                    <span className="text-purple-600 dark:text-purple-400">from</span> <span className="text-orange-600 dark:text-orange-400">a2a_reg_sdk</span> <span className="text-purple-600 dark:text-purple-400">import</span> <span className="text-yellow-600 dark:text-yellow-400">(</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">A2AClient</span><span className="text-yellow-600 dark:text-yellow-400">,</span> <span className="text-orange-600 dark:text-orange-400">Agent</span><span className="text-yellow-600 dark:text-yellow-400">,</span> <span className="text-orange-600 dark:text-orange-400">AgentCard</span><span className="text-yellow-600 dark:text-yellow-400">,</span> <span className="text-orange-600 dark:text-orange-400">AgentCapabilities</span><span className="text-yellow-600 dark:text-yellow-400">,</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">AuthScheme</span><span className="text-yellow-600 dark:text-yellow-400">,</span> <span className="text-orange-600 dark:text-orange-400">AgentPublisher</span>
                    <br />
                    <span className="text-yellow-600 dark:text-yellow-400">)</span>
                    <br />
                    <br />
                    <span className="text-blue-600 dark:text-blue-400"># Initialize registry client</span>
                    <br />
                    <span className="text-orange-600 dark:text-orange-400">client</span> <span className="text-yellow-600 dark:text-yellow-400">=</span> <span className="text-orange-600 dark:text-orange-400">A2AClient</span><span className="text-yellow-600 dark:text-yellow-400">(</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">registry_url</span><span className="text-yellow-600 dark:text-yellow-400">=</span><span className="text-green-600 dark:text-green-400">"https://registry.a2areg.com"</span><span className="text-yellow-600 dark:text-yellow-400">,</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">client_id</span><span className="text-yellow-600 dark:text-yellow-400">=</span><span className="text-green-600 dark:text-green-400">"your-client-id"</span><span className="text-yellow-600 dark:text-yellow-400">,</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">client_secret</span><span className="text-yellow-600 dark:text-yellow-400">=</span><span className="text-green-600 dark:text-green-400">"your-client-secret"</span>
                    <br />
                    <span className="text-yellow-600 dark:text-yellow-400">)</span>
                    <br />
                    <br />
                    <span className="text-blue-600 dark:text-blue-400"># Create agent card</span>
                    <br />
                    <span className="text-orange-600 dark:text-orange-400">agent_card</span> <span className="text-yellow-600 dark:text-yellow-400">=</span> <span className="text-orange-600 dark:text-orange-400">AgentCard</span><span className="text-yellow-600 dark:text-yellow-400">(</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">name</span><span className="text-yellow-600 dark:text-yellow-400">=</span><span className="text-green-600 dark:text-green-400">"My AI Assistant"</span><span className="text-yellow-600 dark:text-yellow-400">,</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">description</span><span className="text-yellow-600 dark:text-yellow-400">=</span><span className="text-green-600 dark:text-green-400">"An intelligent assistant for natural language processing"</span><span className="text-yellow-600 dark:text-yellow-400">,</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">version</span><span className="text-yellow-600 dark:text-yellow-400">=</span><span className="text-green-600 dark:text-green-400">"1.0.0"</span><span className="text-yellow-600 dark:text-yellow-400">,</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">author</span><span className="text-yellow-600 dark:text-yellow-400">=</span><span className="text-green-600 dark:text-green-400">"Your Organization"</span>
                    <br />
                    <span className="text-yellow-600 dark:text-yellow-400">)</span>
                    <br />
                    <br />
                    <span className="text-blue-600 dark:text-blue-400"># Create agent with capabilities</span>
                    <br />
                    <span className="text-orange-600 dark:text-orange-400">agent</span> <span className="text-yellow-600 dark:text-yellow-400">=</span> <span className="text-orange-600 dark:text-orange-400">Agent</span><span className="text-yellow-600 dark:text-yellow-400">(</span>
                    <br />
                    <span className="text-orange-600 dark:text-orange-400">name</span><span className="text-yellow-600 dark:text-yellow-400">=</span><span className="text-green-600 dark:text-green-400">"my-ai-assistant"</span><span className="text-yellow-600 dark:text-yellow-400">,</span>
                    <br />
                    <span className="text-orange-600 dark:text-orange-400">description</span><span className="text-yellow-600 dark:text-yellow-400">=</span><span className="text-green-600 dark:text-green-400">"Intelligent NLP assistant"</span><span className="text-yellow-600 dark:text-yellow-400">,</span>
                    <br />
                    <span className="text-orange-600 dark:text-orange-400">version</span><span className="text-yellow-600 dark:text-yellow-400">=</span><span className="text-green-600 dark:text-green-400">"1.0.0"</span><span className="text-yellow-600 dark:text-yellow-400">,</span>
                    <br />
                    <span className="text-orange-600 dark:text-orange-400">provider</span><span className="text-yellow-600 dark:text-yellow-400">=</span><span className="text-green-600 dark:text-green-400">"Your Organization"</span><span className="text-yellow-600 dark:text-yellow-400">,</span>
                    <br />
                    <span className="text-orange-600 dark:text-orange-400">location_url</span><span className="text-yellow-600 dark:text-yellow-400">=</span><span className="text-green-600 dark:text-green-400">"https://api.example.com/agent"</span><span className="text-yellow-600 dark:text-yellow-400">,</span>
                    <br />
                    <span className="text-orange-600 dark:text-orange-400">agent_card</span><span className="text-yellow-600 dark:text-yellow-400">=</span><span className="text-orange-600 dark:text-orange-400">agent_card</span>
                    <br />
                    <span className="text-yellow-600 dark:text-yellow-400">)</span>
                    <br />
                    <br />
                    <span className="text-blue-600 dark:text-blue-400"># Create publisher and publish agent</span>
                    <br />
                    <span className="text-orange-600 dark:text-orange-400">publisher</span> <span className="text-yellow-600 dark:text-yellow-400">=</span> <span className="text-orange-600 dark:text-orange-400">AgentPublisher</span><span className="text-yellow-600 dark:text-yellow-400">(</span><span className="text-orange-600 dark:text-orange-400">client</span><span className="text-yellow-600 dark:text-yellow-400">)</span>
                    <br />
                    <span className="text-orange-600 dark:text-orange-400">result</span> <span className="text-yellow-600 dark:text-yellow-400">=</span> <span className="text-orange-600 dark:text-orange-400">publisher</span><span className="text-yellow-600 dark:text-yellow-400">.</span><span className="text-orange-600 dark:text-orange-400">publish</span><span className="text-yellow-600 dark:text-yellow-400">(</span><span className="text-orange-600 dark:text-orange-400">agent</span><span className="text-yellow-600 dark:text-yellow-400">)</span>
                    <br />
                    <br />
                    <span className="text-orange-600 dark:text-orange-400">print</span><span className="text-yellow-600 dark:text-yellow-400">(</span><span className="text-green-600 dark:text-green-400">f"Agent published successfully!"</span><span className="text-yellow-600 dark:text-yellow-400">)</span>
                    <br />
                    <span className="text-orange-600 dark:text-orange-400">print</span><span className="text-yellow-600 dark:text-yellow-400">(</span><span className="text-green-600 dark:text-green-400">f"Agent ID: {'{'}result.get('agent_id', 'N/A'){'}'}"</span><span className="text-yellow-600 dark:text-yellow-400">)</span>
                    <br />
                    <span className="text-orange-600 dark:text-orange-400">print</span><span className="text-yellow-600 dark:text-yellow-400">(</span><span className="text-green-600 dark:text-green-400">f"Registry URL: {'{'}result.get('registry_url', 'N/A'){'}'}"</span><span className="text-yellow-600 dark:text-yellow-400">)</span>
                  </code>
                </pre>
            </Card>
            </TabsContent>

            <TabsContent value="search" className="mt-4 sm:mt-6">
              <Card className="bg-card border border-border shadow-sm p-0 overflow-hidden">
                <div className="flex items-center justify-between p-3 sm:p-4 border-b border-border">
                  <div className="flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                      <Terminal className="w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground" />
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse delay-200"></div>
                    </div>
                  </div>
                <Button 
                  variant="ghost" 
                  size="sm"
                    onClick={() => handleCopyCode(codeExamples.search, "search")}
                    className="text-muted-foreground hover:text-foreground h-8 w-8 p-0 transition-all duration-200 hover:scale-110"
                  >
                    {copiedCode === "search" ? (
                      <Check className="w-3 h-3 sm:w-4 sm:h-4 text-green-500 animate-in zoom-in-50 duration-200" />
                    ) : (
                      <Copy className="w-3 h-3 sm:w-4 sm:h-4 hover:text-blue-600 dark:hover:text-primary transition-colors duration-200" />
                    )}
                </Button>
              </div>
                <pre className="p-3 sm:p-4 md:p-6 text-xs sm:text-sm font-mono text-foreground overflow-x-auto">
                  <code className="text-foreground">
                    <span className="text-blue-600 dark:text-blue-400"># Advanced Agent Discovery</span>
                    <br />
                    <span className="text-purple-600 dark:text-purple-400">from</span> <span className="text-orange-600 dark:text-orange-400">a2a_reg_sdk</span> <span className="text-purple-600 dark:text-purple-400">import</span> <span className="text-orange-600 dark:text-orange-400">A2AClient</span>
                    <br />
                    <br />
                    <span className="text-blue-600 dark:text-blue-400"># Initialize client</span>
                    <br />
                    <span className="text-orange-600 dark:text-orange-400">client</span> <span className="text-yellow-600 dark:text-yellow-400">=</span> <span className="text-orange-600 dark:text-orange-400">A2AClient</span><span className="text-yellow-600 dark:text-yellow-400">(</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">registry_url</span><span className="text-yellow-600 dark:text-yellow-400">=</span><span className="text-green-600 dark:text-green-400">"https://registry.a2areg.com"</span><span className="text-yellow-600 dark:text-yellow-400">,</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">client_id</span><span className="text-yellow-600 dark:text-yellow-400">=</span><span className="text-green-600 dark:text-green-400">"your-client-id"</span><span className="text-yellow-600 dark:text-yellow-400">,</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">client_secret</span><span className="text-yellow-600 dark:text-yellow-400">=</span><span className="text-green-600 dark:text-green-400">"your-client-secret"</span>
                    <br />
                    <span className="text-yellow-600 dark:text-yellow-400">)</span>
                    <br />
                    <br />
                    <span className="text-blue-600 dark:text-blue-400"># Search for agents with filters</span>
                    <br />
                    <span className="text-orange-600 dark:text-orange-400">agents</span> <span className="text-yellow-600 dark:text-yellow-400">=</span> <span className="text-orange-600 dark:text-orange-400">client</span><span className="text-yellow-600 dark:text-yellow-400">.</span><span className="text-orange-600 dark:text-orange-400">search_agents</span><span className="text-yellow-600 dark:text-yellow-400">(</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">query</span><span className="text-yellow-600 dark:text-yellow-400">=</span><span className="text-green-600 dark:text-green-400">"AI assistant"</span><span className="text-yellow-600 dark:text-yellow-400">,</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">capabilities</span><span className="text-yellow-600 dark:text-yellow-400">=[</span><span className="text-green-600 dark:text-green-400">"text-generation"</span><span className="text-yellow-600 dark:text-yellow-400">,</span> <span className="text-green-600 dark:text-green-400">"question-answering"</span><span className="text-yellow-600 dark:text-yellow-400">],</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">tags</span><span className="text-yellow-600 dark:text-yellow-400">=[</span><span className="text-green-600 dark:text-green-400">"nlp"</span><span className="text-yellow-600 dark:text-yellow-400">,</span> <span className="text-green-600 dark:text-green-400">"enterprise"</span><span className="text-yellow-600 dark:text-yellow-400">],</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">version_min</span><span className="text-yellow-600 dark:text-yellow-400">=</span><span className="text-green-600 dark:text-green-400">"1.0.0"</span><span className="text-yellow-600 dark:text-yellow-400">,</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">limit</span><span className="text-yellow-600 dark:text-yellow-400">=</span><span className="text-purple-600 dark:text-purple-400">10</span>
                    <br />
                    <span className="text-yellow-600 dark:text-yellow-400">)</span>
                    <br />
                    <br />
                    <span className="text-orange-600 dark:text-orange-400">print</span><span className="text-yellow-600 dark:text-yellow-400">(</span><span className="text-green-600 dark:text-green-400">f"Found {'{'}len(agents){'}'} agents:"</span><span className="text-yellow-600 dark:text-yellow-400">)</span>
                    <br />
                    <span className="text-purple-600 dark:text-purple-400">for</span> <span className="text-orange-600 dark:text-orange-400">agent</span> <span className="text-purple-600 dark:text-purple-400">in</span> <span className="text-orange-600 dark:text-orange-400">agents</span><span className="text-yellow-600 dark:text-yellow-400">:</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">print</span><span className="text-yellow-600 dark:text-yellow-400">(</span><span className="text-green-600 dark:text-green-400">f"- {'{'}agent.name{'}'} v{'{'}agent.version{'}'}"</span><span className="text-yellow-600 dark:text-yellow-400">)</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">print</span><span className="text-yellow-600 dark:text-yellow-400">(</span><span className="text-green-600 dark:text-green-400">f"  Provider: {'{'}agent.provider{'}'}"</span><span className="text-yellow-600 dark:text-yellow-400">)</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">print</span><span className="text-yellow-600 dark:text-yellow-400">(</span><span className="text-green-600 dark:text-green-400">f"  Description: {'{'}agent.description{'}'}"</span><span className="text-yellow-600 dark:text-yellow-400">)</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">print</span><span className="text-yellow-600 dark:text-yellow-400">(</span><span className="text-green-600 dark:text-green-400">f"  Location: {'{'}agent.location_url{'}'}"</span><span className="text-yellow-600 dark:text-yellow-400">)</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-orange-600 dark:text-orange-400">print</span><span className="text-yellow-600 dark:text-yellow-400">(</span><span className="text-yellow-600 dark:text-yellow-400">)</span>
                  </code>
                </pre>
            </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}