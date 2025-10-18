import { defineCollection, z } from "astro:content";

/**
 * Common fields most of your notes can share.
 * Add/adjust per collection below as needed.
 */
const baseFields = {
  title: z.string().optional(),
  description: z.string().optional(),
  date: z.string().or(z.date()).optional(),
  tags: z.array(z.string()).optional(),
  draft: z.boolean().optional(),
};

const _internal = defineCollection({
  type: "content",
  schema: z.object({
    ...baseFields,
  }),
});

const asks = defineCollection({
  type: "content",
  schema: z.object({
    ...baseFields,
  }),
});

const books = defineCollection({
  type: "content",
  schema: z.object({
    ...baseFields,
    author: z.string().optional(),
    isbn: z.string().optional(),
    status: z.enum(["unread","reading","finished"]).optional(),
  }),
});

const dreams = defineCollection({
  type: "content",
  schema: z.object({
    ...baseFields,
    mood: z.string().optional(),
  }),
});

const essays = defineCollection({
  type: "content",
  schema: z.object({
    ...baseFields,
  }),
});

const notes = defineCollection({
  type: "content",
  schema: z.object({
    ...baseFields,
  }),
});

const persons = defineCollection({
  type: "content",
  schema: z.object({
    ...baseFields,
    name: z.string().optional(),
    aka: z.array(z.string()).optional(),
  }),
});

const podcasts = defineCollection({
  type: "content",
  schema: z.object({
    ...baseFields,
    show: z.string().optional(),
    episode: z.string().optional(),
  }),
});

const quotes = defineCollection({
  type: "content",
  schema: z.object({
    ...baseFields,
    source: z.string().optional(),
    author: z.string().optional(),
  }),
});

const references = defineCollection({
  type: "content",
  schema: z.object({
    ...baseFields,
    url: z.string().url().optional(),
  }),
});

const videos = defineCollection({
  type: "content",
  schema: z.object({
    ...baseFields,
    url: z.string().url().optional(),
    channel: z.string().optional(),
  }),
});

export const collections = {
  _internal,
  asks,
  books,
  dreams,
  essays,
  notes,
  persons,
  podcasts,
  quotes,
  references,
  videos,
};
TS

