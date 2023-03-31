import React from 'react'
import Movie from '@/app/Movie';
import Link from 'next/link';
import {TbPlayerTrackNextFilled} from "react-icons/tb"
import TVShow from '@/app/TVShow';
import Menu from '@/app/Menu';

const SinglePage = async ({params}:any) => {
    const page = Number(params.page);
    const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&page=${page}`); 
    const data = await res.json();
    let pageLists:number[];
    let next:boolean = true;
    let previous:boolean = true;
    if(page < 2){
      pageLists = [page,page+1,page+2]
      previous = false
    } else if(page === 2){
      pageLists = [page-1,page,page+1,page+2]
      previous = false
    } else if(page === 3){
      pageLists = [page-2,page-1,page,page+1,page+2]
      previous = false
    }
     else if(page > 3 && page < 998){
      pageLists = [page-2,page-1,page,page+1,page+2]
    } else if(page === 999){
      pageLists = [page-2,page-1,page,page+1]
      next = false;
    } else {
      pageLists = [page-2,page-1,page]
      next = false;
    }
  return (
    <div>
      <Menu />
      <div className='bg-black grid gap-16 grid-cols-fluid my-10 p-6'>
          {data.results?.map((movie:any) => (
            <TVShow 
            id={movie.id}
            key={movie.id} 
            name={movie.name}
            first_air_date={movie.first_air_date} 
            poster_path={movie.poster_path}
            />
          ))}
      </div>
      <div className='flex justify-center gap-8 [&>*]:p-4 [&>*]:bg-blue-500 [&>*]:rounded-full [&>*]:flex [&>*]:justify-center [&>*]:items-center m-4'>
            <Link href="/shows/pages/1"><TbPlayerTrackNextFilled className='rotate-180' /></Link>
            {previous && <p>...</p>}
            {
                pageLists.map((page) => (
                    <Link href={`/shows/pages/${page}`} key={page}>{page}</Link>
                    ))
                }
            {next && <p>...</p>}
            <Link href="/shows/pages/1000"><TbPlayerTrackNextFilled /></Link>
        </div>
    </div>
  )
}

export default SinglePage