import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState, useEffect } from "react";
import { CharacterCard } from "../components/characterCard.jsx";

export const Home = () => {

	const [characters, setCharacters] = useState();
	const [planets, setPlanets] = useState();
	const { store, dispatch, getCharacters, getPlanets } = useGlobalReducer();

	useEffect(() => {
		if (store.characters.length == 0) {
			getCharacters()
		}
		if (store.planets.length == 0) {
			getPlanets()
		}
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
					return <CharacterCard key={character.uid} type={"character"} name={character.name} uid={character.uid} />
				})}
			</div>

			<h2>Planets</h2>
			<div className="d-flex col-10 overflow-auto mt-3 mx-auto">
				{planets?.map((planet, index) => {
					return <CharacterCard key={planet.uid} type={"planet"} name={planet.name} uid={planet.uid} />
				})}
			</div>
		</div>
	);
}; 