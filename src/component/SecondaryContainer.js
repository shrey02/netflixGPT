import { useSelector } from "react-redux";
import MovieList from "./MovieList";
import { useState } from "react";
import GptSearchBar from "./GptSearch";
import searchImage from "../utils/images/play-button.png";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  const [activeIndex, setActiveIndex] = useState(0);
  const movieArray = [
    { title: "Now Playing", movie: movies.nowPlayingMovies },
    { title: "Trending", movie: movies.upComingMovies },
    { title: "Popular", movie: movies.popularMovies },
    { title: "Upcoming", movie: movies.topRatedMovies },
    { title: "Search", movie: movies.searchMovies },
  ];

  const handleOnClick = (idx) => {
    setActiveIndex(idx);
  };

  return (
    movies && (
      <div className="mb-10 mt-10">
        <div className="w-[50%] max-sm:w-[100%] max-sm:justify-center max-md:w-[95%] max-lg:w-[80%] p-2 bg-black max-sm:bg-transparent m-auto rounded-lg flex justify-between flex-wrap">
          {movieArray.map((movieElement, idx) => (
            <button
              className={`text-center font-bold px-2  h-[2rem] ${
                activeIndex === idx ? "bg-cyan-400 text-gray-900" : "text-white"
              } rounded-md`}
              key={idx}
              onClick={() => {
                handleOnClick(idx);
              }}>
              {movieElement.title}
            </button>
          ))}
        </div>
        {activeIndex !== 4 ? (
          <MovieList movies={movieArray[activeIndex].movie} />
        ) : (
          <>
            <GptSearchBar />{" "}
            {movieArray[activeIndex]?.movie!==null && movieArray[activeIndex]?.movie.length>0 ? (
              <MovieList movies={movieArray[activeIndex].movie} />
            ) : (
              <div>
                <img src={searchImage} className="w-[20rem] h-[20rem] m-auto" />
                <div className="text-white text-2xl font-bold text-center">
                  Searched movies will shown here...
                </div>{" "}
              </div>
            )}
          </>
        )}
      </div>
    )
  );
};
export default SecondaryContainer;
