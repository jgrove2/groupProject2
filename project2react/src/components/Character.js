import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Character = (props) => {
  const { id } = useParams();

  const [character, setCharacter] = useState({
    name: "",
    mass: "",
    birth_year: "",
  });
  const [homeworldId, setHomeWorldId] = useState("");
  const [homeworldName, setHomeworldName] = useState("");

  const findCharacter = async () => {
    const characterResponse = await fetch(
      `http://localhost:3001/api/characters/${id}`
    );

    const characterObj = await characterResponse.json();

    const tempCharacter = characterObj[0];

    console.log(tempCharacter);
    setCharacter(tempCharacter);
    setHomeWorldId(tempCharacter?.homeworld);
  };

  const findHomeworld = async () => {
    const homeworldResponse = await fetch(
      `http://localhost:3001/api/planets/${homeworldId}`
    );
    const homeworldObj = await homeworldResponse.json();
    const tempHomeworld = homeworldObj[0];
    console.log(tempHomeworld.name);

    setHomeworldName(tempHomeworld?.name);
  };

  useEffect(() => {
    findCharacter();
    findHomeworld();
  }, []);
  return (
    <>
      <h1>{character.name}</h1>
      <p>{character.height}</p>
      <p>{character.mass}</p>
      <p>{character.birth_year}</p>
      <div>
        <h1>Homeworld</h1>
        <p>{homeworldName}</p>
      </div>
    </>
  );
};

export default Character;
