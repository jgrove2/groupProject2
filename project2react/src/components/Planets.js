import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

const Planets = ({ ...params }) => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [planetDetails, setPlanetDetails] = useState({ climate: undefined, name: undefined, gravity: undefined, population: undefined });
    const [characters, setCharacters] = useState([]);
    const [films, setFilms] = useState([]);
    const findPlanet = async () => {
        const planet = await fetch(`http://localhost:3001/api/planets/${id}`);
        const details = await planet.json();
        if (details.length === 0) {
            navigate('/404', {
                state: { message: 'Invalid Planet ID'}
            })
        }
        setPlanetDetails(details[0]);
    }
    const findCharacters = async () => {
        const characterIds = await fetch(`http://localhost:3001/api/planets/${id}/characters`);
        const charIdDetails = await characterIds.json();
        let characterDetails = [];
        for await (let char of charIdDetails) {
            const character = await fetch(`http://localhost:3001/api/characters/${char.id}`);
            const characterJson = await character.json();

            characterDetails.push(characterJson[0]);
        }
        setCharacters(characterDetails);
    }

    const findFilms = async () => {
        const filmIds = await fetch(`http://localhost:3001/api/planets/${id}/films`);
        const filmIdDetails = await filmIds.json();
        let filmDetails = [];
        for await (let f of filmIdDetails) {
            const film = await fetch(`http://localhost:3001/api/films/${f.film_id}`);
            const filmJSON = await film.json();

            filmDetails.push(filmJSON[0]);
        }
        setFilms(filmDetails);
    }

    useEffect(() => {
        findPlanet()
        findFilms()
        findCharacters()
    }, [])
    return (
        <>
            <h1>{planetDetails.name}</h1>
            <div>
                <p>{`Released: ${planetDetails.climate}`}</p>
                <p>{`Director: ${planetDetails.population}`}</p>
                <p>{`Episode: ${planetDetails.gravity}`}</p>
            </div>
            <div>
                <h3>Characters</h3>
                {
                    characters.map((char, index) => {
                        return (
                            <p key={index}>
                                <Link to={`/characters/${char.id}`}>
                                    {char.name}
                                </Link>
                            </p>
                        )
                    })
                }
            </div>
            <div>
                <h3>Films</h3>
                {
                    films.map((film, index) => {
                        return (
                            <p key={index}>
                                <Link to={`/films/${film.id}`}>
                                    {film.title}
                                </Link>
                            </p>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Planets;