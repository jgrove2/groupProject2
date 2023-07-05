import React, {useState, useEffect} from 'react';

const Home = (props) => {
    const [characters, setCharacters] = useState([]);

    const searchCharacters = async () => {
        let temp = await fetch('http://localhost:3001/api/characters');
        console.log(temp);
    }

    useEffect(() => {
        searchCharacters();
    }, [])
    return (
        <>
        <h1>Star Wars Universe Lookup</h1>
        <h4>Who are you looking for?</h4>
        <hr/>
        {
            characters
        }
        </>
    )
}

export default Home;