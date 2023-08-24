import Link from 'next/link'

function Header() {
  return (
    <header className="bg-black text-white">
        <div>
          <Link href='/' passHref>
            <h2 className='logo'>Shadow Blog</h2>
          </Link>
        </div>
    </header>
  )
}

export default Header 
