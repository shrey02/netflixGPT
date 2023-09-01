import { useEffect, useRef,useState } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addSearchMovies } from "../utils/movieSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const searchText = useRef(null);
  const [movieToSearch, setMovieToSearch] = useState(""); 
  // search movie in TMDB
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptMovies = [searchText.current.value]
    setMovieToSearch(searchText.current.value)
    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
   
    dispatch(
      addSearchMovies(...tmdbResults)
    );
  };

  useEffect(()=>{
    handleGptSearchClick();
  },[movieToSearch])

  return (
    <div className="pt-[2%] flex justify-center rounded-lg">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12 rounded-lg"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className="p-3 m-4 mr-0 ml-4 col-span-9 rounded-lg"
          placeholder="Enter here"
        />
        <button
          className="col-span-3 m-4 py-2 px-0 bg-cyan-500 font-bold rounded-lg text-black"
          onClick={handleGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;