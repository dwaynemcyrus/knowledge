---
title: Local Embeddings Test
date: 2025-09-22
tags: [AI, Astro, MLX, Local-First]
status: prototype
---

Note: (Use monospaced code snippets or screenshots sparingly. The tone should read like a field log, not a case study.)

## Creation Notes
### **Visual Layout Style**

- **Grid**: 2–3 columns, equal height cards.
    
- **Design:** neutral, typographic. Swiss-style grids, clean rules, no hover clutter.
    
- **Meta info:** small caps for date & status.
    
- **Accent:** maybe a subtle colored tag (AI / Design / UX).
    
### **3. Tone**

- Keep entries short. One screen max.
    
- Each should answer:
    
    1. What did I test?
        
    2. Why does it matter?
        
    3. What did I learn or break?
        

That’s it. You’re not performing; you’re documenting intelligent process.

### **4. Strategic Benefit**

Having `/lab` shows **intellectual honesty and technical depth**.  
Swiss recruiters and design leads love seeing process thinking.  
You look like someone who doesn’t just ship projects — you _build systems and study behavior._
***
## Objective
Tested embedding generation and retrieval entirely in-browser using Apple’s MLX framework.

## Context
Part of the *Thunder Recall* architecture — aimed to achieve client-side semantic search for Markdown notes.

## Outcome
Achieved stable vector storage in IndexedDB with local retrieval under 250 ms.  
UI latency minimal. Next step: fine-tune chunking algorithm for context recall.

## Notes
- No API calls used — 100% offline.  
- Will integrate into Thunder Recall v0.3.
