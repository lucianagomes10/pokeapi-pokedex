import styled from "@emotion/styled";
import theme from "../globalStyle/theme";

export const Name = styled.h1`
  text-align: center;
  color: ${theme.colors.pokewhite};
`;
export const Image = styled.div`
  text-align: center;
`;
export const DivCard = styled.div`
  color: ${theme.colors.pokeblue};
  border-radius: 8px;
  @media (max-width: 600px) {
    text-align: center;
  }
`;
export const Button = styled.button`
font-size: 16px;
color: white;
  text-align: center;
  width: 102px;
  height: 46px;
  border: 2px solid ${theme.colors.pokeblue};
  background: ${theme.colors.pokered};
  border-radius: 8px;
`;
export const TitlePokemons = styled.h1`
  font-size: 18px;
  color: ${theme.colors.pokewhite};
`;

export const DescriptionPokemon = styled.p`
  text-align: start;
  color: ${theme.colors.pokegray};

  font-size: 18px;
`;
export const DescriptionDiv = styled.div`
  padding-left: 48px;
  text-align: start;
  font-size: 16px;
`;

export const Buttons = styled.div`
  padding-bottom: 16px;
  padding-top: 16px;
  display: flex;
  justify-content: space-around;
  text-align: center;
`;
export const Card = styled.div`
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${theme.colors.pokeblue} ;
  box-shadow: 5px 5px 5px 5px ${theme.colors.pokeshadow};
  border: 10px ${theme.colors.pokegray};
  margin-top: 32px;
  margin-bottom: 32px;
  border-radius: 8px;
`;
