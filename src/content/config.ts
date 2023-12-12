import * as sectionTypes from "./_sectionTypes";

import { defineCollection, reference, z } from "astro:content";

const pageCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pageContent: z.array(
      z.discriminatedUnion(
        "_template",
        // @ts-ignore
        Object.values(sectionTypes)
      )
    ),
  }),
});

const headerCollection = defineCollection({
  type: "content",
  schema: z.object({
    pages: z.array(z.object({ page: z.string() })),
    logo: z.string(),
  }),
});

const socialMediaCollection = defineCollection({
  type: "content",
  schema: z.object({
    facebook: z.string(),
    instagram: z.string(),
    linkedin: z.string(),
  }),
});

const servicesCollection = defineCollection({
  type: "content",
  schema: z.object({
    image: z.string(),
    imageAlt: z.string(),
    title: z.string(),
    link: reference("pages"),
  }),
});

const contactCollection = defineCollection({
  type: "content",
  schema: z.object({
    tel: z.string(),
    email: z.string(),
    address1: z.string(),
    address2: z.string(),
  }),
});

export const collections = {
  header: headerCollection,
  pages: pageCollection,
  services: servicesCollection,
  socialMedia: socialMediaCollection,
  contact: contactCollection,
};
