import { createSlice } from "@reduxjs/toolkit";


const movieSlice = createSlice({
    name : 'movies',
    initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    trailerVideo: null,
    topRatedMovies: null,
    upComingMovies: null,
    searchMovies:null,
    },
    reducers : {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
          },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload;
          },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
          },
        addTopRatedMovies: (state,action) =>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies: (state,action) =>{
          state.upComingMovies = action.payload;
      },
        addSearchMovies: (state,action) =>{
          state.searchMovies = action.payload;
        }
    }
})


export const { addNowPlayingMovies, addPopularMovies, addTrailerVideo, addTopRatedMovies, addUpcomingMovies, addSearchMovies } = movieSlice.actions;
export default movieSlice.reducer;