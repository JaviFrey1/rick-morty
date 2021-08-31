import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import Rick from './Rick';
import ricks from './ricks.json'
import styles from './RicksGrid.module.css'
    

export default function RicksGrid() {
    
    const [ricks, setRicks] = useState([]);
    

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/')
        .then(result => result.json())   
        .then(data => {
            setRicks(data.results)  
        });
    }, []);
    
    return (
        <ul className= {styles.grilla}>
        {ricks.map((rick) => (
            <Rick key = {rick.id} rick={rick}/>))}

        </ul>)

}
