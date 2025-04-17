import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const PlanetDetails = () => {
    const { uid } = useParams();
    const { store, dispatch } = useGlobalReducer();
    const [planet, setPlanet] = useState();

    useEffect(() => {
        getEachPlanet()
    }, [])

    const getEachPlanet = async () => {
        let response = await fetch ("https://www.swapi.tech/api/planets/" + uid)
        let data = await response.json();
        setPlanet(data.result.properties);
        
    }

    return (
        <div className="text-center mt-5">
            <h1>Name:</h1>
            <h3>{planet?.name}</h3>

            <h1>Terrain</h1>
            <h3>{planet?.terrain}</h3>

            <h1>Population</h1>
            <h3>{planet?.population}</h3>

        </div>

    );
}