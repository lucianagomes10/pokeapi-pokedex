import axios from "axios";

export const getPokemon = async (pokemon) => {
  try {
    let baseUrl = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await axios.get(baseUrl);
    const data = await response.data;
    return data;
  } catch (error) {
    console.log("error: ", error);
  }
};

