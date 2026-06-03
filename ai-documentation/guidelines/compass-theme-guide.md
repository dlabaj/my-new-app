# Compass Theme & Generative UI Components Guide

## Overview

This project's `compass_theme` branch uses **Compass theme components** that are part of PatternFly's new **Generative UI** initiative. These components are designed specifically for AI-generated interfaces and are optimized for agentic development tools like Cursor and Claude Code.

**⚠️ IMPORTANT**: These components are **not yet officially published** on the main PatternFly website (patternfly.org). Their documentation is only available on the staging site.

## Documentation Sources for Compass Components

### Primary Source: Staging Site
When working with Compass theme components, **always reference the staging site first**:

- **[Staging PatternFly - Generative UIs Overview](https://staging.patternfly.org/ai/generative-uis/overview)** - Main documentation for Compass components
- **Navigate to**: Staging site → "AI" → "Generative UI" section for all Compass-related documentation

### When to Use Staging vs. Production Documentation

#### Use Staging Site (staging.patternfly.org) for:
- ✅ Any component with "Compass" in its name
- ✅ Generative UI components (found under AI → Generative UIs)
- ✅ Components that cannot be found on patternfly.org
- ✅ AI-specific patterns and layouts
- ✅ Components optimized for agentic development

#### Use Production Site (patternfly.org) for:
- ✅ Standard PatternFly React components
- ✅ Core layouts and utilities
- ✅ Charts and standard PatternFly AI components (like Chatbot)
- ✅ Design tokens and styling guidelines
- ✅ General accessibility guidelines

## Compass Theme Components

### PatternFly's Compass Enablement Features

To support the different ways you might use Compass, PatternFly has introduced several new capabilities:

#### Design Tokens

New design tokens that enable:
- **Glass-like visual effects** - Create modern, translucent UI elements
- **Background and border gradients** - Rich, dynamic visual styling
- **Additional smooth animations** - Enhanced motion and transitions
- **Background image explorations** - Flexible background treatments

#### Compass Layout Component

A new **Compass layout component** designed specifically for generative UI patterns and optimized for AI-driven interfaces.

#### Additional Component Variants

**Transparency & Effects:**
- `isPlain` - Makes cards, data lists, and tables transparent to allow background effects (like glass-morphism) to show through

**Layout & Navigation:**
- `isVertical` - Changes action lists to a vertical layout, suitable for sidebars
- `isNav` - Applies a new style to tabs, optimized for top-site navigation bars

**Shape & Form:**
- `isCircle` - Creates circular buttons and icon menu toggles, and pill-shaped standard menu toggles
- `isPill` - Gives the drawer (slide-out panel) a rounded, floating look

**AI Indicators:**
- `isThinking` - Adds a pulsing animation to show a system is actively processing (like an AI "thinking")
- `hasAiIndicator` - Adds a gradient border to visually highlight AI-related content

#### Usage Examples

```jsx
// Glass-like transparent card
<Card isPlain>
  {/* Content shows through with background effects */}
</Card>

// Vertical action list for sidebar
<ActionList isVertical>
  <ActionListItem>Action 1</ActionListItem>
  <ActionListItem>Action 2</ActionListItem>
</ActionList>

// Navigation tabs optimized for top nav
<Tabs isNav>
  <Tab>Home</Tab>
  <Tab>About</Tab>
</Tabs>

// Circular button
<Button isCircle>
  <Icon><PlusIcon /></Icon>
</Button>

// Pill-shaped floating drawer
<Drawer isPill>
  {/* Drawer content */}
</Drawer>

// AI thinking indicator
<Card isThinking>
  {/* Shows pulsing animation while AI processes */}
</Card>

// AI-related content with gradient border
<Card hasAiIndicator>
  {/* AI-generated or AI-related content */}
</Card>
```

**Note**: Always refer to [staging.patternfly.org/ai/generative-uis](https://staging.patternfly.org/ai/generative-uis/overview) for the latest props, APIs, and complete working examples.

### Available Components

The staging site's "Generative UI" section includes:
- Compass-themed layouts and chrome
- AI-optimized form patterns
- Dynamic data display components
- Responsive templates for AI-generated UIs
- **React Flow integration** - For pipelines and topology layouts

**Always check [staging.patternfly.org/ai/generative-uis](https://staging.patternfly.org/ai/generative-uis/overview) for the complete, up-to-date list.**

### React Flow Integration

For building **pipelines, workflows, and topology visualizations**, use React Flow with PatternFly:

- **[React Flow with PatternFly Guide](https://staging.patternfly.org/ai/generative-uis/react-flow)** - Official integration guidance
- React Flow is recommended for node-based diagrams, data flows, and process visualizations
- The staging site provides PatternFly-specific styling and component examples
- Use this for any topology-type layouts or pipeline visualizations

**When to use React Flow:**
- ✅ Pipeline visualizations (CI/CD, data pipelines)
- ✅ Workflow diagrams
- ✅ Network topology views
- ✅ State machine visualizations
- ✅ Any node-and-edge based layouts

## Development Workflow

### 1. Component Discovery Process

When you need to use a component:

```
1. Check if it's a standard PatternFly component
   → Search patternfly.org first
   
2. If not found or marked as "Compass"
   → Go to staging.patternfly.org/ai/generative-uis
   
3. Look in the "Generative UI" section
   → Find component documentation and examples
   
4. If still not found
   → Search staging site or ask for clarification
```

### 2. Implementation Guidelines

```jsx
// ✅ Correct: Using Compass components from staging docs
// Always check staging.patternfly.org for the latest API

import { CompassComponent } from '@patternfly/react-core';

export const MyGenerativeUI = () => {
  return (
    <CompassComponent
      // Props based on staging site documentation
      variant="compass"
    >
      {/* Content */}
    </CompassComponent>
  );
};
```

### 3. Staying Current

Since the Compass theme is under active development:

1. **Check staging site regularly** for updates
2. **Reference the latest examples** from staging.patternfly.org
3. **Follow semantic versioning** for package updates
4. **Monitor the compass_theme branch** for updates

## AI Agent Instructions

### For AI Coding Assistants (Cursor, Claude Code, etc.)

When generating code for this project:

1. **First**: Check if the component exists on patternfly.org
2. **If not found**: Reference staging.patternfly.org/ai/generative-uis
3. **Always**: Use the "View Code" sections on the staging site
4. **Verify**: Component APIs match the staging documentation
5. **Document**: Note when using staging-only components in code comments

### Search Strategy for AI Agents

```
User requests a component → Is it on patternfly.org?
│
├─ YES → Use patternfly.org documentation
│
└─ NO → Check staging.patternfly.org/ai/generative-uis
   │
   ├─ Found → Use staging site documentation
   │
   └─ Not found → Ask user for clarification or search staging site

User requests pipeline/topology/workflow visualization?
│
└─ Use React Flow → staging.patternfly.org/ai/generative-uis/react-flow
```

## MCP and Context7 Integration

### Using MCP for PatternFly Documentation

The PatternFly MCP (Model Context Protocol) server provides access to official PatternFly documentation. However:

- ❌ **MCP does NOT include staging site documentation**
- ❌ **MCP does NOT include unpublished Compass components**
- ✅ **MCP DOES include all published PatternFly components**

### When MCP Returns No Results

If the PatternFly MCP cannot find a component:

1. It's likely a Compass/Generative UI component
2. Go to [staging.patternfly.org/ai/generative-uis](https://staging.patternfly.org/ai/generative-uis/overview)
3. Search the "Generative UI" section
4. Use the staging site's "View Code" examples

### Context7 Strategy

When using Context7 with AI assistants:

```
# Standard components - use MCP
get-library-docs → PatternFly React → Found ✅

# Compass components - use web search or staging site
get-library-docs → PatternFly React → Not Found ❌
→ Manual reference to staging.patternfly.org ✅
```

## Quick Reference

### Essential Links

| Resource | URL | Use For |
|----------|-----|---------|
| **Staging Site - Generative UI** | [staging.patternfly.org/ai/generative-uis](https://staging.patternfly.org/ai/generative-uis/overview) | Compass components, Generative UI |
| **React Flow Integration** | [staging.patternfly.org/ai/generative-uis/react-flow](https://staging.patternfly.org/ai/generative-uis/react-flow) | Pipelines, topology, workflows |
| **Production Site** | [patternfly.org](https://www.patternfly.org/) | Standard PatternFly components |
| **GitHub Repository** | [github.com/patternfly/patternfly-react](https://github.com/patternfly/patternfly-react) | Source code, issues, PRs |

### Component Prefixes to Watch For

- `Compass*` - Likely on staging site only
- `Generative*` - Check staging site first
- Standard PatternFly components - Use patternfly.org

## Troubleshooting

### "Component Not Found on patternfly.org"

**Solution**: Check [staging.patternfly.org/ai/generative-uis](https://staging.patternfly.org/ai/generative-uis/overview)

### "MCP Cannot Find Component Documentation"

**Solution**: This is expected for Compass components. Reference the staging site.

### "Component API Different Than Expected"

**Solution**: Compass components may have different APIs. Always verify against staging site documentation.

### "Import Errors with Compass Components"

**Solution**: 
1. Check package.json for correct PatternFly versions
2. Ensure you're on the compass_theme branch
3. Verify imports match staging site examples

## Best Practices

### For AI-Generated Code

1. ✅ **Add comments** noting when using staging-only components
2. ✅ **Link to staging docs** in component docstrings
3. ✅ **Test thoroughly** as these components may have different APIs
4. ✅ **Check staging site** before each coding session for updates

### For Human Developers

1. ✅ **Bookmark the staging site** for quick reference
2. ✅ **Communicate with AI agents** when components aren't found
3. ✅ **Review generated code** to ensure staging docs were followed
4. ✅ **Stay updated** on Compass component releases

## Transition Plan

### When Compass Components Are Published

Once Compass components are officially published to patternfly.org:

1. Documentation will migrate to main site
2. MCP will include Compass component docs
3. This guide will be updated with migration notes
4. Standard PatternFly documentation practices will apply

### Monitoring for Publication

Watch for:
- Announcements on [PatternFly GitHub](https://github.com/patternfly/patternfly-react)
- Release notes mentioning "Compass" or "Generative UI"
- Component availability on main patternfly.org site

## Summary for AI Agents

**TL;DR**: 
- Compass components = staging.patternfly.org/ai/generative-uis
- Standard components = patternfly.org
- MCP won't have Compass docs yet
- Always check staging site first for Compass theme work
- This project is a template for AI-assisted PatternFly development

---

**Last Updated**: November 2025
**Branch**: compass_theme  
**Status**: Compass components in active development on staging site

