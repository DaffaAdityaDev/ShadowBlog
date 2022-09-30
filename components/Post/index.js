import Link from 'next/link'
import style from './Post.module.scss'
function Post({ post }) {
  return (
    <div className={style.container}>
      <img src={post.frontmatter.cover_image} alt='image'/>
      <div className='post-date'>Posted on {post.frontmatter.date}</div>
      <h3>{post.frontmatter.title}</h3>
      <p>{post.frontmatter.excerpt}</p>
      <Link href={`/blog/${post.slug}`}>
        <a className='btn'>Read More</a>
      </Link>
    </div>
  )
}

export default Post