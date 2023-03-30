import Movie from "./Movie";

export default async function Home() {
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json();
  return (
    <main>
      <h1 className='py-2 m-4 text-center text-4xl'>Trending now 💥💥</h1>
        <div className='bg-black grid gap-16 grid-cols-fluid p-6'>
          {res.results.map((movie:any) => (
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
