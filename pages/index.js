import Head from 'next/head'

import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

import Post from '../components/Post'
import Hero from '../components/Hero'

import { sortByDate } from '../utils'
import Blog from '../components/Blog'

export default function Home({ posts }) {
  return (
    <div className='w-full'>
      <Head>
        <title>Shadow Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <Hero />
      <p className='mt-20 mb-10 pl-10 text-4xl font-bold'>Recent Blogs</p>
      <div className='flex flex-wrap center justify-center gap-5'>
        <Blog posts={posts} />
      </div>
    </div>
  )
}

export async function getStaticProps() {
  // Get external data from the file system
  const files = fs.readdirSync(path.join("posts"));

  const posts = files.map(filename => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(path.join("posts", filename), "utf-8");
    const { data: frontmatter } = matter(markdownWithMeta);
    
    return {
      slug,
      frontmatter
    };
  });
  
  // console.log(posts)

  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}