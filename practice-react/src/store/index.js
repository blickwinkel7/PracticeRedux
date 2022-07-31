import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import pokemonReducer from "./reducer/pokemonReducer";

const rootCombine = combineReducers({
    pokemons : pokemonReducer
})
const store = createStore(rootCombine, applyMiddleware(thunk))

export default store