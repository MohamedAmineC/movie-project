import React from 'react'
import Link from 'next/link'

const Menu = () => {
  return (
    <div className='flex justify-center gap-8 items-center'>
        <Link className='bg-blue-400 p-5 text-lg rounded-lg m-4' href="/">Home</Link>
        <Link className='bg-blue-600 p-5 text-lg rounded-lg m-4' href="/movies">Movies</Link>
        <Link className='bg-blue-800 p-5 text-lg rounded-lg m-4' href="/shows">TV Shows</Link>
    </div>
  )
}

export default Menu