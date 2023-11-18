import { DEFAULT_DESCRIPTION, DEFAULT_TITLE } from '@/config/settings'
import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'


export async function GET(context) {
  const posts = await getCollection('posts');
  return rss({
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      ...post.data,
      link: `/posts/${post.slug}/`,
    })),
  });
}