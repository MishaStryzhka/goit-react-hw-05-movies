import { Link } from "react-router-dom";
import css from "./ListMovies.module.css";
import PropTypes from 'prop-types';


const ListMovies = ({ listMovies, location }) => {
    return (
        <>
            <ul>
                {listMovies.length && listMovies.map(({ title, id }) =>
                    <li key={id} className={css.item}>
                        <Link to={`/movies/${id}`} state={{ from: location }}>{title}</Link>
                    </li>
                )}
            </ul>
        </>
    )
};

export default ListMovies;

ListMovies.propTypes = {
    listMovies: PropTypes.array.isRequired,
    location: PropTypes.object.isRequired,
}