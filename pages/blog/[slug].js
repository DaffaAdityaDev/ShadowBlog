import fs from 'fs';
import { redirect } from 'next/dist/server/api-utils';
import path from 'path';
import matter from 'gray-matter'
import {marked} from 'marked'
import Link from 'next/link';

import style from '../../styles/Slug.module.scss'

marked.setOptions({
  sanitize: false,
})
function Postpage({ frontmatter: {title, date, cover_image}, slug, content }) {
  
  return (
    <div >
      <Link href="/">
        Go Back
      </Link>
    
      <div>
        <p>{title}</p>
        <p>Posted on {date}</p>
        <img src={cover_image} alt="" className={style.img__hero}/>
        
        <div className={style.container}>
          <div dangerouslySetInnerHTML={{ __html: marked(content)}}></div>
        </div>
      </div>
    </div>
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