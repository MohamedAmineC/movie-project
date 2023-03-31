import Movie from "./Movie";
import Link from "next/link";

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json();
  const trendingMovies = res.results.splice(0,8)
  const upcomingData = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${process.env.API_KEY}`);
  const upcomingRes = await upcomingData.json();
  const upcomingMovies = upcomingRes.results.splice(0,8)
  return (
    <main>
      <div className="flex justify-between items-center">
        <h2 className='py-2 m-4 text-4xl'>Trending Movies</h2>
        <Link href="/movies" className="py-2 m-4 text-2xl text-red-500">See all the movies</Link>
      </div>
        <div className='bg-black grid gap-16 lg:grid-cols-4 sm:grid-cols-2 p-6'>
          {trendingMovies.map((movie:any) => (
            <Movie 
            id={movie.id}
            key={movie.id} 
            title={movie.title}
            release_date={movie.release_date} 
            poster_path={movie.poster_path}
            />
          ))}
        </div>
        <h2 className='py-2 m-4 text-4xl'>Upcoming Movies</h2>
        <div className='bg-black grid gap-16 grid-cols-4 p-6'>
          {upcomingMovies.map((movie:any) => (
            <Movie 
            id={movie.id}
            key={movie.id} 
            title={movie.title}
            release_date={movie.release_date} 
            poster_path={movie.poster_path}
            />
          ))}
        </div>
    </main>
  )
}
