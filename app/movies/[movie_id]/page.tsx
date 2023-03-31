import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Movie from '@/app/Movie';

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
  const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.API_KEY}`)
  const data = await res.json()
  const similar = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=${process.env.API_KEY}`)
  const similarData = await similar.json();
  const similarMovies = similarData.results.splice(0,8);
  return (
    <>
    <div className='flex flex-col gap-8 items-center'>
        <div className='flex justify-center gap-8 items-center'>
                <Link className='bg-blue-400 p-5 text-lg rounded-lg m-4' href="/">Home</Link>
                <Link className='bg-blue-600 p-5 text-lg rounded-lg m-4' href="/movies">Movies</Link>
                <Link className='bg-blue-800 p-5 text-lg rounded-lg m-4' href="/shows">TV Shows</Link>
        </div>
        <div className='text-center flex flex-col gap-2 items-center'>
            <h2 className='text-2xl'>{data.title}</h2>
            <h2 className='text-lg'>{data.release_date}</h2>
            <h2>Runtime: {data.runtime} minutes </h2>
            <h2 className='bg-green-700 inline-block p-3 text-sm rounded-md w-fit'> {data.status} </h2>
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
    <div className='my-10'>
      <h2 className='text-3xl'>Similar Movies</h2>
      <div className='grid gap-16 lg:grid-cols-4 sm:grid-cols-2 p-6'>
        {similarMovies.map((movie:any) => (
          <Movie 
          id={movie.id}
          key={movie.id} 
          title={movie.title}
          release_date={movie.release_date} 
          poster_path={movie.poster_path}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default MovieDetail