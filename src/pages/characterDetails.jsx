import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const CharacterDetails = () => {
    const { uid } = useParams()
    const { store, dispatch } = useGlobalReducer()

    useEffect(() => {
        let response = await fetch ("https://www.swapi.tech/api/people" + payload)
        let data = await response.json();
    }, [])

    return (
        <div className="text-center mt-5">


        </div>

    );
}