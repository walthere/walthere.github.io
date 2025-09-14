import { defineCollection, defineContentConfig, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    post: defineCollection({
      type: 'page',
      source: 'posts/*.md',
      schema: z.object({
        date: z.string(),
        hot:z.boolean(),
        tag:z.string()
      })
    })
  }
})
