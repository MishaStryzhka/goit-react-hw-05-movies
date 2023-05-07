import Notiflix from "notiflix";
import css from "./MovieDetails.module.css";
import { Suspense, useEffect, useState } from "react";
import { Link, Outlet, useLocation, useParams } from "react-router-dom";
import { Api } from "services/api";

const MovieDetails = () => {
    const { movieId } = useParams();
    const [movieById, setMovieById] = useState([])
    const location = useLocation()
    const [imgURL, setImgURL] = useState("")

    useEffect(() => {
        async function getData() {
            try {
                const getData = await Api.fetchMovieById(movieId)
                setMovieById(getData)
                setImgURL(`https://image.tmdb.org/t/p/w300/${getData.poster_path}`)
            } catch (error) {
                Notiflix.Notify.warning(error.message);
            }
        };

        getData();
    }, [movieId])

    if (movieById) {
        return (
            <>
                <div className="section">
                    {location.state && <Link type="button" className={css.btnBack} to={location.state.from}>Go back</Link>}

                    <div className={css.container}>
                        <img src={imgURL} alt={movieById.title} />
                        <div className={css.containerDescription}>
                            <h2 className={css.title}>{`${movieById.title}(${new Date(movieById.release_date).getUTCFullYear()})`}</h2>
                            <p>User score: {Math.floor(movieById.vote_average * 10)}%</p>
                            <h3>Overview</h3>
                            <p>{movieById.overview}</p>
                            <h3>Genres</h3>
                            {movieById.genres && <p>{movieById.genres.map(genre => `${genre.name} `)}</p>}
                        </div>
                    </div>

                    <div className={css.containerDescription}>
                        <h4>Additional information</h4>

                        <ul>
                            <li><Link type="button" to="cast" state={location.state}>Cast</Link></li>
                            <li><Link type="button" to="reviews" state={location.state}>Reviews</Link></li>
                        </ul>

                        <Suspense fallback={<div>Loading page...</div>}>
                            <Outlet />
                        </Suspense>
                    </div>
                </div>
            </>
        );
    }
};

export default MovieDetails;