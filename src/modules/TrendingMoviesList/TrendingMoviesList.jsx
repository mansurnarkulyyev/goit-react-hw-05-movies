import { useState, useEffect } from "react";
import { TailSpin } from "react-loader-spinner";

import MovieList from "../../components/MovieList/MovieList";
import { getTrendingMovies } from "../../shared/Api-services/movies"
import s from "./trending.module.css"

const TrendingMoviesList = () => {
    const [state, setState] = useState({
        items: [],
        error: null,
        loading: false,
    });

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            setState((prevState) => {
                return { ...prevState, loading: true, error: false };
            });
            try {
                const data = await getTrendingMovies();
                setState((prevState) => {
                    return { ...prevState, loading: false, items: data };
                });
            } catch (error) {
                setState((prevState) => {
                    return { ...prevState, loading: false, error };
                });
            }
        };
        fetchTrendingMovies();
    }, []);

    const { items, error, loading } = state;
    return (
        <div className={s.wrap}>
            <h2>Trending today</h2>
            {error && (
                <p>We are sorry, a server error occurred</p>
            )}
            {loading && <TailSpin />}
            {items.length > 0 && <MovieList items={items} />}
        </div>
    );
};

export default TrendingMoviesList;
