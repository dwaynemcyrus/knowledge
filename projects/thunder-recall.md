---
title: "Thunder Recall — The Memory Engine"
slug: "thunder-recall"
status: "concept"
stack: ["Astro", "TypeScript", "Local AI", "IndexedDB", "YAML"]
summary: "A local-first AI system that retrieves Markdown knowledge by time, tag, and context — turning memory into a navigable intelligence."
date: 2025-10-27
---

## Vision
Thunder Recall is the foundation of my AI Design Engineering philosophy: **build intelligence that restores human continuity.**  
It doesn’t just surface data — it returns the *state of mind* you were in when you made it.

## Core Features
- Parses and embeds `.md` and `.yaml` files locally.  
- Generates contextual recall (semantic + temporal).  
- Uses embeddings and time-based weighting for relevance.  
- 100% offline; optionally syncs through iCloud Drive.

## Technical Highlights
- Built in **Astro** with **TypeScript**.  
- Embedding search via **local LLM / MLX**.  
- Local persistence with **IndexedDB**.  
- Markdown metadata processed through YAML front-matter.

> *It doesn’t just find what you lost; it hands you back who you were when you made it.*
