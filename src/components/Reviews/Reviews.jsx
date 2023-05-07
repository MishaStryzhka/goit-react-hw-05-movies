import Notiflix from "notiflix";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Api } from "services/api";

const Reviews = () => {
    const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        async function getData() {
            try {
                const getData = await Api.fetchReviews(movieId)
                // console.log(getData)
                setReviews(getData.results);
            } catch (error) {
                Notiflix.Notify.warning(error.message);
            } finally {
                // setIsVizibleLoadMore(false);
            }
        };

        getData();
    }, [movieId])

    console.log(reviews)

    return (<>
        <ul>
            {reviews.map(author => <li>
                <h3>Author: {author.author}</h3>
                <p>{author.content}</p>

            </li>)}
        </ul>
    </>)
};

export default Reviews; 