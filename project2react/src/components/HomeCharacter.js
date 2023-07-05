import React from "react";
import {Link} from 'react-router-dom';
import Character from "./Character";

const HomeCharacter = ({...props}) => {
    return (
        <>
            <div>
                <Link to={`/character/${props.id}`}>
                    {props.name}
                    <Character/>
                </Link>
            </div>
        </>
    )
}

export default HomeCharacter;