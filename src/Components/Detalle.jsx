import { useParams } from 'react-router';
import movie from './movie.json'
import styles from './Detalle.module.css'
import { useEffect, useState } from 'react';
import Rick from './Rick'

export default function Detalle() {
    const { personajesId } = useParams();
    const [ricks, setRicks] = useState(null)

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/' + personajesId)
            .then(result => result.json()).then(data => {
                setRicks(data)
            })
    }, [personajesId])

    if (!ricks) {
        return null;
    }


    const imgURL = 'https://rickandmortyapi.com/api/character/avatar/' + personajesId + '.jpeg';
    //const imgUrl = 'https://image.tmdb.org/t/p/w300' + movie.poster_path;
    return (<div className={styles.detalles}>
        <img className={styles.col + ' ' + styles.detailImg} src={imgURL} alt={ricks.name} />
        <div className={styles.col}>
            <p><strong>Nombre:</strong> {ricks.name}</p>
            <p>
                <strong>Especie:</strong> {ricks.species}{/*<strong>{movie.genres.map(genre => genre.name).join(', ')}</strong>*/}
            </p>
            <p><strong>Genero:</strong> {ricks.gender}</p>
            <p><strong>Origen:</strong> {ricks.origin.name}</p>
            <p><strong>Ubicacion Actual:</strong> {ricks.location.name}</p>

        </div>
    </div>)
}