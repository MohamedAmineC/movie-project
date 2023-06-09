import React from 'react'
import Movie from '../Movie';
import Link from 'next/link';
import {TbPlayerTrackNextFilled} from "react-icons/tb"
import Menu from '../Menu';

export const metadata = {
    title: 'Find out the latest movies'
}

const MoviesPage = async () => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
    const res = await data.json();
    const pages = [1,2,3];
  return (
    <div>
        <div className='flex justify-between items-center'>
            <h1 className='py-2 m-4 text-4xl'>All the movies</h1>
            <Menu />
        </div>
        <div className='bg-black grid gap-16 grid-cols-fluid p-6'>    
        {
            res.results.map((movie:any) => (
                <Movie 
                id={movie.id}
                key={movie.id} 
                title={movie.title}
                release_date={movie.release_date} 
                poster_path={movie.poster_path}
                />
                ))
        }
        </div>
        <div className='flex justify-center gap-8 [&>*]:p-4 [&>*]:rounded-full [&>*]:flex [&>*]:justify-center [&>*]:items-center m-4'>
            <Link href="/movies/pages/1" className='bg-blue-500'><TbPlayerTrackNextFilled className='rotate-180' /></Link>
            {
                pages.map((page,index) => (
                    page === 1 ? <Link href={`/movies/pages/${page}`} key={index} className='bg-red-500'>{page}</Link> :
                    <Link href={`/movies/pages/${page}`} key={index} className='bg-blue-500'>{page}</Link>
                    ))
                }
            <Link href="/movies/pages/1000" className='bg-blue-500'><TbPlayerTrackNextFilled /></Link>
        </div>
    </div>
  )
}

export default MoviesPage