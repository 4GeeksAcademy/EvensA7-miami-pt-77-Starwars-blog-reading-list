import useGlobalReducer from "../hooks/useGlobalReducer";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export const VehicleDetails = () => {
    const { uid } = useParams();
    const { store, dispatch } = useGlobalReducer();
    const [vehicle, setVehicle] = useState();

    useEffect(() => {
        getEachVehicle()
    }, [])

    const getEachVehicle = async () => {
        let response = await fetch ("https://www.swapi.tech/api/vehicles/" + uid)
        let data = await response.json();
        setVehicle(data.result.properties);
        
    }

    return (
        <div className="text-center mt-5">
            <h1>Name:</h1>
            <h3>{vehicle?.name}</h3>

            <h1>Model</h1>
            <h3>{vehicle?.model}</h3>

            <h1>Manufacturer</h1>
            <h3>{vehicle?.manufacturer}</h3>

        </div>

    );
}