import React, { useState, useEffect } from "react";
import { getPokemon } from "../../services/request/indexAPI";
import {
  Name,
  Image,
  DivCard,
  Button,
  DescriptionPokemon,
  Buttons,
  Card,
  TitlePokemons,
  DescriptionDiv,
} from "./style";

const PokemonPage = () => {
  const [pokemon, setPokemon] = useState({});
  const [pokemonId, setPokemonId] = useState(1);
  async function getInfPokemon(id) {
    try {
      const pokemonResponse = await getPokemon(id);


      setPokemonId(id);
      setPokemon(pokemonResponse);
    } catch (error) {
      console.log(error);
    }
  }
  function Next() {
    getInfPokemon(pokemonId + 1);
  }

  function Return() {
    getInfPokemon(pokemonId - 1);
  }

  useEffect(() => {
    getInfPokemon(pokemonId);
  }, []);

  return (
    <>
      <DivCard>
        <Card>
          <Name> {pokemon && pokemon.name && <h3>{pokemon.name}</h3>}</Name>

          <Image>
            {" "}
            {pokemon && pokemon.sprites && (
              <img
                width="250px"
                src={pokemon.sprites.other["official-artwork"].front_default}
              />
            )}
          </Image>
          <DescriptionDiv>
            <TitlePokemons>Indice de jogo</TitlePokemons>
            {pokemon && pokemon.game_indices && (
              <DescriptionPokemon>
                &#10097; {pokemon.game_indices[0].game_index}
              </DescriptionPokemon>
            )}

            <TitlePokemons>Tipo</TitlePokemons>
            {pokemon && pokemon.types && (
              <DescriptionPokemon>
                &#10097; {pokemon.types[0].type.name}
              </DescriptionPokemon>
            )}
            <TitlePokemons>Habilidades</TitlePokemons>
            {pokemon && pokemon.abilities && (
              <DescriptionPokemon>
                &#10097; {pokemon.abilities[0].ability.name}
              </DescriptionPokemon>
            )}
          </DescriptionDiv>
          <Buttons>
            <Button disabled={pokemon.id === 1} onClick={Return}>
              Retornar
            </Button>
            <Button onClick={Next}>Próximo</Button>
          </Buttons>
        </Card>
      </DivCard>
    </>
  );
};
export default PokemonPage;
