import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex flex-wrap justify-center">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} movieId={movie.id} />
          ))}
      </div>
    </div>
  );
};
export default MovieList;