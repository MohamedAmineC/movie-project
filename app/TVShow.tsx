import Link from 'next/link'
import Image from 'next/image'
import {AiOutlinePlayCircle} from 'react-icons/ai'

interface TVProps {
    id: number,
    name: string,
    first_air_date: string,
    poster_path:string
}

const TVShow = ({id,name,first_air_date,poster_path}:TVProps) => {
    const imagePath = "https://image.tmdb.org/t/p/original"
    return (
    <Link href={`/shows/${id}`}>
      <div className='group relative'>
        <h1 className='absolute bg-black w-full p-4 opacity-0 group-hover:opacity-75 transition-all ease-linear duration-500 text-xl'>{name}</h1>
        <h2 className='absolute bottom-0 text-center bg-black w-full p-4 opacity-0 group-hover:opacity-75 transition-all ease-linear duration-500'>{first_air_date}</h2>
        <AiOutlinePlayCircle className='absolute inset-1/2 text-7xl -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-75 transition-all duration-500 ease-in' />
            <Image 
            src={imagePath + poster_path}
            width={800}
            height={500}
            alt={name}
            />
      </div>
    </Link>
  )
}

export default TVShow