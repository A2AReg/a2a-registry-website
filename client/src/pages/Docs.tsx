import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import Header from "@/components/Header";
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
  { id: "python-sdk", label: "Python SDK", icon: Code },
  { id: "examples", label: "Examples", icon: Code },
  { id: "api-reference", label: "API Reference", icon: Code },
  { id: "security", label: "Security", icon: Shield },
  { id: "troubleshooting", label: "Troubleshooting", icon: Zap }
];

const codeExamples = {
  installation: `pip install a2a-reg-sdk`,
  basicPublish: `from a2a_reg_sdk import A2AClient, AgentBuilder, AgentCapabilitiesBuilder

# Initialize the client
client = A2AClient(api_key='your_api_key')

# Create capabilities using builder
capabilities_builder = AgentCapabilitiesBuilder()
capabilities = capabilities_builder.protocols(['http']).supported_formats(['json']).build()

# Create agent using builder
agent_builder = AgentBuilder('Sample Agent', 'A sample agent for demonstration purposes', '1.0.0', 'Your Organization')
new_agent = agent_builder.with_capabilities(capabilities).with_location('https://example.com/agent').build()

# Publish the agent
response = client.publish_agent(new_agent)

if response.success:
    print('Agent published successfully!')
else:
    print(f'Failed to publish agent: {response.error}')`,
  sdkInstallation: `pip install a2a-reg-sdk`,
  sdkBasicUsage: `from a2a_reg_sdk import A2AClient, AgentBuilder, AgentCapabilitiesBuilder

# Initialize the client
client = A2AClient(api_key='your_api_key')

# Create capabilities using builder
capabilities_builder = AgentCapabilitiesBuilder()
capabilities = capabilities_builder.protocols(['http']).supported_formats(['json']).build()

# Create agent using builder
agent_builder = AgentBuilder('Sample Agent', 'A sample agent for demonstration purposes', '1.0.0', 'Your Organization')
new_agent = agent_builder.with_capabilities(capabilities).with_location('https://example.com/agent').build()

# Publish the agent
response = client.publish_agent(new_agent)

if response.success:
    print('Agent published successfully!')
else:
    print(f'Failed to publish agent: {response.error}')`,
  sdkAdvanced: `from a2a_reg_sdk import A2AClient, AgentBuilder, AgentCapabilitiesBuilder

# Initialize the client
client = A2AClient(api_key='your_api_key')

# Create advanced capabilities using builder
capabilities_builder = AgentCapabilitiesBuilder()
capabilities = capabilities_builder.protocols(['http', 'websocket']).supported_formats(['json', 'text']).max_concurrent_requests(10).build()

# Create advanced agent using builder
agent_builder = AgentBuilder('Advanced NLP Agent', 'An advanced NLP agent with multi-model support', '2.1.0', 'AI Team')
advanced_agent = agent_builder.with_capabilities(capabilities).with_location('https://api.company.com/nlp-agent').public(True).active(True).build()

# Publish the advanced agent
response = client.publish_agent(advanced_agent)

if response.success:
    print('Advanced agent published successfully!')
    print(f'Agent ID: {response.agent_id}')
else:
    print(f'Failed to publish agent: {response.error}')`,
  sdkQuery: `from a2a_reg_sdk import A2AClient

# Initialize the client
client = A2AClient(api_key='your_api_key')

# Retrieve a list of registered agents
agents = client.get_agents()

# Display agent information
for agent in agents:
    print(f"Agent Name: {agent.name}")
    print(f"Description: {agent.description}")
    print(f"URL: {agent.url}")
    print()

# Retrieve agent details by name
agent_name = 'Sample Agent'
agent = client.get_agent_by_name(agent_name)

if agent:
    print(f"Agent Name: {agent.name}")
    print(f"Description: {agent.description}")
    print(f"URL: {agent.url}")
    print(f"Version: {agent.version}")
    print(f"Capabilities: {', '.join(agent.capabilities)}")
    print(f"Provider: {agent.provider}")
else:
    print(f"Agent '{agent_name}' not found.")`,
  githubBasicUsage: `#!/usr/bin/env python3
"""
Basic A2A SDK Usage Example
This example demonstrates basic usage of the A2A Python SDK for:
- Connecting to the registry
- Publishing an agent
- Retrieving agent information
"""
import os
from a2a_reg_sdk import A2AClient, AgentBuilder, AgentCapabilitiesBuilder

def main():
    # Initialize the client
    client = A2AClient(api_key=os.getenv('A2A_API_KEY'))

    print("✓ Client initialized successfully")

    # Create capabilities using builder
    capabilities_builder = AgentCapabilitiesBuilder()
    capabilities = capabilities_builder.protocols(['http']).supported_formats(['json']).build()

    # Create agent using builder
    agent_builder = AgentBuilder('Sample Agent', 'A sample agent for demonstration purposes', '1.0.0', 'Your Organization')
    new_agent = agent_builder.with_capabilities(capabilities).with_location('https://example.com/agent').build()

    try:
        # Publish the agent
        response = client.publish_agent(new_agent)
        
        if response.success:
            print('✓ Agent published successfully!')
        else:
            print(f'✗ Failed to publish agent: {response.error}')
            return

        # Retrieve a list of registered agents
        agents = client.get_agents()
        print(f"✓ Found {len(agents)} registered agents")

        # Display agent information
        for agent in agents:
            print(f"  - {agent.name}: {agent.description}")

        print("✓ All operations completed successfully")

    except Exception as e:
        print(f"✗ Operation failed: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()`,
  githubAdvancedAgent: `#!/usr/bin/env python3
"""
Advanced A2A Agent Example
This example demonstrates creating a sophisticated agent with:
- Complex capabilities and comprehensive metadata
- Advanced agent management operations
"""
import os
from a2a_reg_sdk import A2AClient, AgentBuilder, AgentCapabilitiesBuilder

def create_advanced_agent():
    """Create an advanced agent with comprehensive configuration."""
    
    # Create advanced capabilities using builder
    capabilities_builder = AgentCapabilitiesBuilder()
    capabilities = capabilities_builder.protocols(['http', 'websocket']).supported_formats(['json', 'text']).max_concurrent_requests(10).build()

    # Create advanced agent using builder
    agent_builder = AgentBuilder('Advanced AI Assistant', 'An advanced AI assistant with multi-modal capabilities and comprehensive API support', '2.1.0', 'Advanced AI Corp')
    advanced_agent = agent_builder.with_capabilities(capabilities).with_location('https://api.advanced-ai.com/v2/agent').public(True).active(True).build()

    return advanced_agent

def main():
    # Initialize client
    client = A2AClient(api_key=os.getenv('A2A_API_KEY'))

    try:
        print("✓ Client initialized successfully")

        # Create advanced agent
        advanced_agent = create_advanced_agent()
        print(f"✓ Created advanced agent: {advanced_agent.name}")
        print(f"  - Version: {advanced_agent.version}")
        print(f"  - Provider: {advanced_agent.provider}")
        print(f"  - Capabilities: {', '.join(advanced_agent.capabilities)}")

        # Publish the agent
        response = client.publish_agent(advanced_agent)
        
        if response.success:
            print('✓ Advanced agent published successfully!')
            print(f'  - Agent ID: {response.agent_id}')
        else:
            print(f'✗ Failed to publish agent: {response.error}')
            return

        # Retrieve agent details by name
        agent = client.get_agent_by_name('Advanced AI Assistant')
        if agent:
            print(f"✓ Retrieved agent details: {agent.name}")
            print(f"  - URL: {agent.url}")
            print(f"  - Version: {agent.version}")
            print(f"  - Capabilities: {', '.join(agent.capabilities)}")

        print("✓ All operations completed successfully")

    except Exception as e:
        print(f"✗ Operation failed: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()`,
  githubPublisherExample: `#!/usr/bin/env python3
"""
A2A Agent Management Example
This example demonstrates comprehensive agent management operations:
- Publishing multiple agents
- Retrieving and managing agent information
- Working with different agent types
"""
import os
from a2a_reg_sdk import A2AClient, AgentBuilder, AgentCapabilitiesBuilder

def main():
    # Create client
    client = A2AClient(api_key=os.getenv('A2A_API_KEY'))

    print("✓ Client initialized successfully")

    try:
        # Create capabilities using builder
        capabilities_builder = AgentCapabilitiesBuilder()
        capabilities = capabilities_builder.protocols(['http']).supported_formats(['json']).build()

        # Create a chatbot agent using builder
        chatbot_builder = AgentBuilder('Sample Chatbot', 'A sample AI chatbot agent', '1.0.0', 'Demo Corp')
        chatbot_agent = chatbot_builder.with_capabilities(capabilities).with_location('https://example.com/chatbot').build()

        # Publish the chatbot agent
        response1 = client.publish_agent(chatbot_agent)
        if response1.success:
            print('✓ Chatbot agent published successfully!')
        else:
            print(f'✗ Failed to publish chatbot: {response1.error}')

        # Create a data processing agent using builder
        data_builder = AgentBuilder('Sample Data Processor', 'A sample data processing agent', '1.0.0', 'Demo Corp')
        data_agent = data_builder.with_capabilities(capabilities).with_location('https://example.com/data-processor').build()

        # Publish the data processing agent
        response2 = client.publish_agent(data_agent)
        if response2.success:
            print('✓ Data processor agent published successfully!')
        else:
            print(f'✗ Failed to publish data processor: {response2.error}')

        # Retrieve all agents
        agents = client.get_agents()
        print(f"✓ Found {len(agents)} total agents in registry")

        # Display all agents
        for agent in agents:
            print(f"  - {agent.name} ({agent.version}): {agent.description}")

        print("✓ All agent management operations completed successfully")

    except Exception as e:
        print(f"✗ Operation failed: {e}")
        import traceback
        traceback.print_exc()

if __name__ == "__main__":
    main()`,
  a2aCard: `{
  "schemaVersion": "1.0",
  "humanReadableId": "my-ai-assistant",
  "agentVersion": "1.0.0",
  "name": "My AI Assistant",
  "description": "An intelligent assistant agent for natural language processing",
  "url": "https://api.example.com/agent",
  "provider": {
    "name": "Your Organization",
    "contact": "contact@example.com",
    "website": "https://example.com"
  },
  "capabilities": {
    "extensions": [
      {
        "uri": "https://example.com/extensions/sample-extension",
        "required": true,
        "description": "A sample extension for demonstration purposes.",
        "params": {
          "key": "value"
        }
      }
    ],
    "pushNotifications": true,
    "streaming": false
  },
  "authSchemes": [
    {
      "type": "api_key",
      "description": "API key authentication",
      "required": true,
      "headerName": "X-API-Key"
    }
  ],
  "skills": [
    "text-generation",
    "question-answering",
    "summarization"
  ],
  "tags": ["nlp", "assistant", "enterprise"],
  "privacyPolicyUrl": "https://example.com/privacy",
  "termsOfServiceUrl": "https://example.com/terms",
  "iconUrl": "https://example.com/icon.png",
  "lastUpdated": "2024-01-15T10:30:00Z"
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
        <div className="flex items-center justify-between bg-muted px-3 sm:px-4 py-2 border-b">
          <span className="text-xs sm:text-sm font-medium text-foreground">{title}</span>
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
          fontSize: '0.75rem',
          lineHeight: '1.4',
        }}
        wrapLongLines={true}
        wrapLines={true}
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
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">Getting Started</h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                Welcome to the A2A Registry documentation. This tool enables you to publish AI agents to the A2A Registry 
                for cross-platform discovery and collaboration.
              </p>
            </div>

            <Card className="p-4 sm:p-6">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="text-primary p-2 bg-primary/10 rounded-md flex-shrink-0">
                    <BookOpen className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">What is A2A Registry?</h3>
                    <p className="text-sm sm:text-base text-muted-foreground mb-4">
                      With the rapid growth of AI and agentic applications, enterprises often manage a mix of internally developed agents and externally procured ones, hosted either on-premises or in the cloud. Many business processes span multiple agents, creating the need for a service that can discover, organize, and leverage these agents to complete tasks.
                      
                      Similarly, vendors may offer collections of agents, much like public APIs are published and documented today, requiring a way to present their available agents for customer use. These agents may be openly accessible or gated by entitlements.
                      
                      The A2A Registry provides this capability: a service deployable within enterprise environments or as a public endpoint, enabling agent discovery, entitlement management, and streamlined integration.
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              <Card className="p-4 sm:p-6 hover-elevate border border-border/50">
                <div className="space-y-3 sm:space-y-4">
                  <div className="text-primary p-2 w-fit rounded-md bg-primary/10">
                    <Download className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">1. Install</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Install the A2A SDK CLI globally on your system</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 sm:p-6 hover-elevate border border-border/50">
                <div className="space-y-3 sm:space-y-4">
                  <div className="text-primary p-2 w-fit rounded-md bg-primary/10">
                    <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">2. Configure</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Create your A2A Card configuration and metadata</p>
                  </div>
                </div>
              </Card>
              
              <Card className="p-4 sm:p-6 hover-elevate border border-border/50 sm:col-span-2 lg:col-span-1">
                <div className="space-y-3 sm:space-y-4">
                  <div className="text-primary p-2 w-fit rounded-md bg-primary/10">
                    <Play className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-foreground">3. Publish</h3>
                    <p className="text-xs sm:text-sm text-muted-foreground">Deploy your agent to the A2A Registry</p>
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Quick Start</h2>
              <div className="space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">1. Install the A2A Registry SDK</h3>
                  <CodeBlock title="Install A2A Publisher" language="bash">
                    {codeExamples.installation}
                  </CodeBlock>
                </div>
                
                <div>
                  <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">2. Publish Your First Agent</h3>
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
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">Installation</h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                Multiple ways to install and set up the A2A Registry tool on your system.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <Card className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">pip (Recommended)</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Install globally using pip for easy access from any directory.
                </p>
                <CodeBlock title="Install via pip" language="bash">
                  pip install a2a-reg-sdk
                </CodeBlock>
              </Card>

              <Card className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Docker</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Use the official Docker image for containerized environments.
                </p>
                <CodeBlock title="Run with Docker" language="bash">
{`docker run -v $(pwd):/workspace \\
  a2areg/registry:latest publish /workspace/a2a-card.json`}
                </CodeBlock>
              </Card>

              <Card className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">From Source</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  Build and install from the source repository.
                </p>
                <CodeBlock title="Install from Source" language="bash">
{`git clone https://github.com/A2AReg/a2a-registry.git
cd a2a-registry/tools/a2a-publisher
pip install -e .`}
                </CodeBlock>
              </Card>
            </div>

            <Card className="p-4 sm:p-6 bg-primary/5 border-primary/20">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="text-primary p-2 bg-primary/10 rounded-md flex-shrink-0">
                  <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-foreground mb-2">System Requirements</h3>
                  <ul className="list-disc list-inside text-xs sm:text-sm text-muted-foreground space-y-1">
                    <li>Python 3.8 or higher</li>
                    <li>pip (Python package installer)</li>
                    <li>Git (for source installation)</li>
                    <li>Docker (optional, for containerized usage)</li>
                  </ul>
                </div>
              </div>
            </Card>

            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Verification</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Verify your installation by importing the SDK in Python:
              </p>
              <CodeBlock title="Check Installation" language="python">
                python -c "import a2a_reg_sdk; print('SDK version:', a2a_reg_sdk.__version__)"
              </CodeBlock>
            </div>
          </div>
        );

      case "configuration":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3 sm:mb-4">Configuration</h1>
              <p className="text-base sm:text-lg text-muted-foreground mb-4 sm:mb-6">
                Learn how to configure your agents for publishing to the A2A Registry.
              </p>
            </div>

            <Card className="p-4 sm:p-6">
              <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">A2A Card Configuration</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                Create an <code className="bg-muted px-1 rounded text-xs sm:text-sm">a2a-card.json</code> file in your project root. The A2A Card contains metadata about your agent along with additional configuration:
              </p>
              <CodeBlock title="a2a-card.json" language="json">
                {codeExamples.a2aCard}
              </CodeBlock>
            </Card>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <Card className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Required Fields</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <code className="bg-muted px-1 rounded text-xs sm:text-sm">schemaVersion</code>
                    <p className="text-xs sm:text-sm text-muted-foreground">Version of the Agent Card schema (e.g., "1.0")</p>
                  </div>
                  <div>
                    <code className="bg-muted px-1 rounded text-xs sm:text-sm">humanReadableId</code>
                    <p className="text-xs sm:text-sm text-muted-foreground">Unique, user-friendly identifier for the agent</p>
                  </div>
                  <div>
                    <code className="bg-muted px-1 rounded text-xs sm:text-sm">agentVersion</code>
                    <p className="text-xs sm:text-sm text-muted-foreground">Version of the agent software (e.g., "1.0.0")</p>
                  </div>
                  <div>
                    <code className="bg-muted px-1 rounded text-xs sm:text-sm">name</code>
                    <p className="text-xs sm:text-sm text-muted-foreground">Display name of the agent</p>
                  </div>
                  <div>
                    <code className="bg-muted px-1 rounded text-xs sm:text-sm">description</code>
                    <p className="text-xs sm:text-sm text-muted-foreground">Detailed explanation of agent's purpose and functionality</p>
                  </div>
                  <div>
                    <code className="bg-muted px-1 rounded text-xs sm:text-sm">url</code>
                    <p className="text-xs sm:text-sm text-muted-foreground">Primary endpoint URL for interacting with the agent</p>
                  </div>
                  <div>
                    <code className="bg-muted px-1 rounded text-xs sm:text-sm">provider</code>
                    <p className="text-xs sm:text-sm text-muted-foreground">Information about the agent's provider (name, contact, website)</p>
                  </div>
                </div>
              </Card>

              <Card className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-foreground mb-3 sm:mb-4">Optional Fields</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <code className="bg-muted px-1 rounded text-xs sm:text-sm">capabilities</code>
                    <p className="text-xs sm:text-sm text-muted-foreground">Agent's supported extensions, push notifications, and streaming capabilities</p>
                  </div>
                  <div>
                    <code className="bg-muted px-1 rounded text-xs sm:text-sm">authSchemes</code>
                    <p className="text-xs sm:text-sm text-muted-foreground">List of supported authentication schemes</p>
                  </div>
                  <div>
                    <code className="bg-muted px-1 rounded text-xs sm:text-sm">skills</code>
                    <p className="text-xs sm:text-sm text-muted-foreground">Specific skills or capabilities the agent possesses</p>
                  </div>
                  <div>
                    <code className="bg-muted px-1 rounded text-xs sm:text-sm">tags</code>
                    <p className="text-xs sm:text-sm text-muted-foreground">Keywords for categorization and discovery</p>
                  </div>
                  <div>
                    <code className="bg-muted px-1 rounded text-xs sm:text-sm">privacyPolicyUrl</code>
                    <p className="text-xs sm:text-sm text-muted-foreground">URL to the agent's privacy policy</p>
                  </div>
                  <div>
                    <code className="bg-muted px-1 rounded text-xs sm:text-sm">termsOfServiceUrl</code>
                    <p className="text-xs sm:text-sm text-muted-foreground">URL to the agent's terms of service</p>
                  </div>
                  <div>
                    <code className="bg-muted px-1 rounded text-xs sm:text-sm">iconUrl</code>
                    <p className="text-xs sm:text-sm text-muted-foreground">URL to an icon representing the agent</p>
                  </div>
                  <div>
                    <code className="bg-muted px-1 rounded text-xs sm:text-sm">lastUpdated</code>
                    <p className="text-xs sm:text-sm text-muted-foreground">Timestamp when the Agent Card was last updated</p>
                  </div>
                </div>
              </Card>
            </div>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Schema Validation</h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-4">
                The Agent Card follows the official A2A Protocol specification from <a href="https://a2a-protocol.org/latest/specification/#552-agentcapabilities-object" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline text-sm sm:text-base py-1 px-1 rounded hover:bg-primary/10 transition-colors">a2a-protocol.org</a>. The AgentCapabilities object structure is defined in the official specification. All required fields must be present for successful registration:
              </p>
              <CodeBlock title="Schema Validation Example" language="json">
{`{
  "schemaVersion": "1.0",
  "humanReadableId": "my-ai-assistant",
  "agentVersion": "1.0.0",
  "name": "My AI Assistant",
  "description": "An intelligent assistant agent for natural language processing",
  "url": "https://api.example.com/agent",
  "provider": {
    "name": "Your Organization",
    "contact": "contact@example.com",
    "website": "https://example.com"
  },
  "capabilities": {
    "extensions": [
      {
        "uri": "https://example.com/extensions/sample-extension",
        "required": true,
        "description": "A sample extension for demonstration purposes.",
        "params": {
          "key": "value"
        }
      }
    ],
    "pushNotifications": true,
    "streaming": false
  },
  "authSchemes": [
    {
      "type": "api_key",
      "description": "API key authentication",
      "required": true,
      "headerName": "X-API-Key"
    }
  ],
  "skills": [
    "text-generation",
    "question-answering",
    "summarization"
  ],
  "tags": ["nlp", "assistant", "enterprise"],
  "privacyPolicyUrl": "https://example.com/privacy",
  "termsOfServiceUrl": "https://example.com/terms",
  "iconUrl": "https://example.com/icon.png",
  "lastUpdated": "2024-01-15T10:30:00Z"
}`}
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
                <CodeBlock title="Publish Agent with Python SDK" language="python">
                  {codeExamples.basicPublish}
                </CodeBlock>
              </Card>

              <Card className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Advanced Options</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Validation Before Publishing</h3>
                    <p className="text-muted-foreground mb-2">Validate agent configuration before publishing:</p>
                    <CodeBlock title="Publish Agent" language="python">
{`# Publish agent with error handling
response = client.publish_agent(agent)
if response.success:
    print("Agent published successfully!")
    print(f"Agent ID: {response.agent_id}")
else:
    print(f"Failed to publish agent: {response.error}")`}
                    </CodeBlock>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Custom Registry</h3>
                    <p className="text-muted-foreground mb-2">Publish to a custom registry endpoint:</p>
                    <CodeBlock title="Custom Registry" language="python">
{`# Use custom registry with API key
client = A2AClient(api_key='your_custom_registry_api_key')`}
                    </CodeBlock>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Sample Agent Creation</h3>
                    <p className="text-muted-foreground mb-2">Create sample agents for testing:</p>
                    <CodeBlock title="Create Sample Agent" language="python">
{`# Create a sample agent for testing using builders
from a2a_reg_sdk import AgentBuilder, AgentCapabilitiesBuilder

# Create capabilities using builder
capabilities_builder = AgentCapabilitiesBuilder()
capabilities = capabilities_builder.protocols(['http']).supported_formats(['json']).build()

# Create agent using builder
agent_builder = AgentBuilder('My Test Agent', 'A test agent for development', '1.0.0', 'Test Organization')
sample_agent = agent_builder.with_capabilities(capabilities).with_location('https://example.com/test-agent').build()`}
                    </CodeBlock>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        );

      case "python-sdk":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Python SDK</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Use the Python SDK for programmatic agent publishing and registry management.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Installation</h2>
                <p className="text-muted-foreground mb-4">
                  Install the A2A Registry SDK using pip:
                </p>
                <CodeBlock title="Install SDK" language="bash">
                  {codeExamples.sdkInstallation}
                </CodeBlock>
              </Card>

              <Card className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Basic Usage</h2>
                <p className="text-muted-foreground mb-4">
                  Get started with publishing your first agent using the SDK:
                </p>
                <CodeBlock title="Basic Agent Publishing" language="python">
                  {codeExamples.sdkBasicUsage}
                </CodeBlock>
              </Card>

              <Card className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Advanced Configuration</h2>
                <p className="text-muted-foreground mb-4">
                  Publish production-ready agents with advanced configurations:
                </p>
                <CodeBlock title="Advanced Agent Configuration" language="python">
                  {codeExamples.sdkAdvanced}
                </CodeBlock>
              </Card>

              <Card className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Searching & Discovery</h2>
                <p className="text-muted-foreground mb-4">
                  Search and discover agents in the registry programmatically:
                </p>
                <CodeBlock title="Agent Search & Discovery" language="python">
                  {codeExamples.sdkQuery}
                </CodeBlock>
              </Card>

              <Card className="p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Complete Examples</h2>
                <p className="text-muted-foreground mb-4">
                  Real-world examples from the A2A Registry GitHub repository:
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Basic Usage Example</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Complete example showing authentication, publishing, searching, and cleanup:
                    </p>
                    <CodeBlock title="basic_usage.py" language="python">
                      {codeExamples.githubBasicUsage}
                    </CodeBlock>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Advanced Agent Example</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      Sophisticated agent with TEE security, multiple auth schemes, and complex capabilities:
                    </p>
                    <CodeBlock title="advanced_agent.py" language="python">
                      {codeExamples.githubAdvancedAgent}
                    </CodeBlock>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Publisher Example</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      High-level AgentPublisher class with configuration files and validation:
                    </p>
                    <CodeBlock title="publisher_example.py" language="python">
                      {codeExamples.githubPublisherExample}
                    </CodeBlock>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-muted/50">
                <h2 className="text-2xl font-bold text-foreground mb-4">Key Features</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">Publishing</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Programmatic agent publishing</li>
                      <li>• Batch publishing support</li>
                      <li>• Validation and error handling</li>
                      <li>• Retry mechanisms</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">Discovery</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Semantic search</li>
                      <li>• Tag-based filtering</li>
                      <li>• Framework filtering</li>
                      <li>• Agent downloading</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">Management</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Agent lifecycle management</li>
                      <li>• Version control</li>
                      <li>• Metadata updates</li>
                      <li>• Access control</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">Integration</h3>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• CI/CD pipeline integration</li>
                      <li>• Custom registry support</li>
                      <li>• Authentication handling</li>
                      <li>• Comprehensive logging</li>
                    </ul>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        );

      case "examples":
        return (
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-foreground mb-4">Examples</h1>
              <p className="text-lg text-muted-foreground mb-6">
                Official examples from the A2A Registry GitHub repository. These examples are maintained by the A2A Registry team and demonstrate real-world usage patterns.
              </p>
            </div>

            <div className="space-y-6">
              <Card className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Official Examples Repository</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  The A2A Registry team maintains a comprehensive collection of Python examples in the official GitHub repository. These examples are tested, up-to-date, and demonstrate best practices for using the A2A Registry SDK.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 mb-4">
                  <Button variant="outline" asChild className="w-full sm:w-auto">
                    <a 
                      href="https://github.com/A2AReg/a2a-registry/tree/main/examples/python" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2 px-4"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm sm:text-base">View Examples on GitHub</span>
                    </a>
                  </Button>
                </div>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  All examples are available as standalone Python files that you can download and run directly.
                </p>
              </Card>

              <Card className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Available Examples</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  The official examples repository includes:
                </p>
                <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground mb-4">
                  <li>Basic agent registration and publishing</li>
                  <li>Advanced agent configuration with capabilities</li>
                  <li>Agent management workflows</li>
                  <li>Registry query and discovery patterns</li>
                  <li>Authentication and security examples</li>
                  <li>Error handling and troubleshooting</li>
                </ul>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Each example includes detailed comments and follows the official A2A Registry SDK patterns and best practices.
                </p>
              </Card>

              <Card className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Getting Started</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  To use the official examples:
                </p>
                <ol className="list-decimal list-inside space-y-1 sm:space-y-2 text-xs sm:text-sm text-muted-foreground mb-4">
                  <li>Clone the A2A Registry repository</li>
                  <li>Navigate to the examples/python directory</li>
                  <li>Install the required dependencies</li>
                  <li>Run the examples to see them in action</li>
                </ol>
                <CodeBlock title="Clone Repository" language="bash">
{`git clone https://github.com/A2AReg/a2a-registry.git
cd a2a-registry/examples/python
pip install -r requirements.txt`}
                </CodeBlock>
              </Card>

              <Card className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Contributing</h2>
                <p className="text-sm sm:text-base text-muted-foreground mb-4">
                  The examples are maintained by the A2A Registry team. If you find issues or have suggestions for new examples, please contribute to the official repository.
                </p>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
                  <Button variant="outline" asChild className="w-full sm:w-auto">
                    <a 
                      href="https://github.com/A2AReg/a2a-registry" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-2 px-4"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span className="text-sm sm:text-base">Contribute to Repository</span>
                    </a>
                  </Button>
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
                Complete Python SDK API documentation for the A2A Registry.
              </p>
            </div>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">A2AClient</h2>
              <p className="text-muted-foreground mb-4">
                The main client class for interacting with the A2A Registry.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Constructor</h3>
                  <CodeBlock title="A2AClient" language="python">
{`A2AClient(api_key: str, header_name: str = 'X-API-Key')`}
                  </CodeBlock>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Agent Management</h3>
                  <div className="space-y-3">
                    <div>
                      <code className="text-sm font-mono">publish_agent(agent_data)</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">Publish a new agent to the registry</p>
                  </div>
                    <div>
                      <code className="text-sm font-mono">get_agent(agent_id)</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">Get details of a specific agent</p>
                    </div>
                    <div>
                      <code className="text-sm font-mono">list_agents(page=1, limit=20, public_only=True)</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">List all published agents</p>
                    </div>
                    <div>
                      <code className="text-sm font-mono">update_agent(agent_id, agent_data)</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">Update an existing agent</p>
                    </div>
                    <div>
                      <code className="text-sm font-mono">delete_agent(agent_id)</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">Remove an agent from the registry</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Search & Discovery</h3>
                  <div className="space-y-3">
                    <div>
                      <code className="text-sm font-mono">search_agents(query=None, filters=None, semantic=False, page=1, limit=20)</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">Search for agents with optional filters</p>
                  </div>
                    <div>
                      <code className="text-sm font-mono">get_agent_card(agent_id)</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">Get the agent card for a specific agent</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Authentication & Keys</h3>
                  <div className="space-y-3">
                    <div>
                      <code className="text-sm font-mono">set_api_key(api_key, header_name='X-API-Key')</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">Set the API key for authentication</p>
                  </div>
                    <div>
                      <code className="text-sm font-mono">generate_api_key(scopes, expires_days=None)</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">Generate a new API key</p>
                    </div>
                    <div>
                      <code className="text-sm font-mono">list_api_keys(active_only=True)</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">List all API keys</p>
                    </div>
                    <div>
                      <code className="text-sm font-mono">revoke_api_key(key_id)</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">Revoke an API key</p>
                    </div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">System & Health</h3>
                  <div className="space-y-3">
                    <div>
                      <code className="text-sm font-mono">get_health()</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">Check registry health status</p>
                    </div>
                    <div>
                      <code className="text-sm font-mono">get_stats()</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">Get client statistics</p>
                    </div>
                    <div>
                      <code className="text-sm font-mono">get_registry_stats()</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">Get registry statistics</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">AgentBuilder</h2>
              <p className="text-muted-foreground mb-4">
                Builder class for creating Agent objects with a fluent API.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Constructor</h3>
                  <CodeBlock title="AgentBuilder" language="python">
{`AgentBuilder(name: str, description: str, version: str, provider: str)`}
              </CodeBlock>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Configuration Methods</h3>
                  <div className="space-y-3">
                    <div>
                      <code className="text-sm font-mono">with_location(url, location_type='api_endpoint')</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">Set the agent's location URL</p>
                    </div>
                    <div>
                      <code className="text-sm font-mono">with_capabilities(capabilities)</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">Set agent capabilities</p>
                    </div>
                    <div>
                      <code className="text-sm font-mono">with_auth_schemes(auth_schemes)</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">Set authentication schemes</p>
                    </div>
                    <div>
                      <code className="text-sm font-mono">with_tags(tags)</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">Set agent tags</p>
                    </div>
                    <div>
                      <code className="text-sm font-mono">public(is_public=True)</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">Set agent visibility</p>
                    </div>
                    <div>
                      <code className="text-sm font-mono">active(is_active=True)</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">Set agent active status</p>
                    </div>
                    <div>
                      <code className="text-sm font-mono">build()</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">Build and return the Agent object</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">AgentCapabilitiesBuilder</h2>
              <p className="text-muted-foreground mb-4">
                Builder class for creating AgentCapabilities objects.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Configuration Methods</h3>
                  <div className="space-y-3">
                    <div>
                      <code className="text-sm font-mono">protocols(protocols)</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">Set supported protocols (e.g., ['http', 'websocket'])</p>
                    </div>
                    <div>
                      <code className="text-sm font-mono">supported_formats(formats)</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">Set supported formats (e.g., ['json', 'text'])</p>
                    </div>
                    <div>
                      <code className="text-sm font-mono">max_concurrent_requests(count)</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">Set maximum concurrent requests</p>
                    </div>
                    <div>
                      <code className="text-sm font-mono">max_request_size(size)</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">Set maximum request size</p>
                    </div>
                    <div>
                      <code className="text-sm font-mono">a2a_version(version)</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">Set A2A protocol version</p>
                    </div>
                    <div>
                      <code className="text-sm font-mono">build()</code>
                      <p className="text-xs sm:text-sm text-muted-foreground">Build and return the AgentCapabilities object</p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Agent Model</h2>
              <p className="text-muted-foreground mb-4">
                The Agent class represents an agent in the registry.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Required Fields</h3>
                  <div className="space-y-2">
                    <div><code className="text-sm font-mono">name: str</code> - Agent name</div>
                    <div><code className="text-sm font-mono">description: str</code> - Agent description</div>
                    <div><code className="text-sm font-mono">version: str</code> - Agent version</div>
                    <div><code className="text-sm font-mono">provider: str</code> - Agent provider</div>
                  </div>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Optional Fields</h3>
                  <div className="space-y-2">
                    <div><code className="text-sm font-mono">id: Optional[str]</code> - Agent ID</div>
                    <div><code className="text-sm font-mono">tags: List[str]</code> - Agent tags</div>
                    <div><code className="text-sm font-mono">is_public: bool</code> - Public visibility</div>
                    <div><code className="text-sm font-mono">is_active: bool</code> - Active status</div>
                    <div><code className="text-sm font-mono">location_url: Optional[str]</code> - Agent URL</div>
                    <div><code className="text-sm font-mono">location_type: Optional[str]</code> - Location type</div>
                    <div><code className="text-sm font-mono">capabilities: Optional[AgentCapabilities]</code> - Agent capabilities</div>
                    <div><code className="text-sm font-mono">auth_schemes: List[AuthScheme]</code> - Authentication schemes</div>
                    <div><code className="text-sm font-mono">agent_card: Optional[AgentCard]</code> - Agent card</div>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4">Error Classes</h2>
              <p className="text-muted-foreground mb-4">
                Exception classes for error handling.
              </p>
              
              <div className="space-y-3">
                <div>
                  <code className="text-sm font-mono">A2AError</code>
                  <p className="text-sm text-muted-foreground">Base exception class</p>
                </div>
                <div>
                  <code className="text-sm font-mono">AuthenticationError</code>
                  <p className="text-sm text-muted-foreground">Authentication-related errors</p>
                </div>
                <div>
                  <code className="text-sm font-mono">ValidationError</code>
                  <p className="text-sm text-muted-foreground">Data validation errors</p>
                </div>
                <div>
                  <code className="text-sm font-mono">NotFoundError</code>
                  <p className="text-sm text-muted-foreground">Resource not found errors</p>
                </div>
              </div>
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
                      <code className="text-sm text-destructive">Error: Agent provider is required</code>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      <strong>Solution:</strong> Ensure all required fields are present in your Agent and AgentCard objects.
                    </p>
                    <CodeBlock title="Check Agent Configuration" language="python">
{`# Check agent configuration before publishing
try:
    response = client.publish_agent(agent)
    if response.success:
        print("Agent published successfully!")
    else:
        print(f"Publishing failed: {response.error}")
except Exception as e:
    print(f"Configuration error: {e}")`}
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
                    <h3 className="text-lg font-semibold text-foreground mb-2">Import Errors</h3>
                    <div className="bg-destructive/10 border border-destructive/20 rounded-md p-3 mb-2">
                      <code className="text-sm text-destructive">ImportError: cannot import name 'A2ARegistry' from 'a2a_reg_sdk'</code>
                    </div>
                    <p className="text-muted-foreground mb-2">
                      <strong>Solution:</strong> Use the correct class names. The SDK uses A2AClient, not A2ARegistry.
                    </p>
                    <CodeBlock title="Correct Import" language="python">
{`# Correct import
from a2a_reg_sdk import A2AClient, Agent

# Initialize client
client = A2AClient(api_key='your_api_key')`}
                    </CodeBlock>
                  </div>
                </div>
              </Card>

              <Card className="p-4 sm:p-6">
                <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-3 sm:mb-4">Getting Help</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground">Community Support</h3>
                    <Button 
                      variant="outline" 
                      className="w-full justify-center sm:justify-start hover-elevate py-3 sm:py-2"
                      onClick={() => window.open('https://discord.gg/rpe5nMSumw', '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      <span className="text-sm sm:text-base">Join Discord</span>
                    </Button>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-base sm:text-lg font-semibold text-foreground">Bug Reports</h3>
                    <Button 
                      variant="outline" 
                      className="w-full justify-center sm:justify-start hover-elevate py-3 sm:py-2"
                      onClick={() => window.open('https://github.com/A2AReg/a2a-registry/issues', '_blank')}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      <span className="text-sm sm:text-base">GitHub Issues</span>
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
      <Header />
      
      <div className="container max-w-7xl mx-auto px-3 sm:px-4 lg:px-8 py-4 sm:py-6 lg:py-8">
        {/* Mobile: Horizontal scrolling nav - moved to top */}
        <div className="lg:hidden mb-4 sm:mb-6">
          <div className="bg-card border border-border rounded-lg p-2 relative">
            {/* Left scroll indicator */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-r from-card to-transparent w-6 h-full flex items-center justify-start pointer-events-none">
              <div className="w-2 h-2 border-l border-b border-muted-foreground/30 rotate-45 transform"></div>
            </div>
            
            {/* Right scroll indicator */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gradient-to-l from-card to-transparent w-6 h-full flex items-center justify-end pointer-events-none">
              <div className="w-2 h-2 border-r border-b border-muted-foreground/30 -rotate-45 transform"></div>
            </div>
            
            <div className="overflow-x-auto scrollbar-hide">
              <div className="flex space-x-1 sm:space-x-2 min-w-max">
                {navigationItems.map((item) => (
                  <Button
                    key={item.id}
                    variant={activeSection === item.id ? "secondary" : "ghost"}
                    size="sm"
                    className="flex-shrink-0 hover-elevate text-xs sm:text-sm px-3 sm:px-4 py-2 whitespace-nowrap min-h-[2.5rem]"
                    onClick={() => setActiveSection(item.id)}
                    data-testid={`nav-mobile-${item.id}`}
                  >
                    <item.icon className="mr-1 h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
                    <span className="hidden sm:inline">{item.label}</span>
                    <span className="sm:hidden">{item.label.split(' ')[0]}</span>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            {/* Desktop: Sticky sidebar */}
            <Card className="hidden lg:block sticky top-24">
              <div className="p-4 lg:p-6">
                <div className="flex items-center gap-2 mb-4 lg:mb-6">
                  <div className="text-primary p-2 bg-primary/10 rounded-md">
                    <BookOpen className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg lg:text-xl font-bold text-foreground">Documentation</h2>
                </div>
                
                <ScrollArea className="h-[calc(100vh-16rem)]">
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
          <div className="lg:col-span-3 order-1 lg:order-2">
            <Card className="min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh]">
              <div className="p-3 sm:p-4 lg:p-6 xl:p-8">
                {renderContent()}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}