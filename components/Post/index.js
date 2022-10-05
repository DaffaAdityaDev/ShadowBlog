import Link from 'next/link'
import style from './Post.module.scss'


function Post({ post }) {
  const tech = post.frontmatter.tech

  return (
      <Link href={`/blog/${post.slug}`}>
        <div className={style.container}>
          <img src={post.frontmatter.cover_image} alt='image'/>
          <h1>{post.frontmatter.title}</h1>
          <p className={style.card__description}>{post.frontmatter.excerpt}</p>
          <div className={style.container__detail}>
            <p>{post.frontmatter.date}</p>
            <p>{post.frontmatter.read_time}</p>
            {post.frontmatter.tech ?
              <p className={typeColor(tech)}>{post.frontmatter.tech}</p>
            : null}
          </div>
        </div>
      </Link>
  )
}

function typeColor(arg) {
  switch(arg) {
    case "Javascript":
      return style.tech;
      
    case "React":
      return style.react;
  }
}


export default Post