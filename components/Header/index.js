import Link from 'next/link'
import style from './Header.module.scss'

function Header() {
  return (
    <header className={style.header}>
        <div className={style.container}>
          <Link href='/' passHref>
            <h2 className='logo'>Shadow Blog</h2>
          </Link>
        </div>
    </header>
  )
}

export default Header 