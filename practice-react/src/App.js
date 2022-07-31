import "./App.css";
import { getPokemon } from "./store/action/action";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const pokemonList = useSelector((state) => state.pokemons.pokemons);

  useEffect(() => {
    dispatch(getPokemon());
  }, []);
  return (
    <div>
      <table>
       <thead>
        <tr>
          <th>Name</th>
        </tr>
       </thead>
       <tbody>
       {pokemonList.map((pokemon, i) => {
          return (
            <tr key={i} >
              <td>{pokemon.name}</td>
            </tr>
          );
        })}
       </tbody>
      </table>
    </div>
  );
}

export default App;
