import React from 'react';
import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import Slider from "react-slick";
import "./MovieListing.scss";
import { Settings } from '../../common/settings';

const MovieListing = () => {

    const movies = useSelector((state) => state.movies.movies)
    const shows = useSelector((state) => state.movies.shows)
    
    let renderMovies, renderShows = "";

    renderMovies = movies.Response === "True" ? (
            movies.Search.map((movie,index) => {
                return (
                    <MovieCard key={index} data={movie} />
                )
            })
        ) : (
            <div className="movies-error">
                <h3>{movies.Error}</h3>
            </div>
        )

        renderShows = shows.Response === "True" ? (
            shows.Search.map((movie,index) => {
                return (
                    <MovieCard key={index} data={movie} />
                )
            })
        ) : (
            <div className="shows-error">
                <h3>{shows.Error}</h3>
            </div>
        )


    return (
        <div className="movie-wrapper">
            <div className="movie-list">
                <h2>Movies</h2>
                <div className="movie-container">
                    <Slider {...Settings}>
                        {renderMovies}
                    </Slider>
                </div>
            </div>
            <div className="show-list">
                <h2>Shows</h2>
                <Slider {...Settings}>
                    {renderShows}
                </Slider>
            </div>
        </div>
    )
};

export default MovieListing;