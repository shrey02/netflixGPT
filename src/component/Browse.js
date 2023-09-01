import React from 'react'
import Header from './Header';
import SecondaryContainer from './SecondaryContainer';
import MainContainer from './MainContainer';
import Footer from './Footer';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';

const Browse = () => {
 useNowPlayingMovies();
 usePopularMovies();
 useTopRatedMovies();
 useUpcomingMovies();
  return (
    <div className='bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900 via-gray-950 to-black w-[100%] '>
    <Header/>
    <MainContainer/>
    <SecondaryContainer />  
    
    <Footer/>
    </div>
  )
}

export default Browse;