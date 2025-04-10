export const getCharacters = async (dispatch, payload) => {
    let response = await fetch ("https://www.swapi.tech/api/people")
    let data = await response.json();

    dispatch({
        type: "add_character",
        payload: data.results

    })

}