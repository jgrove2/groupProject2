import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

const Character = (props) => {
    const {id} = useParams()

    const [character,setCharacter] = useState({name:undefined, mass:undefined, birth_year:undefined})
    const findCharacter = async () => {
        const details = await fetch(`http://localhost:3001/api/characters/${id}`)
        const detailsjson = await details.json()
        console.log(detailsjson)
        setCharacter(detailsjson[0])
    }

    useEffect(() => {findCharacter()
    }, [])
    return(
            <>
            <h1>{character.name}</h1>
            <p>{character.height}</p>
            <p>{character.mass}</p>
            <p>{character.birth_year}</p>
            </>
    )

    
}

export default Character;