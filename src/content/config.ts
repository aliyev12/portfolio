import { defineCollection, z } from "astro:content";

const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    thumbnail: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    mainImage: z.object({
      url: z.string(),
      alt: z.string(),
    }),
    additionalImages: z.array(
      z.object({
        url: z.string(),
        alt: z.string(),
      })
    ),
    projectURL: z.string(),
    githubRepoLinks: z.array(z.string()),
    excerpt: z.string(),
    tags: z.array(z.string()),
    weight: z.number(),
  }),
});

const uiCollection = defineCollection({
  type: "content",
  schema: z.object({
    mainTitle: z.string(),
  }),
});

const validationCollection = defineCollection({
  type: "content",
  schema: z.object({
    name: z.object({
      required: z.string(),
      minLength: z.string(),
      maxLength: z.string(),
    }),
    email: z.object({
      required: z.string(),
      pattern: z.string(),
      maxLength: z.string(),
    }),
    message: z.object({
      required: z.string(),
      minLength: z.string(),
      maxLength: z.string(),
    }),
    recaptcha: z.object({
      required: z.string(),
      maxLength: z.string(),
    }),
    alert: z.object({
      recaptcha: z.object({
        required: z.string(),
      }),
      sendError: z.string(),
      sendSuccess: z.string(),
    }),
    thanks: z.object({
      title: z.string(),
      body: z.string(),
    }),
  }),
});

export const collections = {
  project: projectCollection,
  ui: uiCollection,
  validation: validationCollection,
};
