import fs from 'fs';
import { redirect } from 'next/dist/server/api-utils';
import path from 'path';
import matter from 'gray-matter'
import {marked} from 'marked'
import { splitTech, typeColor } from '../../utils' 

import style from '../../styles/blog.module.scss'



marked.setOptions({
  sanitize: false,
})

function Postpage({ frontmatter: {title, date, cover_image, tech, read_time}, slug, content }) {

  // console.log(typeColor("Javascript"))

  const markdown = `Just a link: https://reactjs.com.`

  return (
    <div className='text-white'>
      <div className='max-w-[900px] mx-auto px-10'>
        <div className='relative '>
          <div className='absolute bottom-0 z-20 p-10 w-full'>
            <h1 className='text-[25px] font-bold'>{title}</h1>
            <div className='w-full h-[0.1rem] bg-gray-500' />
            <p className=''>Posted on {date}</p>

            <div className='flex gap-3 justify-end'>
              {
                splitTech(tech).map((tech, index) => {
                  return (
                    <div key={index} className={typeColor(tech)}>
                      <p className='text-white'>{tech}</p>
                    </div>
                  )})
              }
            </div>
          </div>
          <div className='relative mt-20'>
            <div className='bg-gradient-to-t from-black from-1% to-transparent to-25% w-full h-full absolute z-10' /> 
            <img src={cover_image} alt="" className="rounded-xl"/>
          </div>
        </div>
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

  frontmatter.read_time = Math.ceil(content.split(' ').length / 200)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}

export default Postpage