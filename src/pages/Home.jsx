import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState, useEffect } from "react";
import { Card } from "../components/Card.jsx";
import { getCharacters, getPlanets } from "../hooks/actions.js";

export const Home = () => {

	const [characters, setCharacters] = useState();
	const [planets, setPlanets] = useState();
	const { store, dispatch } = useGlobalReducer();
	
	// console.log(store.favorites);

	useEffect(() => {
		// if (store.characters.length == 0) {
			getCharacters(dispatch)
		// }
		// if (store.planets.length == 0) {
			getPlanets(dispatch)
		// }
	}, [])

	useEffect(() => {
		setCharacters(store.characters)
	}, [store.characters])

	useEffect(() => {
		setPlanets(store.planets)
	}, [store.planets])

	

	return (
		<div className="text-center mt-3">
			<h2>Characters</h2>
			<div className="d-flex col-10 overflow-auto mt-3 mx-auto">
				{characters?.map((character, index) => {
					return <Card key={character.uid} type={"characters"} name={character.name} uid={character.uid} />
				})}
			</div>

			<h2>Planets</h2>
			<div className="d-flex col-10 overflow-auto mt-3 mx-auto">
				{planets?.map((planet, index) => {
					return <Card key={planet.uid} type={"planets"} name={planet.name} uid={planet.uid} />
				})}
			</div>
		</div>
	);
}; 