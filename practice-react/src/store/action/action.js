import { URL, LIST_POKEMON } from './actionType'

export function getPokemon() {
    return (dispatch, getState) => {
        fetch(URL + 'pokemon')
        .then((Response) => Response.json())
        .then((data) => dispatch({
            type: LIST_POKEMON,
            payload: data.results
        }))
        .catch(err => console.log(err))
    }
}