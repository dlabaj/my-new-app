# 🧭 Compass Theme Quick Reference

> **Quick guide for AI agents working with Compass theme components**

## TL;DR for AI Agents

```
Component not found on patternfly.org? 
→ Go to staging.patternfly.org/ai/generative-uis
```

## Documentation Decision Tree

```
Need a component?
│
├─ Is it a pipeline/topology/workflow visualization?
│  └─ YES → Use staging.patternfly.org/ai/generative-uis/react-flow
│
├─ Is it a standard PatternFly component?
│  └─ YES → Use patternfly.org
│
├─ Has "Compass" in the name?
│  └─ YES → Use staging.patternfly.org/ai/generative-uis
│
├─ Not found on patternfly.org?
│  └─ YES → Use staging.patternfly.org/ai/generative-uis
│
└─ MCP returns no results?
   └─ YES → Use staging.patternfly.org/ai/generative-uis
```

## Essential Links

| When | Use This Link |
|------|---------------|
| 🎯 **Compass/Generative UI** | [staging.patternfly.org/ai/generative-uis](https://staging.patternfly.org/ai/generative-uis/overview) |
| 🔄 **React Flow (Pipelines/Topology)** | [staging.patternfly.org/ai/generative-uis/react-flow](https://staging.patternfly.org/ai/generative-uis/react-flow) |
| 📘 **Standard Components** | [patternfly.org](https://www.patternfly.org/) |
| 📖 **Full Guide** | [Compass Theme Guide](./guidelines/compass-theme-guide.md) |

## Quick Rules

### ✅ DO
- Check staging site first for Compass components
- Use "View Code" sections on staging site
- Reference staging site in code comments
- Test components thoroughly

### ❌ DON'T
- Assume MCP has Compass docs (it doesn't yet)
- Mix staging and production APIs
- Skip checking staging site for new components
- Use outdated examples

## Component Naming Patterns

Look for these patterns to identify staging-only components:

- `Compass*` → Staging site
- `Generative*` → Staging site
- Pipeline/topology/workflow needs → React Flow on staging site
- Component not on patternfly.org → Staging site

## AI Agent Checklist

When generating code with Compass components:

- [ ] Checked staging.patternfly.org for component docs
- [ ] Used latest API from staging site examples
- [ ] Added comment noting staging-only component
- [ ] Verified imports match staging examples
- [ ] Tested component renders correctly

## Common Questions

**Q: Why isn't this component in the PatternFly MCP?**  
A: Compass components aren't published yet. Use staging.patternfly.org.

**Q: Should I use patternfly.org or staging.patternfly.org?**  
A: For Compass components → staging. For standard components → patternfly.org.

**Q: How do I know if a component is a Compass component?**  
A: If it's not on patternfly.org or has "Compass" in the name.

**Q: How do I build pipelines or topology visualizations?**  
A: Use React Flow with PatternFly. See [staging.patternfly.org/ai/generative-uis/react-flow](https://staging.patternfly.org/ai/generative-uis/react-flow).

## Status

- **Branch**: `compass_theme`
- **Docs**: [staging.patternfly.org/ai/generative-uis](https://staging.patternfly.org/ai/generative-uis/overview)
- **Status**: Active development, not yet published
- **Updated**: November 2024

---

**Need more details?** See [Compass Theme Guide](./guidelines/compass-theme-guide.md)

