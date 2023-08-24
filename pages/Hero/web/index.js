import React from 'react'

import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'
import { sortByDate } from '../../../utils'

function web({ posts }) {
  return (
    <div>web</div>
  )
}

export default web


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