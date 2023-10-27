import Head from 'next/head'
import React, { useState } from 'react'

import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import { sortByDate } from '../utils'

import Post from '../components/Post'
import Hero from '../components/Hero'

import Blog from '../components/Blog'
import ToggleButton from '../components/Button/ToggleDark'

export default function Home({ posts }) {
  const [selectedCategory, setSelectedCategory] = useState('web')
  const [filteredPosts, setFilteredPosts] = useState(posts)

  function filterPosts(type) {
    if (type === selectedCategory) {
      setSelectedCategory('')
      return setFilteredPosts(posts)
    }
    setSelectedCategory(type)
    setFilteredPosts(posts.filter(post => post.frontmatter.category === type))
  }

  return (
    <div className='w-full'>
      <Head>
        <title>Shadow Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

       
      <Hero />
      <div className="flex flex-col gap-6 mt-20 mb-10 pl-10">
        <p className='text-4xl text-white font-bold'>Blogs</p>
        <div>
          <button className={`bg-black text-white px-4 py-2 rounded-lg ml-2 ${selectedCategory === 'web' ? 'bg-blue-500' : ''}`} onClick={() => filterPosts('web')}>Web</button>  
          <button className={`bg-black text-white px-4 py-2 rounded-lg ml-2 ${selectedCategory === 'mobile' ? 'bg-blue-500' : ''}`} onClick={() => filterPosts('mobile')}>Mobile</button>
          <button className={`bg-black text-white px-4 py-2 rounded-lg ml-2 ${selectedCategory === 'productivity' ? 'bg-blue-500' : ''}`} onClick={() => filterPosts('productivity')}>Productivity</button>
          <button className={`bg-black text-white px-4 py-2 rounded-lg ml-2 ${selectedCategory === 'story' ? 'bg-blue-500' : ''}`} onClick={() => filterPosts('story')}>Story</button>
        </div>
        <div className='flex flex-wrap center justify-center gap-5'>
          <Blog posts={filteredPosts} />
        </div>
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


  return {
    props: {
      posts: posts.sort(sortByDate),
    },
  }
}