import Link from 'next/link'
import Image from 'next/image'
import { splitTech, typeColor } from '../../utils'


function Post({ post }) {
  const { tech, title, excerpt, cover_image, date } = post.frontmatter
  return (

    <Link href={`/blog/${post.slug}`}>
      <div className='w-[350px] rounded-lg h-full'>
        <div className='object-cover w-full relative'>
        <div className='bg-gradient-to-t from-black from-1% to-transparent to-25% w-full h-full absolute rounded-t-lg'/>
        <img 
          src={
            cover_image.startsWith('/') || 
            cover_image.startsWith('http://') || 
            cover_image.startsWith('https://')
              ? cover_image 
              : '/images/why-you-should-use-react/hero-codeeditor.jpg'
          } 
          alt='image' 
          className='rounded-lg w-full h-60 object-cover' 
          width={350} 
          height={200}
        />
        </div>
        <div className='flex flex-col justify-between bg-black rounded-b-lg'>
          <div className='m-4'>
            <p className='text-2xl font-bold mb-2 text-white line-clamp-1'>{title}</p>
            <p className='text-md font-normal text-white text-ellipsis overflow-hidden line-clamp-2'>{excerpt}</p>
          </div>
          <div className='flex items-center justify-between m-4 h-full'>
            <p className='text-white'>{date}</p>
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