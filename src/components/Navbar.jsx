import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import {useState,useEffect} from "react"

export const Navbar = () => {

	const { store, dispatch } = useGlobalReducer();
	const [favorites,setFavorites]=useState([])


	useEffect(()=>{
        setFavorites(store.favorites)
    },[store.favorites])
	// console.log(store.favorites)

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
				</Link>
				<div className="ml-auto">
					<div className="dropdown">
						<button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
							Favorites
						</button>
						<ul className="dropdown-menu">
							{favorites.map((item,index)=>{
								return <li key={index}>{item}</li>
							})}
							
							
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};