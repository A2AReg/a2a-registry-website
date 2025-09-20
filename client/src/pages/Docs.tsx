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
  { id: "api-reference", label: "API Reference", icon: Code },
  { id: "examples", label: "Examples", icon: FileText },
  { id: "security", label: "Security", icon: Shield },
  { id: "troubleshooting", label: "Troubleshooting", icon: Zap }
];

const codeExamples = {
  installation: `pip install a2a-publisher`,
  basicPublish: `a2a-publisher publish ./a2a-card.json`,
  sdkInstallation: `pip install a2a-reg-sdk`,
  sdkBasicUsage: `from a2a_reg_sdk import A2ARegistry, AgentCard

# Initialize the registry client
registry = A2ARegistry(
    api_key="your-api-key-here",
    base_url="https://registry.a2areg.com"
)

# Create an agent card
agent = AgentCard(
    name="my-intelligent-agent",
    version="1.0.0",
    description="A powerful AI agent for text processing",
    author="Your Name <you@example.com>",
    tags=["nlp", "text-processing", "ai"],
    framework="langchain",
    runtime="python",
    entry_point="src/main.py"
)

# Publish the agent
try:
    result = registry.publish(agent)
    print(f"Agent published successfully: {result.agent_id}")
except Exception as e:
    print(f"Publication failed: {e}")`,
  sdkAdvanced: `from a2a_reg_sdk import A2ARegistry, AgentCard, Dependency

# Advanced agent configuration
agent = AgentCard(
    name="advanced-nlp-agent",
    version="2.1.0",
    description="Advanced NLP agent with multi-model support",
    author="AI Team <ai-team@company.com>",
    tags=["nlp", "transformers", "enterprise", "production"],
    framework="transformers",
    runtime="python",
    entry_point="src/agent.py",
    dependencies=[
        Dependency("transformers", "^4.20.0"),
        Dependency("torch", "^2.0.0"),
        Dependency("numpy", "^1.21.0")
    ],
    capabilities=[
        "text-generation",
        "sentiment-analysis", 
        "named-entity-recognition",
        "text-classification"
    ],
    resources={
        "memory": "2Gi",
        "cpu": "1000m",
        "gpu": "1"
    },
    environment_variables={
        "MODEL_PATH": "/models/bert-base-uncased",
        "MAX_SEQUENCE_LENGTH": "512"
    }
)

# Initialize registry with custom configuration
registry = A2ARegistry(
    api_key="your-api-key",
    base_url="https://registry.a2areg.com",
    timeout=30,
    retry_attempts=3
)

# Publish with metadata
result = registry.publish(
    agent,
    private=False,
    license="MIT",
    documentation_url="https://docs.example.com/agent"
)

print(f"Published agent: {result.agent_id}")
print(f"Registry URL: {result.registry_url}")`,
  sdkQuery: `from a2a_reg_sdk import A2ARegistry

registry = A2ARegistry(api_key="your-api-key")

# Search for agents
agents = registry.search(
    query="text processing",
    tags=["nlp", "ai"],
    framework="langchain",
    limit=10
)

for agent in agents:
    print(f"Agent: {agent.name} v{agent.version}")
    print(f"Description: {agent.description}")
    print(f"Tags: {', '.join(agent.tags)}")
    print("---")

# Get specific agent details
agent_details = registry.get_agent("agent-id-here")
print(f"Agent capabilities: {agent_details.capabilities}")

# Download agent
registry.download_agent("agent-id-here", "./downloaded-agent/")`,
  githubBasicUsage: `#!/usr/bin/env python3
"""
Basic A2A SDK Usage Example
This example demonstrates basic usage of the A2A Python SDK for:
- Connecting to the registry
- Publishing an agent
- Searching for agents
- Updating and deleting agents
"""
import os
from a2a_reg_sdk import A2AClient, AgentBuilder, AgentCapabilities, AuthScheme

def main():
    # Initialize the client
    client = A2AClient(
        registry_url="http://localhost:8000",
        client_id=os.getenv("A2A_CLIENT_ID"),
        client_secret=os.getenv("A2A_CLIENT_SECRET"),
    )

    # Authenticate (required for publishing)
    try:
        client.authenticate()
        print("✓ Authentication successful")
    except Exception as e:
        print(f"✗ Authentication failed: {e}")
        return

    # Create a simple agent
    capabilities = AgentCapabilities(
        protocols=["http"], 
        supported_formats=["json"], 
        max_concurrent_requests=5
    )

    auth_scheme = AuthScheme(
        type="api_key",
        description="Simple API key authentication",
        required=True,
        header_name="X-API-Key",
    )

    agent = (
        AgentBuilder("my-test-agent", "A test agent for demonstration", "1.0.0", "my-org")
        .with_tags(["test", "demo", "ai"])
        .with_location("https://my-org.com/api/agent")
        .with_capabilities(capabilities)
        .with_auth_schemes([auth_scheme])
        .public(True)
        .active(True)
        .build()
    )

    try:
        # Publish the agent
        published_agent = client.publish_agent(agent)
        print(f"✓ Agent published successfully with ID: {published_agent.id}")

        # List public agents
        agents_response = client.list_agents(page=1, limit=10)
        print(f"✓ Found {len(agents_response.get('agents', []))} public agents")

        # Search for agents
        search_results = client.search_agents(
            query="test", filters={"tags": ["demo"]}, page=1, limit=5
        )
        print(f"✓ Search found {len(search_results.get('agents', []))} matching agents")

        # Get agent details
        agent_details = client.get_agent(published_agent.id)
        print(f"✓ Retrieved agent details: {agent_details.name}")

        # Update the agent
        agent_details.description = "Updated description for my test agent"
        updated_agent = client.update_agent(published_agent.id, agent_details)
        print(f"✓ Agent updated successfully")

        # Clean up - delete the agent
        client.delete_agent(published_agent.id)
        print(f"✓ Agent deleted successfully")

    except Exception as e:
        print(f"✗ Operation failed: {e}")
    finally:
        # Close the client
        client.close()

if __name__ == "__main__":
    main()`,
  githubAdvancedAgent: `#!/usr/bin/env python3
"""
Advanced A2A Agent Example
This example demonstrates creating a sophisticated agent with:
- Complex capabilities and skills
- Multiple authentication schemes  
- TEE (Trusted Execution Environment) details
- Comprehensive agent card metadata
"""
import os
from a2a_reg_sdk import (
    A2AClient,
    AgentBuilder,
    AgentCapabilities,
    AuthScheme,
    AgentTeeDetails,
    AgentSkills,
    AgentCard,
)

def create_advanced_agent():
    """Create an advanced agent with comprehensive configuration."""
    
    # Define sophisticated capabilities
    capabilities = AgentCapabilities(
        protocols=["http", "websocket", "grpc"],
        supported_formats=["json", "xml", "protobuf", "msgpack"],
        max_request_size=10485760,  # 10MB
        max_concurrent_requests=50,
        a2a_version="1.0",
    )

    # Define multiple authentication schemes
    auth_schemes = [
        AuthScheme(
            type="api_key",
            description="API key for basic authentication",
            required=True,
            header_name="X-API-Key",
        ),
        AuthScheme(
            type="oauth2",
            description="OAuth 2.0 for advanced authentication", 
            required=False,
        ),
        AuthScheme(
            type="jwt",
            description="JWT tokens for stateless authentication",
            required=False,
            header_name="Authorization",
        ),
    ]

    # Define TEE details for secure execution
    tee_details = AgentTeeDetails(
        enabled=True,
        provider="Intel SGX",
        attestation="eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9...",
    )

    # Define agent skills with detailed schemas
    skills = AgentSkills(
        input_schema={
            "type": "object",
            "properties": {
                "query": {
                    "type": "string",
                    "description": "Natural language query or command",
                },
                "context": {
                    "type": "object", 
                    "properties": {
                        "user_id": {"type": "string"},
                        "session_id": {"type": "string"},
                        "preferences": {"type": "object"},
                    },
                },
                "options": {
                    "type": "object",
                    "properties": {
                        "max_tokens": {"type": "integer", "minimum": 1, "maximum": 4096},
                        "temperature": {"type": "number", "minimum": 0.0, "maximum": 2.0},
                        "top_p": {"type": "number", "minimum": 0.0, "maximum": 1.0},
                    },
                },
            },
            "required": ["query"],
        },
        output_schema={
            "type": "object",
            "properties": {
                "response": {"type": "string", "description": "Generated response"},
                "confidence": {"type": "number", "minimum": 0.0, "maximum": 1.0},
                "metadata": {
                    "type": "object",
                    "properties": {
                        "tokens_used": {"type": "integer"},
                        "processing_time_ms": {"type": "integer"},
                        "model_version": {"type": "string"},
                    },
                },
                "alternatives": {
                    "type": "array",
                    "items": {"type": "string"},
                    "description": "Alternative responses",
                },
            },
            "required": ["response", "confidence"],
        },
        examples=[
            "Query: 'Explain quantum computing' -> Response: 'Quantum computing is...', Confidence: 0.92",
            "Query: 'Translate hello to French' -> Response: 'Bonjour', Confidence: 0.98", 
            "Query: 'Summarize this document' -> Response: 'The document discusses...', Confidence: 0.85",
        ],
    )

    # Build the complete agent
    agent = (
        AgentBuilder(
            name="advanced-ai-assistant",
            description="An advanced AI assistant with multi-modal capabilities, secure TEE execution, and comprehensive API support",
            version="2.1.0", 
            provider="advanced-ai-corp",
        )
        .with_tags([
            "ai", "assistant", "nlp", "multimodal", "secure", 
            "enterprise", "conversation", "completion", "embedding", "tee",
        ])
        .with_location("https://api.advanced-ai.com/v2/agent", "api_endpoint")
        .with_capabilities(capabilities)
        .with_auth_schemes(auth_schemes)
        .with_tee_details(tee_details)
        .with_skills(skills)
        .public(True)
        .active(True)
        .build()
    )

    return agent

def main():
    # Initialize client
    client = A2AClient(
        registry_url="http://localhost:8000",
        client_id=os.getenv("A2A_CLIENT_ID"),
        client_secret=os.getenv("A2A_CLIENT_SECRET"),
    )

    try:
        # Authenticate
        client.authenticate()
        print("✓ Authentication successful")

        # Create advanced agent
        advanced_agent = create_advanced_agent()
        print(f"✓ Created advanced agent: {advanced_agent.name}")
        print(f"  - Tags: {', '.join(advanced_agent.tags)}")
        print(f"  - Protocols: {', '.join(advanced_agent.capabilities.protocols)}")
        print(f"  - Auth schemes: {len(advanced_agent.auth_schemes)}")
        print(f"  - TEE enabled: {advanced_agent.tee_details.enabled}")

        # Publish the agent
        published_agent = client.publish_agent(advanced_agent)
        print(f"✓ Advanced agent published with ID: {published_agent.id}")

        # Search for advanced features
        search_results = client.search_agents(
            query="advanced AI TEE secure",
            filters={
                "tags": ["enterprise", "secure"],
                "capabilities.protocols": ["grpc"],
            },
            semantic=True,
        )
        print(f"✓ Semantic search found {len(search_results.get('agents', []))} matching agents")

        # Clean up
        client.delete_agent(published_agent.id)
        print("✓ Advanced agent deleted")

    except Exception as e:
        print(f"✗ Operation failed: {e}")
        import traceback
        traceback.print_exc()
    finally:
        client.close()

if __name__ == "__main__":
    main()`,
  githubPublisherExample: `#!/usr/bin/env python3
"""
A2A Agent Publisher Example
This example demonstrates using the high-level AgentPublisher class for:
- Creating sample agent configurations
- Loading agents from configuration files  
- Publishing and managing agents with validation
"""
import os
from pathlib import Path
from a2a_reg_sdk import A2AClient, AgentPublisher

def main():
    # Create client and publisher
    client = A2AClient(
        registry_url="http://localhost:8000",
        client_id=os.getenv("A2A_CLIENT_ID"),
        client_secret=os.getenv("A2A_CLIENT_SECRET"),
    )

    try:
        client.authenticate()
        print("✓ Authentication successful")
    except Exception as e:
        print(f"✗ Authentication failed: {e}")
        return

    publisher = AgentPublisher(client)

    # Create a sample agent configuration
    sample_agent = publisher.create_sample_agent(
        name="sample-chatbot",
        description="A sample AI chatbot agent",
        version="1.2.0",
        provider="demo-corp", 
        api_url="https://demo-corp.com/api",
    )
    print(f"✓ Created sample agent: {sample_agent.name}")

    # Save the configuration to a file
    config_path = Path("sample_agent.yaml")
    publisher.save_agent_config(sample_agent, config_path, format="yaml")
    print(f"✓ Saved agent configuration to {config_path}")

    try:
        # Validate the agent
        validation_errors = publisher.validate_agent(sample_agent)
        if validation_errors:
            print(f"✗ Validation errors: {validation_errors}")
            return
        else:
            print("✓ Agent configuration is valid")

        # Publish the agent
        published_agent = publisher.publish(sample_agent, validate=True)
        print(f"✓ Agent published with ID: {published_agent.id}")

        # Load and publish from file
        loaded_agent = publisher.load_agent_from_file(config_path)
        loaded_agent.name = "sample-chatbot-from-file"  # Change name to avoid conflict
        published_from_file = publisher.publish(loaded_agent, validate=True)
        print(f"✓ Agent from file published with ID: {published_from_file.id}")

        # Update the agent
        published_agent.description = "Updated sample AI chatbot with new features"
        updated_agent = publisher.update(
            published_agent.id, published_agent, validate=True
        )
        print(f"✓ Agent updated successfully")

        # Clean up
        client.delete_agent(published_agent.id)
        client.delete_agent(published_from_file.id)
        print("✓ Cleanup completed")

    except Exception as e:
        print(f"✗ Operation failed: {e}")
    finally:
        # Clean up the config file
        if config_path.exists():
            config_path.unlink()
        client.close()

if __name__ == "__main__":
    main()`,
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
      <Header />
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            {/* Mobile: Horizontal scrolling nav */}
            <div className="lg:hidden mb-6">
              <ScrollArea className="w-full whitespace-nowrap">
                <div className="flex space-x-2 p-1">
                  {navigationItems.map((item) => (
                    <Button
                      key={item.id}
                      variant={activeSection === item.id ? "secondary" : "ghost"}
                      size="sm"
                      className="flex-shrink-0 hover-elevate"
                      onClick={() => setActiveSection(item.id)}
                      data-testid={`nav-mobile-${item.id}`}
                    >
                      <item.icon className="mr-1 h-3 w-3" />
                      <span className="text-xs">{item.label}</span>
                    </Button>
                  ))}
                </div>
              </ScrollArea>
            </div>
            
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
            <Card className="min-h-[80vh]">
              <div className="p-4 sm:p-6 lg:p-8">
                {renderContent()}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}