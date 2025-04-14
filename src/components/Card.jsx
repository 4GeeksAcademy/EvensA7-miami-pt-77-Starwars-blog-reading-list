import useGlobalReducer from "../hooks/useGlobalReducer";
import { Link } from "react-router-dom";

export const Card = (props) => {
    const { store, dispatch } = useGlobalReducer()
    const handleFavs = () => {
        dispatch({ type: "toggle_favorites", payload: props.name })

    }
   
    return (
        <div className="card mx-3" style={{ "minWidth": "15rem" }}>
            <img src="..." className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <button className="btn" onClick={()=> dispatch({ type: "toggle_favorites", payload: props.name })}>heart icon</button>
                <Link to={'/characters/${props.uid}'} className="btn btn-danger"></Link>
            </div>
        </div>

    )
}