import noImages from "../../images/no-image.jpg";
import css from "./Actor.module.css";
import PropTypes from 'prop-types';

const Actor = ({ actor }) => {

    return (<div>
        <img className={css.img} src={actor.profile_path
            ? `https://image.tmdb.org/t/p/w200/${actor.profile_path}`
            : noImages}
            alt={actor.name} />
        <h5>{actor.name}</h5>
        <p>Character: {actor.character}</p>
    </div>)
};

export default Actor;

Actor.propTypes = {
    actor: PropTypes.object.isRequired,

}