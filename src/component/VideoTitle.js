import {FiSearch} from 'react-icons/fi'
import {AiOutlineInfoCircle} from 'react-icons/ai'
const VideoTitle = ({ title, overview }) => {
    return (
      <div className="col-span-4 text-white h-[100%] ml-5 mt-6 max-lg:mt-0">
        <h1 className="text-[2.5rem] py-5 font-bold my-10 max-xl:my-0">{title}</h1>
        <p className="text-lg max-xl:text-base max-md:hidden">{overview}</p>
        <div className="my-10 max-xl:my-0">
          <button className="m-3 ml-0 w-[10rem] h-[3.5rem] max-xl:w-[7rem] bg-white text-black font-bold rounded-lg hover:bg-opacity-80 relative">
          Play
          </button>
          <button className="w-[10rem] h-[3.5rem] max-xl:w-[7.5rem] bg-gray-500 text-white font-bold bg-opacity-50 rounded-lg relative">
           More Info
          </button>
        </div>
      </div>
    );
  };
  export default VideoTitle;