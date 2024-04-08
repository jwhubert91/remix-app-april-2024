import { LoaderFunctionArgs, json } from "@remix-run/node"
import { Link, useLoaderData } from "@remix-run/react"

export async function loader({ params }: LoaderFunctionArgs) {
  const url = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?language=en-US`,
    {
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhYzg4NWViYTE5NjA3OThkMTc0ZjNjNjI5NzBkYTM2OCIsInN1YiI6IjVmYjViZjYzMGYxZTU4MDAzZThjMDhjYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2K6qlpC-IdBkAnaErKIrcrRvE15vUhRzVlMZFVlaxec",
      },
    }
  )

  return json(await url.json())
}

export default function MovieId() {
  const movie = useLoaderData<typeof loader>()

  return (
    <div className="min-h-screen p-10">
      <img
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
        className="h-[40vh] object-cover w-full rounded-lg"
      />
      <h1 className="text-4xl font-bold text-center pt-5">{movie.title}</h1>
      <div className="flex gap-x-10 mt-10">
        <div className="w-1/2 font-medium">
          <h2>
            <span className="underline">Homepage:</span>{" "}
            <Link to={movie.homepage} target="_blank">
              Link
            </Link>
          </h2>
          <h3>
            <span className="underline">Original language</span>{" "}
            {movie.original_language}
          </h3>
          <p>
            <span className="underline">Overview:</span> {movie.overview}
          </p>
          <p>
            <span className="underline">Release Date:</span>{" "}
            {movie.release_date}
          </p>
        </div>
      </div>
    </div>
  )
}
