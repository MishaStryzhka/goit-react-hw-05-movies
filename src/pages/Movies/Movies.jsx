import ListMovies from "components/ListMovies/ListMovies";
import Notiflix from "notiflix";
import { useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { Api } from "services/api";

const Movies = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const [listMovie, setListMovie] = useState([])
    const location = useLocation()
    console.log(searchParams.get("quvery"))

    useEffect(() => {
        if (!searchParams.get("quvery")) {
            return
        };

        async function getData() {
            try {
                const getData = await Api.fetchMovieQuery(searchParams.get("quvery"))
                setListMovie(getData.results)
                // console.log(searchParams.get("quvery"))
            } catch (error) {
                Notiflix.Notify.warning(error.message);
            } finally {
                // setIsVizibleLoadMore(false);
            }
        };

        getData();

    }, [searchParams])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.dir(e.target.elements.searchValue.value)
        setSearchParams({ quvery: e.target.elements.searchValue.value })
    }


    return (
        <div className="section">

            <form onSubmit={handleSubmit}>
                <input type="text" id="searchValue" placeholder="search movies" />
                <button type="submit">search</button>
            </form>

            {listMovie.length !== 0 && <ListMovies listMovies={listMovie} location={location} />}
        </div>
    )
};

export default Movies;