import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

export const generateStaticParams = async () => {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json();
  return res.results.map((movie:any) => ({
    movie: movie.id
  }))
}

const MovieDetail = async ({params}:any) => {
    const {movie_id} = params;
  const imagePath = "https://image.tmdb.org/t/p/original"
    const res = await fetch(`https://api.themoviedb.org/3/movie/${params.movie_id}?api_key=${process.env.API_KEY}`)
    const data = await res.json()
    console.log(data)
  return (
    <div className='flex flex-col gap-8 items-center'>
        <Link className='bg-blue-600 p-5 text-lg rounded-lg' href="/">Home</Link>
        <div className='text-center'>
            <h2 className='text-2xl'>{data.title}</h2>
            <h2 className='text-lg'>{data.release_date}</h2>
            <h2>Runtime: {data.runtime} minutes </h2>
            <h2 className='bg-green-700 inline-block p-3 text-sm rounded-md'> {data.status} </h2>
            <Image
            className='my-8 m-auto'
            src={imagePath + data.poster_path}
            width={500}
            height={500}
            alt={data.title}
            priority
            />
            <p>{data.overview}</p>
        </div>
    </div>
  )
}

export default MovieDetail