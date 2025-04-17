import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const CharacterDetails = () => {
    const { uid } = useParams();
    const { store, dispatch } = useGlobalReducer();
    const [character, setCharacter] = useState();

    useEffect(() => {
        getEachCharacter()
    }, [])

    const getEachCharacter = async () => {
        let response = await fetch ("https://www.swapi.tech/api/people/" + uid)
        let data = await response.json();
        setCharacter(data.result.properties);
        
    }

    return (
        <div className="text-center mt-5">
            <h1>Name:</h1>
            <h3>{character?.name}</h3>

            <h1>Eye Color</h1>
            <h3>{character?.eye_color}</h3>

            <h1>Birth Year</h1>
            <h3>{character?.birth_year}</h3>

        </div>

    );
}