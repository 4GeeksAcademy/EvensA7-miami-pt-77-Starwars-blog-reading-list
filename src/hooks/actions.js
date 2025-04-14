export const getCharacters = async (dispatch) => {
    let response = await fetch ("https://www.swapi.tech/api/people")
    let data = await response.json();

    dispatch({
        type: "add_characters",
        payload: data.results

    })

}

export const getPlanets = async (dispatch) => {
    let response = await fetch ("https://www.swapi.tech/api/planets")
    let data = await response.json();

    dispatch({
        type: "add_planets",
        payload: data.results

    })

}