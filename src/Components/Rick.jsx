import styles from './Rick.module.css'
// import RicksGrid from './RicksGrid';
import { Link } from 'react-router-dom';


export default function Rick({ rick }) {

    const imgURL = 'https://rickandmortyapi.com/api/character/avatar/' + rick.id + '.jpeg';

    return (<li className={styles.lista}>
        <Link to={'/personajes/' + rick.id}>
            <img
                width={230}
                heigth={345}
                className={styles.rickImg}
                src={imgURL}
                alt={rick.title} /> </Link>
        <div className={styles.tituloRick}>{rick.name}</div>
    </li>

    );
}