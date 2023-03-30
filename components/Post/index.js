import Link from 'next/link'
import style from './Post.module.scss'
import { Box, Flex, Image, Text } from '@chakra-ui/react'


function Post({ post }) {
  const tech = post.frontmatter.tech

  return (
    
      <Link href={`/blog/${post.slug}`}>
        <div className='w-[350px] rounded-lg'>
          <div className='object-cover w-full relative'>
          <div className='bg-gradient-to-t from-black from-1% to-transparent to-25% w-full h-full absolute rounded-t-lg'/>
            <Image src={post.frontmatter.cover_image} alt='image' className='rounded-lg' 
              width={350} height={250} objectFit='cover'/>
          </div>
          <div className='flex flex-col h-[10rem] justify-between bg-black rounded-b-lg'>
            <div className='m-4'>
              <p className='text-2xl font-bold mb-2 text-white'>{post.frontmatter.title}</p>
              <p className='text-md font-normal text-white text-ellipsis
                 overflow-hidden line-clamp-2'>{post.frontmatter.excerpt}</p>
            </div>
            <div className='flex items-center justify-between m-4'>
              <p className='text-white'>{post.frontmatter.date}</p>
              <p className='text-white'>{post.frontmatter.read_time}</p>
              {post.frontmatter.tech ?
                <p className={typeColor(tech)} >{tech}</p>
              : null}
            </div>
          </div>
        </div>
      </Link>
  )
}

function typeColor(arg) {
  switch (arg) {
    case "Javascript":
      return "bg-yellow-400 px-4 font-semibold rounded-xl color-white h-7 flex items-center justify-center";
    case "React":
      return "bg-blue-400 px-4 font-semibold rounded-xl color-white h-7 flex items-center justify-center";
    default:
      return "";
  }
}


export default Post