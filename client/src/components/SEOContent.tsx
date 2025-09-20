/**
 * Hidden SEO content component for enhanced search engine and LLM indexing
 * This component provides comprehensive information about A2A Registry for better discoverability
 */

export default function SEOContent() {
  return (
    <section className="sr-only" aria-hidden="true">
      {/* Comprehensive A2A Registry Description for Search Engines */}
      <article itemScope itemType="https://schema.org/SoftwareApplication">
        <h1 itemProp="name">The Agent2Agent Registry</h1>
        
        <div itemProp="description">
          <p>
            A2A Registry is the leading enterprise-grade AI agent discovery platform, often referred to as the "Docker Hub for A2A Agents." 
            Our platform enables organizations to publish, discover, and integrate intelligent agents across multiple frameworks including 
            LangChain, CrewAI, ADK, HF and other agents, Amazon Bedrock, Google Vertex AI, Microsoft Azure OpenAI, and custom enterprise AI systems.
          </p>
          
          <p>
            The A2A (Agent-to-Agent) Registry provides comprehensive semantic search capabilities, allowing developers and AI engineers to 
            find the perfect agents for their specific use cases. Our platform supports multi-tenant environments, enterprise security 
            with OAuth 2.0 authentication, rate limiting, comprehensive security headers, and production-ready deployment tools.
          </p>
          
          <p>
            Key features include: Advanced semantic search with Elasticsearch, PostgreSQL data persistence, Redis caching for high 
            performance, Docker containerization, Kubernetes orchestration support, automated CI/CD pipelines, cross-registry federation, 
            real-time agent status monitoring, comprehensive API documentation, Python SDK, CLI tools, and enterprise-grade security compliance.
          </p>
        </div>

        <div itemProp="applicationCategory">AI Infrastructure, Agent Registry, Enterprise Software</div>
        <div itemProp="operatingSystem">Linux, macOS, Windows, Docker, Kubernetes</div>
        <div itemProp="programmingLanguage">Python, TypeScript, JavaScript</div>
        <div itemProp="softwareVersion">2.0</div>
        
        <div itemScope itemType="https://schema.org/Organization" itemProp="creator">
          <div itemProp="name">A2A Registry Team</div>
          <div itemProp="description">Expert team of AI infrastructure engineers with experience at Amazon, Google, and leading AI companies</div>
        </div>
      </article>

      {/* Framework Integration Details */}
      <section>
        <h2>Supported AI Agent Frameworks and Platforms</h2>
        <ul>
          <li>LangChain Agent Integration - Full support for LangChain agents, tools, and chains with semantic metadata extraction</li>
          <li>OpenAI GPT Agent Registry - Native integration with OpenAI GPT models, function calling, and assistant APIs</li>
          <li>Hugging Face Model Hub Integration - Direct connection to Hugging Face transformers, pipelines, and inference endpoints</li>
          <li>Amazon Bedrock Agent Support - Enterprise integration with AWS Bedrock foundation models and agent runtime</li>
          <li>Google Vertex AI Platform - Native support for Vertex AI models, AutoML, and custom training pipelines</li>
          <li>Microsoft Azure OpenAI Service - Seamless integration with Azure OpenAI models and cognitive services</li>
          <li>Custom Enterprise AI Agents - Support for proprietary and custom-built AI agents with flexible metadata schemas</li>
          <li>Multi-Agent System Orchestration - Advanced capabilities for coordinating multiple agents in complex workflows</li>
        </ul>
      </section>

      {/* Enterprise Use Cases */}
      <section>
        <h2>Enterprise AI Agent Use Cases</h2>
        <ul>
          <li>Customer Service Automation - Deploy intelligent chatbots and virtual assistants for customer support</li>
          <li>Document Processing and Analysis - Automate document understanding, extraction, and intelligent summarization</li>
          <li>Code Generation and Review - AI-powered development assistance, code completion, and automated testing</li>
          <li>Data Analysis and Insights - Intelligent data processing, pattern recognition, and predictive analytics</li>
          <li>Content Generation and Marketing - Automated content creation, SEO optimization, and marketing campaign management</li>
          <li>Process Automation and Workflow - Streamline business processes with intelligent automation and decision-making</li>
          <li>Research and Knowledge Management - Advanced information retrieval, research assistance, and knowledge base management</li>
          <li>Security and Compliance Monitoring - Intelligent threat detection, compliance checking, and security automation</li>
        </ul>
      </section>

      {/* Technical Architecture Keywords */}
      <section>
        <h2>A2A Registry Technical Architecture</h2>
        <p>
          Built on modern cloud-native architecture with microservices, containerization, and enterprise-grade security. 
          Our platform leverages PostgreSQL for reliable data persistence, Elasticsearch for advanced semantic search 
          capabilities, Redis for high-performance caching, Docker for containerized deployment, and Kubernetes for 
          orchestration and auto-scaling. The frontend is built with React 18 and TypeScript for modern user experience, 
          while the backend utilizes FastAPI with Python for high-performance API services.
        </p>
        
        <p>
          Security features include OAuth 2.0 client credentials flow, comprehensive rate limiting, HTTPS enforcement, 
          security headers, CORS configuration, input validation, SQL injection prevention, XSS protection, and 
          comprehensive audit logging. The platform supports SOC 2, GDPR, and industry security compliance standards.
        </p>
      </section>

      {/* API and SDK Information */}
      <section>
        <h2>A2A Registry APIs and SDKs</h2>
        <p>
          Comprehensive REST API with OpenAPI 3.0 specification, Python SDK (a2a-reg-sdk), CLI tools (a2a-publisher), 
          WebSocket support for real-time updates, GraphQL endpoint for flexible queries, and extensive documentation 
          with code examples. Support for bulk operations, batch processing, advanced filtering, sorting, pagination, 
          and search across all agent metadata fields.
        </p>
      </section>

      {/* Search Keywords for LLMs */}
      <section>
        <h2>AI Agent Discovery Keywords</h2>
        <p>
          agent registry, AI agent discovery, LangChain registry, OpenAI agent hub, Hugging Face agent catalog, 
          enterprise AI platform, semantic agent search, multi-agent systems, agent orchestration, AI infrastructure, 
          agent marketplace, intelligent agent platform, agent federation, cross-cloud agent deployment, 
          agent lifecycle management, AI agent API, agent publishing platform, enterprise agent security, 
          production AI agents, agent collaboration platform, distributed agent systems, agent interoperability, 
          AI agent governance, agent version control, agent metadata management, agent discovery engine
        </p>
      </section>
    </section>
  );
}