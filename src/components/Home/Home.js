import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';  // action

const Home = () => {
    const movieText = "Alien";
    const showText = "Mission"
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAsyncMovies(movieText))
        dispatch(fetchAsyncShows(showText))
    }, [dispatch])

    return (
        <div>
            <MovieListing />
        </div>
    )
};

export default Home;