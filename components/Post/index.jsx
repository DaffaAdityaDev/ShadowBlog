import Link from 'next/link'
import Image from 'next/image'
import { splitTech, typeColor } from '../../utils'


function Post({ post }) {
  const tech = post.frontmatter.tech
  return (

    <Link href={`/blog/${post.slug}`}>
      <div className='w-[350px] rounded-lg h-full'>
        <div className='object-cover w-full relative'>
        <div className='bg-gradient-to-t from-black from-1% to-transparent to-25% w-full h-full absolute rounded-t-lg'/>
        <img 
          src={
            post.frontmatter.cover_image.startsWith('/') || 
            post.frontmatter.cover_image.startsWith('http://') || 
            post.frontmatter.cover_image.startsWith('https://')
              ? post.frontmatter.cover_image 
              : '/images/why-you-should-use-react/hero-codeeditor.jpg'
          } 
          alt='image' 
          className='rounded-lg' 
          width={350} 
          height={200}
        />
        </div>
        <div className='flex flex-col justify-between bg-black rounded-b-lg'>
          <div className='m-4'>
            <p className='text-2xl font-bold mb-2 text-white line-clamp-1'>{post.frontmatter.title}</p>
            <p className='text-md font-normal text-white text-ellipsis overflow-hidden line-clamp-2'>{post.frontmatter.excerpt}</p>
          </div>
          <div className='flex items-center justify-between m-4'>
            <p className='text-white'>{post.frontmatter.date}</p>
            {/* <p className='text-white'>{post.frontmatter.read_time}</p> */}
            {
              splitTech(tech).map((tech, index) => {
                return (
                  <div key={index} className={typeColor(tech)}>
                    <p className='text-white'>{tech}</p>
                  </div>
                )
              }
              )
            }
          </div>
        </div>
      </div>
    </Link>
    
  )
}




export default Post