import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useState, useEffect } from "react";

export const Home = () => {

	const [characters, setCharacters] = useState();
	const { store, dispatch, getCharacters } = useGlobalReducer()

	useEffect(() => {
		getCharacters()
	}, [])

	useEffect(() => {
		setCharacters(store.characters)
	}, [store.characters])
	
	)
console.log(characters)
return (
	<div className="text-center mt-5">
		<h2>Characters</h2>
		<div>
			{characters?.map((character, index) => {
				return <CharacterCard key={character.uid} name={character.name} />
			})}
		</div>
	</div>
);
}; 