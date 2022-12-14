import Head from 'next/head'
import Image from 'next/image'

import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

import Post from '../components/Post'
import Container from '../container'

import { sortByDate } from '../utils'
import PostContainer from '../container/PostContainer'

export default function Home({posts}) {
  return (
    <div>
      <Head>
        <title>Shadow Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <PostContainer>
        {posts.map((post, index) => {
          return (
            <Post key={index} post={post}/>
          )
        })}
      </PostContainer>
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