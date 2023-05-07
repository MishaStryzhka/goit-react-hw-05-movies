import { useEffect, useState } from "react";

import { Api } from "services/api";
import Notiflix from "notiflix";
// import css from './Home.module.css';
import { useLocation } from "react-router-dom";
import ListMovies from "components/ListMovies/ListMovies";



const Home = () => {
    const [listTrendingMovies, setlistTrendingMovies] = useState([]);
    const location = useLocation();
    console.log(listTrendingMovies)

    useEffect(() => {
        async function getData() {
            try {
                const getData = await Api.fetchTrendingMovies()
                // console.log(getData)
                setlistTrendingMovies(getData)
            } catch (error) {
                Notiflix.Notify.warning(error.message);
            } finally {
                // setIsVizibleLoadMore(false);
            }
        };

        getData();
    }, [])

    return (
        <section className="section">
            <h1>Trending today</h1>

            <ListMovies listMovies={listTrendingMovies} location={location} />
        </section>
    );
};

export default Home;