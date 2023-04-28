import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import { ListPokemons } from "../pages/ListPokemons";
import { PokemonById } from "../pages/PokemonById";


const PokeRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/pokemons" element={<ListPokemons/>} />
                <Route path="/pokemons/:id" element={<PokemonById/>} />
            </Routes>
        </>
    );
};

export default PokeRouter;