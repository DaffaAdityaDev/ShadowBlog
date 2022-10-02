import Link from 'next/link'
import style from './Post.module.scss'
function Post({ post }) {
  console.log(post)
  return (
    <div className={style.container}>
      <Link href={`/blog/${post.slug}`}>
        <div>
          <img src={post.frontmatter.cover_image} alt='image'/>
          <h3>{post.frontmatter.title}</h3>
          <p className={style.card__description}>{post.frontmatter.excerpt}</p>
          <div className={style.container__detail}>
            <p>{post.frontmatter.date}</p>
            <p>{post.frontmatter.read_time}</p>
            <p>{post.frontmatter.tech}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Post