import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

const Character = (props) => {
  const { id } = useParams();

  const [character, setCharacter] = useState({
    name: "",
    mass: "",
    birth_year: "",
  });
  const [homeworldId, setHomeWorldId] = useState("");
  const [homeworldName, setHomeworldName] = useState([]);
  const [films, setFilm] = useState([]);

  const findCharacter = async () => {
    const characterResponse = await fetch(
      `http://localhost:3001/api/characters/${id}`
    );

    const characterObj = await characterResponse.json();

    const tempCharacter = characterObj[0];

    const homeworldResponse = await fetch(
      `http://localhost:3001/api/planets/${tempCharacter.id}`
    );
    const homeworldObj = await homeworldResponse.json();
    const tempHomeworld = homeworldObj;

    console.log(tempCharacter);
    setCharacter(tempCharacter);
    setHomeWorldId(tempCharacter?.homeworld);
    // findHomeworld();
    setHomeworldName(tempHomeworld);
    console.log(tempHomeworld);
  };

  const findHomeworld = async () => {
    const homeworldResponse = await fetch(
      `http://localhost:3001/api/planets/${homeworldId}`
    );
    const homeworldObj = await homeworldResponse.json();
    const tempHomeworld = homeworldObj;
    console.log(homeworldId);
    console.log(tempHomeworld[parseInt(homeworldId)]);

    setHomeworldName(tempHomeworld);
  };

  const findFilm = async () => {
    const filmResponse = await fetch(
      `http://localhost:3001/api/characters/${id}/films`
    );
    const filmObj = await filmResponse.json();
    let filmDetails = [];
    console.log(filmObj);
    for await (let film of filmObj) {
      const filmResponse1 = await fetch(
        `http://localhost:3001/api/films/${film.film_id}`
      );
      const filmJson = await filmResponse1.json();
      filmDetails.push(filmJson[0]);
    }
    setFilm(filmDetails);
  };

  useEffect(() => {
    findCharacter();
    findFilm();
  }, []);
  return (
    <>
      <h1>{character.name}</h1>
      <span>{character.height}</span>
      <span>{character.mass}</span>
      <span>{character.birth_year}</span>
      <div>
        <h1>Homeworld</h1>
        {homeworldName.map((h, index) => {
          return (
            <span key={index}>
              <Link to={`/planets/${h.id}`}>{h.name}</Link>
            </span>
          );
        })}
      </div>
      <div>
        <h1>Film</h1>
        {films.map((f, index) => {
          return (
            <span key={index}>
              <Link to={`/films/${f.id}`}>{f.title}</Link>
            </span>
          );
        })}
      </div>
    </>
  );
};

export default Character;
