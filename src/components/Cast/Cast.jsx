import Actor from "components/Actor/Actor";
import Notiflix from "notiflix";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Api } from "services/api";

const Cast = () => {
    const { movieId } = useParams();
    const [cast, setCast] = useState([]);



    useEffect(() => {
        async function getData() {
            try {
                const getData = await Api.fetchCast(movieId)
                // setMovieById(getData)
                // setImgURL(`https://image.tmdb.org/t/p/w300/${getData.cast.profile_path}`)
                console.log(getData.cast)
                setCast(getData.cast);
            } catch (error) {
                Notiflix.Notify.warning(error.message);
            } finally {
                // setIsVizibleLoadMore(false);
            }
        };

        getData();
    }, [movieId])


    return (<>
        {cast.map(actor => <Actor key={actor.id} actor={actor} />)}
    </>)
};

export default Cast;