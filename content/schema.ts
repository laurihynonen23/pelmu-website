import { z } from 'zod'

export const newsItemSchema = z.object({
  type: z.literal('news-item'),
  id: z.string(),
  date: z.string(),
  title: z.string(),
  summary: z.string(),
  urgent: z.boolean().default(false),
  visible: z.boolean().default(true),
})

export const bandItemSchema = z.object({
  type: z.literal('band'),
  id: z.string(),
  name: z.string(),
  visible: z.boolean().default(true),
})

const pageSchema = <T extends z.ZodTypeAny>(sectionsSchema: T) =>
  z.object({
    key: z.string(),
    locale: z.string(),
    route: z.string(),
    metadata: z.object({ title: z.string() }),
    sections: z.array(sectionsSchema),
  })

export const pelmuContentBundleSchema = z.object({
  site: z.object({
    siteId: z.string(),
    name: z.string(),
  }),
  locales: z.object({
    fi: z.object({
      news: pageSchema(newsItemSchema),
      bands: pageSchema(bandItemSchema),
    }),
  }),
})

export type NewsItem = z.infer<typeof newsItemSchema>
export type BandItem = z.infer<typeof bandItemSchema>
export type PelmuContentBundle = z.infer<typeof pelmuContentBundleSchema>
