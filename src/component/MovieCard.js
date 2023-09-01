import { API_OPTIONS, IMG_CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/movieSlice";
const MovieCard = ({ posterPath, movieId }) => {
  
  const dispatch = useDispatch();
  
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");
    const trailer = filterData.length ? filterData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };
  if(posterPath===null)return;
  return (
      <img className="w-[10rem] max-sm:w-[5rem] m-3 rounded-lg hover:scale-105 cursor-pointer" alt="Movie Card" src={IMG_CDN_URL + posterPath}  onClick={getMovieVideos}/>
  );
};
export default MovieCard;