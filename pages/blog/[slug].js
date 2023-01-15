import fs from 'fs';
import { redirect } from 'next/dist/server/api-utils';
import path from 'path';
import matter from 'gray-matter'
import {marked} from 'marked'
import Link from 'next/link';
import { Box, Container, Text } from '@chakra-ui/react'

import style from '../../styles/Slug.module.scss'

marked.setOptions({
  sanitize: false,
})
function Postpage({ frontmatter: {title, date, cover_image}, slug, content }) {
  
  return (
    <Container maxW="container.lg">
      <Link href="/">
        Go Back
      </Link>
    
      <div>
        <Text fontSize="32px" fontWeight="600">{title}</Text>
        <div>Posted on {date}</div>
        <img src={cover_image} alt="" className={style.img__hero}/>
        
        <div className={style.container}>
          <div dangerouslySetInnerHTML={{ __html: marked(content)}}></div>
        </div>
      </div>
    </Container>
  )
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    
    paths,
    fallback: false,

  }
}

export async function getStaticProps({params: {slug}}) {
  const markdownWithMeta = fs.readFileSync(path.join('posts', slug + '.md'), 'utf-8');
  const {data: frontmatter, content} = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}

export default Postpage