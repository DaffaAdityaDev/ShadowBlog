import Link from 'next/link'

function Header() {
  return (
    <header className="flex items-center bg-gray-800 text-white h-20 px-10">
      <div className="flex justify-between items-center w-full h-full ">
        <div className=''>
          <Link href='/' passHref>
            <h2 className='logo h-full text-4xl'>Shadow Blog</h2>
          </Link>
        </div>
        {/* <div className='flex gap-4'>
          <p className='text-xl font-bold'>Blogs</p>
          <p className='text-xl font-bold'>Web</p>
          <p className='text-xl font-bold'>Mobile</p>
        </div>
        <div className=''>
          <input type='text' placeholder='Search' className='text-white h-full py-2 px-5 rounded-full bg-slate-500' />
        </div> */}
      </div>
    </header>
  )
}

export default Header 
