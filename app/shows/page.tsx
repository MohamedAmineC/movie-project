import React from 'react'
import Movie from '../Movie';
import Link from 'next/link';
import {TbPlayerTrackNextFilled} from "react-icons/tb"
import TVShow from '../TVShow';

const ShowsPage = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`);
    const res = await data.json();
    const pages = [1,2,3];
  return (
    <div>
        <div className='flex justify-between items-center'>
            <h1 className='py-2 m-4 text-4xl'>All the TV Shows</h1>
            <div className='flex justify-center gap-8 items-center'>
                <Link className='bg-blue-400 p-5 text-lg rounded-lg m-4' href="/">Home</Link>
                <Link className='bg-blue-600 p-5 text-lg rounded-lg m-4' href="/movies">Movies</Link>
                <Link className='bg-blue-800 p-5 text-lg rounded-lg m-4' href="/shows">TV Shows</Link>

            </div>
        </div>
        <div className='bg-black grid gap-16 grid-cols-fluid p-6'>    
        {
            res.results.map((movie:any) => (
                <TVShow 
                id={movie.id}
                key={movie.id} 
                name={movie.name}
                first_air_date={movie.first_air_date} 
                poster_path={movie.poster_path}
                />
                ))
        }
        </div>
        <div className='flex justify-center gap-8 [&>*]:p-4 [&>*]:bg-blue-500 [&>*]:rounded-full [&>*]:flex [&>*]:justify-center [&>*]:items-center m-4'>
            <Link href="/shows/pages/1"><TbPlayerTrackNextFilled className='rotate-180' /></Link>
            {
                pages.map((page,index) => (
                    <Link href={`/shows/pages/${page}`} key={index}>{page}</Link>
                    ))
                }
            <Link href="/shows/pages/1000"><TbPlayerTrackNextFilled /></Link>
        </div>
    </div>
  )
}

export default ShowsPage