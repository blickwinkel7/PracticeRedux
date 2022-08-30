import { LIST_POKEMON } from "../action/actionType";
let initialState = {
    pokemons : []
}

function pokemonReducer(state = initialState, action){
    switch (action.type) {
        case LIST_POKEMON:
            return {
                ...state,
                pokemons:action.payload
            }
    
        default:
            return state
    }

}

export default pokemonReducer