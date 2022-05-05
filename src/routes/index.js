import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "../components/loginPage/login";
import PokemonPage from "../components/pokemonPage/pokemonPage";
import SearchPokemon from "../components/pokemonSearch/index";

const RoutesPages = () => (
 
    <Router>
      <Switch>
        <Route path="/pokemonpage" component={PokemonPage} />
        <Route path="/search" component={SearchPokemon} />
        <Route exact path="/" component={Login} />
      </Switch>
    </Router>
 
);
export default RoutesPages;
