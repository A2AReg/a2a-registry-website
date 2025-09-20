# A2A Registry Landing Page Design Guidelines

## Design Approach
**Reference-Based Approach**: Drawing inspiration from enterprise developer tools like GitHub, Stripe, and Linear for professional, technical aesthetics while maintaining accessibility and trust.

## Core Design Elements

### A. Color Palette
- **Primary Brand**: 220 85% 25% (deep blue) - professional, trustworthy
- **Secondary**: 220 20% 95% (light blue-gray) for backgrounds
- **Accent**: 142 76% 36% (emerald green) for success states, CTAs
- **Text**: 220 15% 20% (dark blue-gray) for primary text
- **Background**: Pure white with subtle 220 20% 98% sections

### B. Typography
- **Primary Font**: Inter (Google Fonts) - modern, readable
- **Code Font**: JetBrains Mono for API examples
- **Hierarchy**: 
  - Hero: text-5xl font-bold
  - Sections: text-3xl font-semibold
  - Body: text-lg leading-relaxed

### C. Layout System
**Tailwind Spacing**: Consistent use of 4, 8, 12, 16, and 24 units
- Containers: max-w-7xl with px-4 sm:px-6 lg:px-8
- Vertical spacing: space-y-8 for sections, space-y-4 for content blocks
- Grid layouts: grid-cols-1 md:grid-cols-2 lg:grid-cols-3

### D. Component Library

**Hero Section**:
- Full viewport height with centered content
- Large hero heading with gradient text effect
- Subtitle explaining enterprise AI agent discovery
- Primary CTA button (solid) and secondary CTA (outline with backdrop-blur)
- Background: Subtle gradient overlay with geometric patterns

**Feature Cards**:
- White backgrounds with subtle border and hover shadow
- Icons from Heroicons (outline style)
- Consistent padding: p-6
- Rounded corners: rounded-lg

**Code Examples**:
- Dark background containers with syntax highlighting
- Copy-to-clipboard functionality indicators
- Monospace font with proper line spacing

**Navigation**:
- Clean header with logo, navigation links, and GitHub/Discord links
- Sticky positioning with backdrop blur when scrolling

## Visual Treatment

**Enterprise Professional Aesthetic**:
- Clean, minimal design with ample whitespace
- Professional color scheme avoiding vibrant colors except for strategic CTAs
- Technical credibility through code examples and architecture diagrams
- Trust indicators: security badges, enterprise features

**Background Treatments**:
- Hero: Subtle geometric patterns or grid overlays in light gray
- Sections: Alternating white and very light blue-gray (220 20% 98%)
- No distracting gradients except subtle hero overlay

## Content Structure (Maximum 4 Sections)

1. **Hero**: Value proposition, primary CTA, visual credibility
2. **Core Features**: Agent catalog, entitlements, search, federation (grid layout)
3. **Architecture & Getting Started**: Technical overview with code examples
4. **Enterprise & Community**: Security features, installation, GitHub/Discord links

## Images
- **Hero Image**: Optional abstract representation of connected agents/nodes network
- **Architecture Diagram**: Technical diagram showing FastAPI, React, PostgreSQL, Redis, Elasticsearch components
- **Feature Icons**: Use Heroicons for consistency (server, shield-check, magnifying-glass, globe-alt)
- **No large hero image** - focus on clean typography and technical credibility

## Key Design Principles
- **Enterprise Focus**: Professional, trustworthy, technically credible
- **Developer-Friendly**: Clear code examples, comprehensive documentation links
- **Minimal Animation**: Subtle hover effects only, no distracting transitions
- **Accessibility**: High contrast, readable fonts, semantic structure
- **Mobile-First**: Responsive design with mobile optimization priority