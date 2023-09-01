import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovie = movies[0];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="w-[75%] m-auto max-md:flex-col-reverse max-md:flex border-2 border-cyan-300 rounded-lg">
      {/* <VideoTitle title={original_title} overview={overview} /> */}
      <VideoBackground movieId={id} />
    </div>
  );
};
export default MainContainer;