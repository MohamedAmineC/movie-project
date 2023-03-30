import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

interface movieProps {
    id: number,
    title: string,
    release_date: string,
    poster_path:string
}

const Movie = ({id,title,release_date,poster_path}:movieProps) => {
  const imagePath = "https://image.tmdb.org/t/p/original"
    return (
    <div>
        <h1>{title}</h1>
        <h2>{release_date}</h2>
        <Link href={`${id}`}>
            <Image 
            src={imagePath + poster_path}
            width={800}
            height={500}
            alt={title}
            />
        </Link>
    </div>
  )
}

export default Movie