import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import Movie from '@/app/Movie';
import TVShow from '@/app/TVShow';
import Menu from '@/app/Menu';

export const generateStaticParams = async () => {
  const data = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json();
  return res.results.map((movie:any) => ({
    movie: movie.id
  }))
}

const TVShowDetail = async ({params}:any) => {
  const {show_id} = params;
  const imagePath = "https://image.tmdb.org/t/p/original"
  const res = await fetch(`https://api.themoviedb.org/3/tv/${show_id}?api_key=${process.env.API_KEY}`)
  const data = await res.json()
  const similar = await fetch(`https://api.themoviedb.org/3/tv/${show_id}/similar?api_key=${process.env.API_KEY}`)
  const similarData = await similar.json();
  const similarShows = similarData.results.splice(0,8);
  return (
    <>
    <div className='flex flex-col gap-8 items-center'>
        <Menu />
        <div className='text-center flex flex-col gap-2 items-center'>
            <h2 className='text-2xl'>{data.name}</h2>
            <h2 className='text-lg'>{data.first_air_date}</h2>
            <h2>Number of seasons: {data.number_of_seasons} seasons </h2>
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
        {similarShows?.map((show?:any) => (
          <TVShow 
          id={show.id}
          key={show.id} 
          name={show.name}
          first_air_date={show.first_air_date} 
          poster_path={show.poster_path}
          />
        ))}
      </div>
    </div>
    </>
  )
}

export default TVShowDetail